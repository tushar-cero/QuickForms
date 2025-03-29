import React, { memo } from 'react';

export const Header = memo(({ authenticated }: { authenticated: boolean }) => {
  return (
    <header className="flex-between p-4">
      <h1 className="text-2xl font-medium leading-none tracking-tight text-gray-900">
        {authenticated ? 'QuickForms' : 'Feedback Form'}
      </h1>
      {authenticated ? (
        <div className="flex-center gap-2">
          <div className="flex-center w-10 h-10 overflow-hidden bg-indigo-600 rounded-full">
            <span className="font-medium text-gray-100">T</span>
          </div>
          <div className="flex flex-col">
            <span className="text-md">Tushar Singh</span>
            <span className="text-sm text-zinc-500">tusharsingh@gmail.com</span>
          </div>
        </div>
      ) : (
        <div />
      )}
    </header>
  );
});
