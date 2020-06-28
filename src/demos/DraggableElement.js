/* eslint-disable max-len */
/* eslint-disable react/jsx-fragments */
/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import { useState, Fragment } from 'react';
import ExternalLink from '../lib/ExternalLink';
import * as COLORS from '../theme/colors';

export default function MoveableDemo() {
  return (
    <Fragment>
      <h3>Mouse Moveable Element</h3>
      <p
        css={{
          margin: '1rem 5rem',
        }}
      >
        This demo shows a mouse-draggable div in pure React. Hold left-click on the red square and you can drag it around the screen.
      </p>
      <strong>Does not support touch devices.</strong>
      <p
        css={{
          margin: '1rem 5rem',
        }}
      >
        I noticed that it is possible to move the mouse too quickly. I would need to make the onMouseMove listener attached to the entire purple "canvas" to prevent that, since otherwise
        the Javascript is only listening for the mouse moving when it is over top of the red box.
      </p>
      <p
        css={{
          overflowWrap: 'break-word',
        }}
      >
        Source:
        {' '}
        <ExternalLink to="https://github.com/aussio/auss.io/blob/master/src/demos/DraggableElement.js">https://github.com/aussio/auss.io/blob/master/src/demos/DraggableElement.js</ExternalLink>
      </p>
      <div
        css={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          css={{
            position: 'relative',
            height: '400px',
            width: '400px',
            margin: '3rem',
            background: COLORS.veryVeryLight,
            border: `2px solid ${COLORS.light}`,
          }}
        >
          <Moveable />
        </div>
      </div>
    </Fragment>
  );
}

function Moveable() {
  const [left, setLeft] = useState(0);
  const [top, setTop] = useState(0);
  const [initialLeft, setInitialLeft] = useState(0);
  const [initialTop, setInitialTop] = useState(0);
  const [initialMouseX, setInitialMouseX] = useState(0);
  const [initialMouseY, setInitialMouseY] = useState(0);

  const [isMoving, setIsMoving] = useState(false);

  function onMouseDown(event) {
    setInitialMouseX(event.clientX);
    setInitialMouseY(event.clientY);
    startMoving();
  }

  function onMouseUp(event) {
    stopMoving();
  }

  function onMouseMove(event) {
    if (isMoving) {
      setLeft(initialLeft + (event.clientX - initialMouseX));
      setTop(initialTop + (event.clientY - initialMouseY));
    }
  }

  function onMouseLeave() {
    stopMoving();
  }

  function startMoving() {
    setInitialLeft(left);
    setInitialTop(top);
    setIsMoving(true);
  }

  function stopMoving() {
    setIsMoving(false);
  }

  return (
    <div
      css={{
        background: COLORS.red,
        width: '100px',
        height: '100px',

        position: 'absolute',
        top,
        left,
      }}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div
        css={{
          color: 'white',
          display: 'flex',
          flexDirection: 'column',
          '*': {
            margin: 0,
            padding: 0,
          },
        }}
      >
        <p>{`x: ${left}`}</p>
        <p>{`y: ${top}`}</p>
      </div>
    </div>
  );
}
