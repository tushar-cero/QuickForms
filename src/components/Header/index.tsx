import React, { memo } from "react";

export const Header = memo(() => {
  return (
    <header className="flex-between p-4">
      <h1>Feedback Form</h1>
      <div className="flex-start gap-4">
        <button className="button-secondary">Clear</button>
        <button className="button-primary">Submit</button>
      </div>
    </header>
  );
});
