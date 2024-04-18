import { utils } from '@unleashit/common';
import * as React from 'react';
import {
  DefaultComponentProps,
  DefaultError,
  DefaultErrorComponentProps,
  DefaultLoader,
  DefaultNoResults,
} from './defaults/components';
import { isEmpty } from './utils';

type DefaultComponent = (props: DefaultComponentProps) => React.ReactElement;
type DefaultErrorComponent = (
  props: DefaultErrorComponentProps,
) => React.ReactElement;
export interface AsyncHandlerProps {
  /** Async function that returns a promise or an array of promises */
  request: () => Promise<any> | Promise<any>[];
  /** Optional cache function will be called before making the request */
  cache: () => Record<string, any> | any[] | false | null;
  /** Replace the default loader component */
  loaderComponent: DefaultComponent | React.ReactElement;
  /** Replace the default no results component */
  noResultsComponent: DefaultComponent | React.ReactElement;
  /** Replace the default error component */
  errorComponent: DefaultErrorComponent | React.ReactElement;
  /** CSS module to target internal styles */
  cssModule?: { [key: string]: string };
}
interface State {
  data?: any;
  loading?: boolean;
  error?: any;
}

const { normalizeComponentProp } = utils;

export default class AsyncHandler extends React.Component<
  AsyncHandlerProps & { children: (props: any) => React.ReactNode },
  State
> {
  state: State = { data: null, loading: true, error: null };

  static defaultProps = {
    loaderComponent: DefaultLoader,
    noResultsComponent: DefaultNoResults,
    errorComponent: DefaultError,
    cache: (): null => null,
  };

  async componentDidMount(): Promise<void> {
    await this.makeRequest();
  }

  async makeRequest(): Promise<void> {
    const { request, cache } = this.props;
    const getCache = cache();

    if (getCache) {
      this.setState({ data: getCache, loading: false, error: null });
      return;
    }

    this.setState({ loading: true, error: null });

    try {
      const data = await request();
      this.setState({ loading: false, data, error: null });
    } catch (error) {
      console.error(error);
      this.setState({ loading: false, error });
    }
  }

  render(): React.ReactNode {
    const { data, error, loading } = this.state;
    const {
      loaderComponent: LoaderComponent,
      noResultsComponent: NoResultsComponent,
      errorComponent: ErrorComponent,
      cssModule: theme = {},
      children,
    } = this.props;

    if (error) {
      return normalizeComponentProp(ErrorComponent, {
        cssModule: theme,
        error,
      });
    }
    if (loading) {
      return normalizeComponentProp(LoaderComponent, { cssModule: theme });
    }
    if (isEmpty(data)) {
      return normalizeComponentProp(NoResultsComponent, { cssModule: theme });
    }
    return children(data);
  }
}

// needed a version with optional props because the
// HOC is a plain function that doesn't understand defaultProps
interface HOCProps {
  request: AsyncHandlerProps['request'];
  cache?: AsyncHandlerProps['cache'];
  loaderComponent?: AsyncHandlerProps['loaderComponent'];
  noResultsComponent?: AsyncHandlerProps['noResultsComponent'];
  errorComponent?: AsyncHandlerProps['errorComponent'];
  cssModule?: AsyncHandlerProps['cssModule'];
}

export const withAsyncHandler =
  (config: HOCProps) =>
  (
    Component: React.FC<{ data: any }>,
    // eslint-disable-next-line @typescript-eslint/ban-types
  ): Function =>
  (...rest: any): React.ReactNode => (
    <AsyncHandler {...config}>
      {(data): React.ReactNode => <Component data={data} {...rest} />}
    </AsyncHandler>
  );
