import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTER from './constants/routes';

const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));

function App() {
  return (
    <Router>
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path={ROUTER.LOGIN} component={Login} />
          <Route path={ROUTER.SIGN_UP} component={Signup} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
