import React from 'react';
import Cursor from '@site/src/components/Cursor';

export default function Root({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Cursor />
      {children}
    </>
  );
}
