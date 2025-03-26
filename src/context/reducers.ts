import { IQuestionJson } from '.';
import { FormAction } from './actions';

export const formReducer = (state: IQuestionJson[], action: FormAction): IQuestionJson[] => {
  switch (action.type) {
    case 'UPDATE_ANSWER':
      return state.map((question) => (question.id === action.id ? { ...question, answer: action.answer } : question));
    case 'RESET_FORM':
      return state.map((question) => ({ ...question, answer: '' }));
    default:
      return state;
  }
};
