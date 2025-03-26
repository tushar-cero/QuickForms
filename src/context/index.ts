import React, { createContext } from 'react';
import { TFormInput } from '../utils/interface';
import { FormAction } from './actions';

export interface IQuestionJson {
  id: string;
  question: string;
  type: TFormInput;
  answer?: string | string[];
  customAttributes?: {
    options?: string[];
    lowerRange?: Date | number | string;
    upperRange?: Date | number | string;
  };
}

// Context
export const FormContext = createContext<{
  formState: IQuestionJson[];
  dispatch: React.Dispatch<FormAction>;
}>({
  formState: [],
  dispatch: () => null
});
