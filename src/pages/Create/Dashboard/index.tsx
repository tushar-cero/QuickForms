import React, { memo } from 'react';
import { DynamicIcon } from '../../../utils/Icons';
import { useNavigate } from 'react-router';

export const Dashboard = memo(() => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex-between w-full mb-4">
        <div>Breadcrumbs</div>
        <button className="button-primary">New Form</button>
      </div>
      <div className="w-full flex flex-wrap gap-4">
        <div aria-label="form-block" className="form-block form-block-custom ts-box-shadow">
          <div className="text-xl font-medium">Office Feedback Form</div>
          <div className="flex-between w-full">
            <div className="flex flex-col gap-0">
              <span className="text-xs text-zinc-500">Last Updated</span>
              <span className="text-sm font-medium">12/06/2025</span>
            </div>
            <div className="text-xs py-1.5 px-2 rounded-sm bg-green-200 text-green-950 font-semibold">PUBLISHED</div>
          </div>
          <div className="flex-between w-full">
            <button className="flex-center gap-2">
              <DynamicIcon name="EyeIcon" />
              Preview
            </button>
            <button className="flex-center gap-2" onClick={() => navigate('id/manage')} style={{ cursor: 'pointer' }}>
              <DynamicIcon name="SettingsIcon" />
              Manage
            </button>
          </div>
        </div>
      </div>
    </>
  );
});
