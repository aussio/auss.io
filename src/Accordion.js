import { useState, useRef } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as STYLES from './theme/styles';

const borderRadius = STYLES.BUTTON_BORDER_RADIUS;

export default function Accordion({
  header, children,
  backgroundColor, borderColor, className, // CSS related
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      css={{
        // center the maxWidth div below in the middle of a 100%-width div
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        css={{
          boxShadow: '0 1px 3px rgba(0,0,0,.55)',
          maxWidth: '600px',
          border: `1px solid ${borderColor}`,
          borderRadius,
        }}
        className={className}
      >
        <Header
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          color={backgroundColor}
          css={{
            background: backgroundColor,
            padding: '.5rem',
            borderBottom: isOpen ? `1px solid ${borderColor}` : '',
            borderRadius: isOpen ? `${borderRadius} ${borderRadius} 0 0` : borderRadius,
            ':hover': {
              filter: 'brightness(105%)',
            },
          }}
        >
          {header}
        </Header>
        <Body isOpen={isOpen}>{children}</Body>
      </div>
    </div>
  );
}

function Body({ isOpen, children }) {
  const contentRef = useRef(null);

  return (
    <div
      ref={contentRef}
      css={{
        background: 'white',
        transition: 'height 0.25s ease',
        height: isOpen ? contentRef.current.scrollHeight : 0,
        overflow: 'auto',
        borderRadius,
      }}
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

function Header({ isOpen, setIsOpen, color, children, className }) {
  const CHEVRON_SIZE = 10;

  return (
    // eslint-disable-next-line jsx-a11y/interactive-supports-focus
    <div
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onClick={() => { setIsOpen(!isOpen); }}
      onKeyPress={() => { setIsOpen(!isOpen); }}
      role="button"
      className={className}
    >
      <p
        css={{
          margin: 0,
          padding: 0,
          marginRight: '1rem',
        }}
      >
        {children}
      </p>
      <Chevron
        size={CHEVRON_SIZE}
        direction={isOpen ? 'up' : 'down'}
        color={color}
      />
    </div>
  );
}

function Chevron({ color, size, direction }) {
  const rotation = (() => {
    switch (direction) {
      case 'up':
        return 'scaleY(-1)';
      case 'down':
      default:
        return '';
    }
  })();

  return (
    <icon
      css={{
        position: 'relative',
        height: `${size}px`,
        width: `${size * 2}px`,
        transform: rotation,
        transition: 'transform 0.5s ease',
        ':before': {
          position: 'absolute',
          content: '""',
          border: `${size}px solid transparent`,
          top: 0,
          left: 0,
          borderTopColor: 'black',
        },
        ':after': {
          position: 'absolute',
          content: '""',
          border: `${size}px solid transparent`,
          top: '-4px',
          left: 0,
          borderTopColor: color,
        },
      }}
    />
  );
}
