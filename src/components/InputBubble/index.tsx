import { memo, useCallback } from 'react';
import { TFormInput } from '../../utils/interface';
import { Selection } from './components/Selection';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

interface IInputBubbleProps {
  type: TFormInput;
  customAttributes?: {
    options: string[];
    lowerRange?: Date | number | string;
    upperRange?: Date | number | string;
  };
  onAnswerChange: (answer: string | string[]) => void;
  currentAnswer?: string | string[];
}

export const InputBubble = memo((props: IInputBubbleProps) => {
  const { type, customAttributes, onAnswerChange, currentAnswer } = props;
  const handleChange = useCallback(
    (value: string | string[]) => {
      onAnswerChange(value);
    },
    [onAnswerChange]
  );

  switch (type) {
    case TFormInput.CHECKBOX:
      return (
        <Selection
          options={customAttributes?.options as string[]}
          isCheckBox
          onChange={handleChange}
          selectedOptions={currentAnswer as string[]}
        />
      );
    case TFormInput.DATE:
      return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            minDate={dayjs(customAttributes?.lowerRange as Date)}
            maxDate={dayjs(customAttributes?.upperRange as Date)}
            onChange={(value) => handleChange(value?.toString() || '')}
            value={currentAnswer ? dayjs(currentAnswer as string) : null}
          />
        </LocalizationProvider>
      );
    case TFormInput.NUMBER:
      return (
        <input
          type="number"
          min={customAttributes?.lowerRange as number}
          max={customAttributes?.upperRange as number}
          placeholder="Type here..."
          value={(currentAnswer as string) || ''}
          onChange={(e) => handleChange(e.target.value)}
        />
      );
    case TFormInput.RADIO:
      return (
        <Selection
          options={customAttributes?.options as string[]}
          onChange={handleChange}
          selectedOptions={currentAnswer as string}
        />
      );
    case TFormInput.LONG:
      return (
        <textarea
          rows={4}
          placeholder="Type here..."
          value={(currentAnswer as string) || ''}
          onChange={(e) => handleChange(e.target.value)}
        />
      );
    case TFormInput.UPLOAD:
      return (
        <form>
          <input
            className="block w-full text-base text-zinc-500 border border-gray-300 rounded-md cursor-pointer bg-gray-50 p-10"
            aria-describedby="user_avatar_help"
            id="user_avatar"
            type="file"
            placeholder="Type here..."
            value={(currentAnswer as string) || ''}
            onChange={(e) => handleChange(e.target.value)}
          />
        </form>
      );
    default:
      return (
        <input
          type="text"
          maxLength={200}
          placeholder="Type here..."
          value={(currentAnswer as string) || ''}
          onChange={(e) => handleChange(e.target.value)}
        />
      );
  }
});
