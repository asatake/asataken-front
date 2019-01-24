import * as React from "react";
import { Route, Switch } from "react-router-dom";
import Top from "./pages/Top";
import Sounds from "./pages/Sounds";
import Works from "./pages/Works";
import About from "./pages/About";

interface IRouterProps {
  changePage: (event: any, item: number) => void;
}

interface IRouterState {}

class Router extends React.Component<IRouterProps, IRouterState> {
  public render() {
    return (
      <Switch>
        <Route
          exact={true}
          path="/"
          render={props => <Top changePage={this.props.changePage} />}
        />
        <Route path="/sounds" component={Sounds} />
        <Route path="/works" component={Works} />
        <Route path="/about" component={About} />
      </Switch>
    );
  }
}

export default Router;
