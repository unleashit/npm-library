import * as React from 'react';
import {
  DefaultLoader,
  DefaultNoResults,
  DefaultError,
  DefaultComponentProps,
} from './defaults/components';
import { isEmpty, returnComponentFormat } from './utils';
import * as defaultStyle from './scss/asyncHandler.scss';

type DefaultComponent = (props?: DefaultComponentProps) => React.ReactNode;
interface Props {
  request: () => Promise<any>;
  cache: () => object | any[] | false | null;
  loaderComponent: DefaultComponent;
  noResultsComponent: DefaultComponent;
  errorComponent: DefaultComponent;
  cssModuleStyles?: { [key: string]: string };
  children: (props: any) => any;
}
interface State {
  data: any;
  loading: boolean;
  error: any;
}

export default class AsyncHandler extends React.Component<Props, State> {
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
      cssModuleStyles,
      children,
    } = this.props;
    const style = cssModuleStyles || defaultStyle;

    if (error) {
      return returnComponentFormat(ErrorComponent, { cssModuleStyle: style, error });
    }
    if (loading) {
      return returnComponentFormat(LoaderComponent, { cssModuleStyle: style });
    }
    if (isEmpty(data)) {
      return returnComponentFormat(NoResultsComponent, { cssModuleStyle: style });
    }
    return children(data);
  }
}

export const withAsyncHandler = (config: Props): Function => (
  Component: React.FC<{ data: any }>,
): Function => (...rest: any): React.ReactNode => (
  <AsyncHandler {...config}>
    {(data): React.ReactNode => <Component data={data} {...rest} />}
  </AsyncHandler>
);
