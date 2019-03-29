import * as React from 'react';
import { DefaultLoader, DefaultLoaderProps } from './defaults/components';
import * as defaultStyle from './scss/asyncHandler.scss';

type Cache = object | any[] | boolean | null;
interface Props {
  request: (args?: any) => Promise<any>;
  cache?: () => Cache;
  onSuccess: (resp: any) => any;
  loader: React.FC<DefaultLoaderProps>;
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

// export default class AsyncHandler extends React.Component<Props, State> {
//   state: State = { data: null, loading: true, error: null };
//
//   static defaultProps = {
//     loader: DefaultLoader,
//     cache: null,
//   };
//
//   async componentDidMount(): Promise<void> {
//     await this.fireRequest();
//   }
//
//   isEmpty = (data: any): boolean => {
//     if (Array.isArray(data)) {
//       return !data.length;
//     }
//     if (typeof data === 'object') {
//       return !Object.keys(data).length;
//     }
//     return !data;
//   };
//
//   async fireRequest(): Promise<void> {
//     this.setState({ loading: true, error: null });
//     const { request } = this.props;
//
//     try {
//       const data = await request();
//       this.setState({ loading: false, data });
//     } catch (error) {
//       this.setState({ loading: false, error });
//     }
//   }
//
//   render(): React.ReactElement {
//     const { data, error, loading } = this.state;
//     const { loader: Loader, noResultsComponent, children } = this.props;
//     const style = {};
//
//     if (error) return <div>{JSON.stringify(error)}</div>;
//     if (loading)
//       return (
//         <div>
//           <Loader cssModuleStyle={style} />
//         </div>
//       );
//     if (this.isEmpty(data)) {
//       return <div>{noResultsComponent || 'None found.'}</div>;
//     }
//
//     return children(data);
//   }
// }

export function withAsyncHandler(config: Props): Function {
  const {
    loader,
    request,
    noResultsComponent,
    errorComponent,
    cache = () => null,
    cssModuleStyles,
  } = config;
  const style = cssModuleStyles || defaultStyle;
  const Loader = loader || DefaultLoader;

  return function addHandlers(Component: any) {
    class ComponentWithHandlers extends React.Component<Props, State> {
      state: State = { data: null, loading: true, error: null };

      componentDidMount(): void {
        this.makeRequest();
      }

      isEmpty = (data: any): boolean => {
        if (Array.isArray(data)) {
          return !data.length;
        }
        if (typeof data === 'object') {
          return !Object.keys(data).length;
        }
        return !data;
      };

      async makeRequest(): Promise<void> {
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
        if (this.isEmpty(data)) {
          return noResultsComponent ? (
            noResultsComponent()
          ) : (
            <div className={`${style.nothingFound} unl-async-handler__nothing-found`}>
              Nothing found.
            </div>
          );
        }

        return <Component data={data} />;
      }
    }

    return ComponentWithHandlers;
  };
}
