/* eslint-disable no-use-before-define */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import MoveableDemo from './DraggableElement';

export default function Demos() {
  return (
    <div
      css={{
        minHeight: '1000px',
        textAlign: 'center',
      }}
    >
      <MoveableDemo />
    </div>
  );
}