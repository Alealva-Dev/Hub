import { BrowserRouter, Switch, Route } from 'react-router-dom';

// COMPONENTS
import PrivateRoute from './UI/PrivateRoute/index'

// PAGES
import Login from './pages/Login';
import Main from './pages/Main';

const Routes = () => (
    <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <PrivateRoute isAuthenticated={true} authenticationPath='/' exact path='/main' component={Main} />
        </Switch>
    </BrowserRouter>
);

export default Routes;
