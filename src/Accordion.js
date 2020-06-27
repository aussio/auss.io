/* eslint-disable max-len */
import {
  useState, useRef, useCallback,
} from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as STYLES from './theme/styles';

const borderRadius = STYLES.BUTTON_BORDER_RADIUS;

/*
  An accordion that shows the `header` prop when closed and the `header` and `children` when opened.

  ---

  There's some fancy width shenanigans going on to make the transitions work well. It's to solve the problem
    where when the body content narrows alongside the header when collapsed, the 'height' of the body is then significantly
    longer as the text wraps around the narrowed width. When you then try to transition the height for the opened
    body, the height is then too long for the text that wraps to the newly expanded width.

  Since you are required to provide the start and end heights explicitly for width and height in CSS transitions,
    this means we need to come up with a fancier way of being able to formulate what the expanded width and height
    should be. For height that is tricky since text-wrapping determines the height we need. The easiest and clearest
    way of solving that was to make the width always a fixed width and hide that from the user. This is why the
    transition is done in the order it is specifically - the height first, then the width the header. The width
    of the body is actually staying constant but is overflow hidden.

  Since we are required to have a fixed width, we then can't use normal responsiveness for the width. That's where
    the useCallback comes in to give us a CSS breakpoint effectively. 1000px is the maxWidth, then we use the full
    width of the screen after that.
*/
export default function Accordion({
  header, children,
  backgroundColor, borderColor, textColor, className, // CSS related
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(0);

  // https://reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node
  // callbackRef's are guaranteed to be up to date when the component mounts, as opposed to useRef.
  // This only gets called when the component is mounted and unmounted, which is pretty sweet.
  const widthRef = useCallback((node) => {
    if (node !== null) {
      setWidth(node.getBoundingClientRect().width);
    }
  }, []);

  const collapsedWidth = '300px';
  // On large screens, make the max width 1000px, else use the full width of the screen.
  const openWidth = width < 1000 ? width : '1000px';

  return (
    <div
      ref={widthRef}
      css={{
        // center the maxWidth div below in the middle of a 100%-width div
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        css={{
          boxShadow: '0 2px 6px rgba(0,0,0,.85)',
          transition: isOpen ? 'width 0.25s ease' : 'width 0.25s ease 0.25s',
          width: isOpen ? openWidth : collapsedWidth,
          border: `1px solid ${borderColor}`,
          borderRadius,
        }}
        className={className}
      >
        <Header
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          backgroundColor={backgroundColor}
          color={textColor}
          css={{
            background: backgroundColor,
            padding: '1rem',
            borderBottom: isOpen ? `1px solid ${borderColor}` : '',
            borderRadius: isOpen ? `${borderRadius} ${borderRadius} 0 0` : borderRadius,
            ':hover': {
              filter: 'brightness(105%)',
            },
          }}
        >
          {header}
        </Header>
        <Body
          isOpen={isOpen}
          css={{
            width: openWidth,
          }}
        >
          {children}
        </Body>
      </div>
    </div>
  );
}

function Body({ isOpen, children, className }) {
  const contentRef = useRef(null);

  return (
    <div
      ref={contentRef}
      css={{
        background: 'white',
        transition: isOpen ? 'height 0.25s ease .25s' : 'height 0.25s ease',
        height: isOpen ? contentRef.current.scrollHeight : 0,
        overflow: 'auto',
        borderRadius,
      }}
      className={className}
    >
      <div // This extra div is necessary to give content a margin but have it not overflow
        css={{
          margin: '1rem',
        }}
      >
        {children}
      </div>
    </div>
  );
}

function Header({ isOpen, setIsOpen, color, backgroundColor, children, className }) {
  const CHEVRON_SIZE = 10;

  return (
    // eslint-disable-next-line jsx-a11y/interactive-supports-focus
    <div
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color,
      }}
      onClick={() => { setIsOpen(!isOpen); }}
      onKeyPress={() => { setIsOpen(!isOpen); }}
      role="button"
      className={className}
    >
      <h4
        css={{
          margin: 0,
          padding: 0,
          marginRight: '1rem',
          fontWeight: 600,
        }}
      >
        {children}
      </h4>
      <Chevron
        size={CHEVRON_SIZE}
        direction={isOpen ? 'left' : 'right'}
        color={color}
        backgroundColor={backgroundColor}
      />
    </div>
  );
}

function Chevron({ color, backgroundColor, size, direction }) {
  const rotation = (() => {
    switch (direction) {
      case 'left':
        return 'scaleX(-1)';
      case 'right':
      default:
        return '';
    }
  })();

  return (
    <div
      css={{
        position: 'relative',
        height: `${size * 2}px`,
        width: `${size}px`,
        transform: rotation,
        transition: 'transform 0.5s ease',
        ':before': {
          position: 'absolute',
          content: '""',
          border: `${size}px solid transparent`,
          left: 0,
          borderLeftColor: color,
        },
        ':after': {
          position: 'absolute',
          content: '""',
          border: `${size}px solid transparent`,
          left: '-4px',
          borderLeftColor: backgroundColor,
        },
      }}
    />
  );
}
