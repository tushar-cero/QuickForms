import React, { memo } from 'react';
import { Outlet } from 'react-router';
import { Header } from '../../components/Header';

export const CreateLayout = memo(() => {
  return (
    <>
      <Header authenticated />
      <section className="p-4" style={{ height: 'calc(100vh - 76px)' }}>
        <Outlet />
      </section>
    </>
  );
});
