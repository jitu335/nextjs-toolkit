import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//It was old------
//  export default function App({ Component, pageProps }) {
//    return <Component {...pageProps} />
//  }


 import { Provider } from 'react-redux';
 import { wrapper } from './store/store'; 


function MyApp({ Component, ...rest }) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;

 