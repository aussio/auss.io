/** @jsx jsx */
import { jsx } from '@emotion/core';

export default function ExternalLink({ to, children, className }) {
  return (
    <a
      href={to}
      target="_blank" // Open target in new window
      rel="noopener noreferrer" // Security stuff with opening in new window
      className={className}
    >
      {children}
    </a>
  );
}
