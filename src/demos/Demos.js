/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import MoveableDemo from './DraggableElement';
import Life from './Life';
import LoadingAnimation from './CSSAnimation';
import * as COLORS from '../theme/colors';

export default function Demos() {
  return (
    <div
      css={{
        minHeight: '1000px',
        textAlign: 'center',
      }}
    >
      <MoveableDemo />
      <div
        css={{
          background: COLORS.veryVeryLight,
          padding: '1rem',
        }}
      >
        <h3>
          Silly loading animation
        </h3>
        <LoadingAnimation />
      </div>
      <Life />
    </div>
  );
}
