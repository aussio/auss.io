/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  withRouter,
} from 'react-router-dom';
import LandingPage from './LandingPage';
import Blog from './blog/Home';
import BlogPost from './blog/Post';
import Tweet from './tweets/Tweet';
import Resume from './Resume';
import Demos from './demos/Demos';
import { text } from './theme/colors';
import { MAIN_HEADER_Z_INDEX } from './theme/styles';
import ExternalLink from './lib/ExternalLink';


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


/*
  Handle navigation starting at the top of each page and not where you were scrolled to on the last page. Silly router.
  See: https://reacttraining.com/react-router/web/guides/scroll-restoration/scroll-to-top
*/
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
const ScrollToTopDecorator = withRouter(ScrollToTop);


export default function App() {
  return (
    <Router>
      <ScrollToTopDecorator />
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
        <Route
          path="/tweet/:slug"
          exact
        >
          <Tweet />
        </Route>
        <Route
          path="/resume"
          exact
        >
          <Resume />
        </Route>
        <Route
          path="/demos"
          exact
        >
          <Demos />
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
      zIndex: MAIN_HEADER_Z_INDEX,
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
          src="https://res.cloudinary.com/https-auss-io/image/upload/v1593378289/Just%20Me/headshot_u1dcz7.jpg"
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
          to="/resume"
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
      boxShadow: '0 -3px 5px rgba(0,0,0,.15)',
      width: '100%',
    }}
    >
      <NavigationLink
        to="/"
        css={DISABLED_CSS}
      >
        How this site is made
      </NavigationLink>
      <NavigationLink
        to="/demos"
      >
        Random demos
      </NavigationLink>
      <ExternalLink
        to="https://www.linkedin.com/in/austin-curtis-engineer/"
        css={NAVIGATION_CSS}
      >
        <img
          src="https://res.cloudinary.com/https-auss-io/image/upload/v1591980363/code%20snippets/LI-In-Bug_ufwbdx.png"
          alt="Austin Curtis LinkedIn"
          css={{
            height: NAV_IMAGE_SIZE_SMALL,
            margin: 0,
          }}
        />
      </ExternalLink>
      <ExternalLink
        to="https://github.com/aussio/"
        css={NAVIGATION_CSS}
      >
        <img
          src="https://res.cloudinary.com/https-auss-io/image/upload/v1591979616/code%20snippets/GitHub-Mark-64px_n7j0ed.png"
          alt="Austin Curtis GitHub"
          css={{
            height: NAV_IMAGE_SIZE_SMALL,
            margin: 0,
          }}
        />
      </ExternalLink>
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
