import { useState, useRef } from 'react';
/** @jsx jsx */
import { jsx } from '@emotion/core';
import * as STYLES from './theme/styles';

const borderRadius = STYLES.BUTTON_BORDER_RADIUS;

export default function Accordion({
  header, children,
  backgroundColor, borderColor, textColor, className, // CSS related
}) {
  const [isOpen, setIsOpen] = useState(false);

  const collapsedWidth = '300px';
  const openWidth = '1000px';

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
        fontWeight: 600,
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
