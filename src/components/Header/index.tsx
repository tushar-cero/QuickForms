import React, { memo } from 'react';

export const Header = memo(() => {
  return (
    <header className="flex-between p-4">
      <h1 className="text-2xl font-medium leading-none tracking-tight text-gray-900">Feedback Form</h1>
      <div className="flex-start gap-4">
        <div />
      </div>
    </header>
  );
});
