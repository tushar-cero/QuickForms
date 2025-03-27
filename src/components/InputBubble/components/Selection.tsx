import React, { memo, useMemo } from 'react';

interface ISelectionProps {
  options: string[];
  isCheckBox?: boolean;
  onChange?: (selected: string | string[]) => void;
  selectedOptions?: string | string[];
}

export const Selection = memo((props: ISelectionProps) => {
  const { options, isCheckBox = false, onChange, selectedOptions } = props;

  const selectedOptionsArray = useMemo(
    () => (Array.isArray(selectedOptions) ? selectedOptions : selectedOptions ? [selectedOptions] : []),
    [selectedOptions]
  );

  const handleChange = (option: string) => {
    if (!onChange) return;

    if (isCheckBox) {
      // For checkbox, toggle selection
      const newSelected = selectedOptionsArray.includes(option)
        ? selectedOptionsArray.filter((item) => item !== option)
        : [...selectedOptionsArray, option];

      onChange(newSelected);
    } else {
      // For radio, always set to the selected option
      onChange(option);
    }
  };

  return (
    <fieldset className="flex flex-col gap-6">
      {options.map((option) => (
        <label key={option} className="flex justify-start items-center gap-4 cursor-pointer">
          <input
            type={isCheckBox ? 'checkbox' : 'radio'}
            name={isCheckBox ? 'checkbox-group' : 'radio-group'}
            value={option}
            checked={isCheckBox ? selectedOptionsArray.includes(option) : selectedOptionsArray[0] === option}
            onChange={() => handleChange(option)}
            className="cursor-pointer"
          />
          <span className="text-xl text-zinc-500 cursor-pointer">{option}</span>
        </label>
      ))}
    </fieldset>
  );
});
