import { ReactNode, useReducer } from 'react';
import { IQuestionJson, FormContext } from '.';
import { formReducer } from './reducers';

// Provider component
export const FormProvider: React.FC<{ children: ReactNode; initialQuestions: IQuestionJson[] }> = ({
  children,
  initialQuestions
}) => {
  const [formState, dispatch] = useReducer(formReducer, initialQuestions);

  return <FormContext.Provider value={{ formState, dispatch }}>{children}</FormContext.Provider>;
};
