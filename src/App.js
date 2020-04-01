/** @jsx jsx */
import { jsx } from '@emotion/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import LandingPage from './LandingPage';
import Blog from './blog/Home';
import BlogPost from './blog/Post';
import { text } from './theme/colors';


export default function App() {
  return (
    <Router>
      <NavigationHeader />
      <Switch>
        <Route
          path="/"
          exact
        >
          <LandingPage />
        </Route>
        <Route
          path="/blog"
          exact
        >
          <Blog />
        </Route>
        <Route
          path="/blog/:slug"
          exact
        >
          <BlogPost />
        </Route>
      </Switch>
    </Router>
  );
}

function NavigationHeader() {
  return (
    <div css={{
      backgroundColor: 'white',
      zIndex: 99,
      position: 'sticky',
      top: 0,
      left: 0,
      right: 0,
      boxShadow: '0 1px 5px rgba(0,0,0,.15)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '.5em 3em',
    }}
    >
      <NavigationLink to="/">
        <img
          src="https://scontent.forf1-3.fna.fbcdn.net/v/t1.0-1/p320x320/38663644_10217834112349951_310180506597588992_n.jpg?_nc_cat=109&_nc_sid=dbb9e7&_nc_ohc=rEYE65Gxb0UAX9t68SV&_nc_ht=scontent.forf1-3.fna&_nc_tp=6&oh=411ffb1db375c08fffc9c6a9e86f7b4a&oe=5EABEEBA"
          alt="Headshot Curtis"
          css={{
            borderRadius: '100%',
            height: '70px',
            margin: 0,
          }}
        />
      </NavigationLink>
      <NavigationLink to="/blog">Blog</NavigationLink>
    </div>
  );
}

function NavigationLink({ to, children, className }) {
  return (
    <Link
      to={to}
      css={{
        textDecoration: 'none',
        color: text,
        lineHeight: 0,
      }}
      className={className}
    >
      {children}
    </Link>
  );
}
