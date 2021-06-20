import { BrowserRouter as Router, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import { Home, Browse, SignIn, SignUp } from "./pages";

const App = () => (
  <Router>
    <Route exact path={ROUTES.HOME}>
      <Home />
    </Route>
    <Route path={ROUTES.BROWSE}>
      <Browse />
    </Route>
    <Route path={ROUTES.SIGN_IN}>
      <SignIn />
    </Route>
    <Route path={ROUTES.SIGN_UP}>
      <SignUp />
    </Route>
  </Router>
);

export default App;
