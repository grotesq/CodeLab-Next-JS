import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Feed from './pages/Feed';
import Index from './pages/Index';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Layout>
          <Route path="/" exact component={Index} />
          <Route path="/feed/:id" component={Feed} />
        </Layout>
      </Router>
    );
  }
}

export default App;
