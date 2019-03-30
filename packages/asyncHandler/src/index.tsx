import * as React from 'react';
import {
  DefaultLoader,
  DefaultComponentProps,
  DefaultNoResults,
} from './defaults/components';
import { isEmpty } from './utils';
import * as defaultStyle from './scss/asyncHandler.scss';

interface Props {
  request: (args?: any) => Promise<any>;
  cache: () => object | any[] | boolean | null;
  loader: React.FC<DefaultComponentProps>;
  cssModuleStyles?: { [key: string]: string };
  noResultsComponent?: () => any;
  errorComponent?: (error?: any) => any;
  children: (props: any) => any;
}
interface State {
  data: any;
  loading: boolean;
  error: any;
}

export class AsyncHandler extends React.Component<Props, State> {
  state: State = { data: null, loading: true, error: null };

  static defaultProps = {
    loader: DefaultLoader,
    cache: () => null,
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

  render(): React.ReactElement {
    const { data, error, loading } = this.state;
    const {
      loader: Loader,
      noResultsComponent,
      errorComponent,
      cssModuleStyles,
      children,
    } = this.props;
    const style = cssModuleStyles || defaultStyle;

    if (error) {
      return errorComponent ? (
        errorComponent(error)
      ) : (
        <div className={`${style.errorMessage} unl-async-handler__error-message`}>
          <p>Sorry, we have encountered a problem.</p>
          {error ? <p>{error.message ? error.message : error}</p> : ''}
        </div>
      );
    }
    if (loading) return <Loader cssModuleStyle={style} />;
    if (isEmpty(data)) {
      return noResultsComponent ? (
        noResultsComponent()
      ) : (
        <DefaultNoResults cssModuleStyle={style} />
      );
    }
    return children(data);
  }
}

export const withAsyncHandler = (props: Props) => (
  Component: React.FC<{ data: any }>,
) => (): React.ReactElement => (
  <AsyncHandler {...props}>{data => <Component data={data} />}</AsyncHandler>
);
