import React, { memo } from 'react';

interface ISelectionProps {
  options: string[];
  isCheckBox?: boolean;
}

export const Selection = memo((props: ISelectionProps) => {
  const { options, isCheckBox } = props;
  return (
    <fieldset className="flex flex-col gap-6">
      {options.map((option) => (
        <label key={option} className="flex justify-start items-center gap-4">
          <input type={isCheckBox ? 'checkbox' : 'radio'} name="radio-group" value={option} />
          <span className="text-xl text-zinc-500">{option}</span>
        </label>
      ))}
    </fieldset>
  );
});
