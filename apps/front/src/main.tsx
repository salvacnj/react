import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './app/app';
import SignIn from './app/components/SignIn';
import store from './app/redux/store';

ReactDOM.render(
  true ? (
    <Provider store={store}>
      <BrowserRouter>
        <StrictMode>
          <App />
        </StrictMode>
      </BrowserRouter>
    </Provider>
  ) : (
    <SignIn />
  ),
  document.getElementById('root')
);
