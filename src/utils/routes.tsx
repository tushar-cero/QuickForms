import React from 'react';
import { Routes, Route } from 'react-router';
import { ViewFormWrapper } from '../pages/ViewForm';
import { Chat } from '../pages/Create/Chat';
import { CreateLayout } from '../pages/Create';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<CreateLayout />}>
        {/* /dashboard */}
        {/* /{form_id} */} <Route index path="/" element={<Chat />} />
        {/* /{form_id}/view */}
        {/* /{form_id}/settings */}
      </Route>
      <Route path="form" element={<ViewFormWrapper />} />
    </Routes>
  );
};
