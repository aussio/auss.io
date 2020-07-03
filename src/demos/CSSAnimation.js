/* eslint-disable jsx-a11y/accessible-emoji */
/** @jsx jsx */
import { jsx } from '@emotion/core';

export default function LoadingAnimation() {
  return (
    <div>
      <h3
        css={{
          textAlign: 'center',
          animation: 'pulse 1s ease-in-out 0s alternate infinite',
          '@keyframes pulse': {
            '0%': {
              transform: 'scale(0.95)',
            },
            '100%': {
              transform: 'scale(1.05)',
            },
          },
        }}
      >
        Loading...
      </h3>
      <h3
        css={{
          textAlign: 'center',
          animation: 'rollaround 3s ease-in-out 0s alternate infinite',
          '@keyframes rollaround': {
            '0%': {
              transform: 'translate(-100px) rotate(-720deg)',
            },
            '100%': {
              transform: 'translate(100px) rotate(720deg)',
            },
          },
        }}
      >
        🤠
      </h3>
    </div>
  );
}
