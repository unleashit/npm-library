import { returnComponentFormat } from '@unleashit/common';
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
type DefaultErrorComponent = (props: DefaultErrorComponentProps) => React.ReactElement;
export interface AsyncHandlerProps {
  request: () => Promise<any>;
  cache: () => Record<string, unknown> | any[] | false | null;
  loaderComponent: DefaultComponent | React.ReactElement;
  noResultsComponent: DefaultComponent | React.ReactElement;
  errorComponent: DefaultErrorComponent | React.ReactElement;
  cssModuleStyles?: { [key: string]: string };
}
interface State {
  data?: any;
  loading?: boolean;
  error?: any;
}

export default class AsyncHandler extends React.Component<
  AsyncHandlerProps & { children: (props: any) => any },
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
      cssModuleStyles: theme = {},
      children,
    } = this.props;

    if (error) {
      return returnComponentFormat(ErrorComponent, { cssModuleStyle: theme, error });
    }
    if (loading) {
      return returnComponentFormat(LoaderComponent, { cssModuleStyle: theme });
    }
    if (isEmpty(data)) {
      return returnComponentFormat(NoResultsComponent, { cssModuleStyle: theme });
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
  cssModuleStyles?: AsyncHandlerProps['cssModuleStyles'];
}

// eslint-disable-next-line @typescript-eslint/ban-types
export const withAsyncHandler =
  (config: HOCProps) =>
  (
    Component: React.FC<{ data: any }>,
    // eslint-disable-next-line @typescript-eslint/ban-types
  ): Function =>
  (...rest: any): React.ReactNode =>
    (
      <AsyncHandler {...config}>
        {(data): React.ReactNode => <Component data={data} {...rest} />}
      </AsyncHandler>
    );
