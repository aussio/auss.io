/** @jsx jsx */
import { jsx } from '@emotion/core'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Home';
import Blog from './blog/Home';
import BlogPost from './blog/Post';


export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true} >
          < Home />
        </Route>
        <Route path="/blog" exact={true} >
          < Blog />
        </Route>
        <Route path="/blog/:id" exact={true}>
          <BlogPost />
        </Route>
      </Switch>
    </Router>
  );
}