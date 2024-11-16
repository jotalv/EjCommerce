import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import DashboardPage from './DashboardPage';
import ProtectedRoute from './ProtectedRoute';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        
        {/* Rota protegida */}
        <ProtectedRoute exact path="/dashboard" component={DashboardPage} />

        {/* Outras rotas públicas */}
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router>
  );
};

export default App;