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


const DISABLED_CSS = {
  color: 'lightgrey',
  pointerEvents: 'none',
  textDecoration: 'line-through',
};

const NAVIGATION_CSS = {
  textDecoration: 'none',
  color: text,
  lineHeight: 0,
  marginLeft: '2rem',
  '@media(max-width: 550px)': {
    fontSize: '14px',
    marginLeft: '1rem',
  },
  '@media(min-width: 551px) and (max-width: 650px)': {
    fontSize: '16px',
    marginLeft: '1rem',
  },
};

const NAV_IMAGE_SIZE_SMALL = '40px';
const NAV_IMAGE_SIZE_NORMAL = '70px';


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
      <NavigationFooter />
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
          src="https://res.cloudinary.com/https-auss-io/image/upload/v1591901055/Just%20Me/Screen_Shot_2020-04-17_at_1.38.37_PM_ddnk2t.png"
          alt="Headshot of Austin"
          css={{
            borderRadius: '100%',
            height: NAV_IMAGE_SIZE_NORMAL,
            margin: 0,
            '@media(max-width: 550px)': {
              height: NAV_IMAGE_SIZE_SMALL,
            },
          }}
        />
      </NavigationLink>
      <div
        css={{
          display: 'flex',
          justifyContent: 'flex-end',
        }}
      >
        <NavigationLink
          to="/"
          css={DISABLED_CSS}
        >
          Resume/CV
        </NavigationLink>
        <NavigationLink to="/blog">Blog</NavigationLink>
        <NavigationLink
          to="/"
          css={DISABLED_CSS}
        >
          Travel
        </NavigationLink>
        <NavigationLink
          to="/"
          css={DISABLED_CSS}
        >
          Library
        </NavigationLink>
      </div>
    </div>
  );
}

function NavigationFooter() {
  return (
    <div css={{
      backgroundColor: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100px',
    }}
    >
      <NavigationLink
        to="/"
        css={DISABLED_CSS}
      >
        How this site is made
      </NavigationLink>
      <NavigationExternalLink
        to="https://www.linkedin.com/in/austin-curtis-engineer/"
      >
        <img
          src="https://res.cloudinary.com/https-auss-io/image/upload/v1591980363/code%20snippets/LI-In-Bug_ufwbdx.png"
          alt="Austin Curtis LinkedIn"
          css={{
            height: NAV_IMAGE_SIZE_SMALL,
            margin: 0,
          }}
        />
      </NavigationExternalLink>
      <NavigationExternalLink
        to="https://github.com/aussio/"
      >
        <img
          src="https://res.cloudinary.com/https-auss-io/image/upload/v1591979616/code%20snippets/GitHub-Mark-64px_n7j0ed.png"
          alt="Austin Curtis GitHub"
          css={{
            height: NAV_IMAGE_SIZE_SMALL,
            margin: 0,
          }}
        />
      </NavigationExternalLink>
    </div>
  );
}

function NavigationLink({ to, children, className }) {
  return (
    <Link
      to={to}
      css={NAVIGATION_CSS}
      className={className}
    >
      {children}
    </Link>
  );
}

function NavigationExternalLink({ to, children, className }) {
  return (
    <a
      href={to}
      target="_blank" // Open target in new window
      rel="noopener noreferrer" // Security stuff with opening in new window
      css={NAVIGATION_CSS}
      className={className}
    >
      {children}
    </a>
  );
}
