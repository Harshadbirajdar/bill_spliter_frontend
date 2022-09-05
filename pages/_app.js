import { Provider } from "react-redux";
import store from "../redux/store";
import "../styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ToastContainer theme="colored" />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
