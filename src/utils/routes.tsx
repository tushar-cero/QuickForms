import React from 'react';
import { Routes, Route } from 'react-router';
// ----- View -----
import { ViewFormWrapper } from '../pages/ViewForm';
// ----- Create -----
import { CreateLayout } from '../pages/Create';
import { Dashboard } from '../pages/Create/Dashboard';
import { Chat } from '../pages/Create/Chat';
import { Settings } from '../pages/Create/Settings';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<CreateLayout />}>
        {/* /dashboard */} <Route index path="/" element={<Dashboard />} />
        {/* /{form_id}/manage */} <Route index path="/id/manage" element={<Chat />} />
        {/* /{form_id}/settings */} <Route index path="/id/settings" element={<Settings />} />
        {/* /{form_id}/preview */}
      </Route>
      <Route path="form" element={<ViewFormWrapper />} />
    </Routes>
  );
};
