import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Nav from './components/Nav';
import { StoreProvider } from './state/GlobalState';
import Dashboard from './pages/Dashboard';
import Document from './pages/Document';
import ReportDashboard from './pages/ReportDashboard';
import About from './pages/About';

import './index.css';

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_BASEURL + '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <Nav />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/dashboard" component={Dashboard} client={client} />
              <Route exact path="/create/:reportId" component={ReportDashboard} />
              <Route exact path="/about" component={About} />
              <Route path="/document/:reportId" component={Document} />
              <Route path="/reportdashboard/:reportId" component={ReportDashboard} />
              <Route component={NoMatch} />
            </Switch>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
