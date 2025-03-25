import { memo } from 'react';
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
}

export const InputBubble = memo((props: IInputBubbleProps) => {
  const { type, customAttributes } = props;
  switch (type) {
    case TFormInput.CHECKBOX:
      return <Selection options={customAttributes?.options as string[]} isCheckBox />;
    case TFormInput.DATE:
      return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            minDate={dayjs(customAttributes?.lowerRange as Date)}
            maxDate={dayjs(customAttributes?.upperRange as Date)}
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
        />
      );
    case TFormInput.RADIO:
      return <Selection options={customAttributes?.options as string[]} />;
    case TFormInput.LONG:
      return <textarea rows={4} placeholder="Type here..." />;
    case TFormInput.UPLOAD:
      return (
        <form>
          <input
            className="block w-full text-base text-zinc-500 border border-gray-300 rounded-md cursor-pointer bg-gray-50 p-10"
            aria-describedby="user_avatar_help"
            id="user_avatar"
            type="file"
            placeholder="Type here..."
          />
        </form>
      );
    default:
      return <input type="text" maxLength={200} placeholder="Type here..." />;
  }
});
