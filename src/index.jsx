import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import './styles/index.less';
import 'antd/dist/antd.less';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';  // Corrected import
import rootReducer from './state/reducers';

// Apply middleware to the Redux store
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

import { ExampleListPage } from './components/pages/ExampleList';
import { ExampleDataViz } from './components/pages/ExampleDataViz';
import { ImageList } from './components/pages/ImageList';

import { Footer } from '../src/components/common/Footer';
import { Header } from './components/common/Header';
import { HomePage } from './components/pages/Home';
import { LandingPage } from './components/pages/Landing';
import { LoadingComponent } from './components/common';
import { LoginPage } from './components/pages/Login';
import { NotFoundPage } from './components/pages/NotFound';
import { UserListPage } from './components/pages/UserList';
import { UserDetailPage } from './components/pages/UserDetail';

import UserList from './components/pages/template/Redux-connect/UserList_connect';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router>
      <React.StrictMode>
        <Layout
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
        }}
        >
          <Header />
          <App />
          <Footer />
        </Layout>
      </React.StrictMode>
    </Router>
  </Provider>
);

// eslint-disable-next-line react-refresh/only-export-components
function App() {

  return (
    <Switch>
      <Route path="/user-list/:user_id" component={UserDetailPage} />
      <Route path="/user-list" component={UserListPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/landing" component={LandingPage} />
      <Route
        path="/"
        exact
        component={() => <HomePage LoadingComponent={LoadingComponent} />}
      />
      <Route path="/images" component={ImageList} />
      <Route path="/example-list" component={ExampleListPage} />
      <Route path="/datavis" component={ExampleDataViz} />

      <Route path="/users" component={UserList} />

      <Route component={NotFoundPage} />
    </Switch>
  );
}
