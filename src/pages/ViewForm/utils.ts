import { IQuestionJson } from '../../context';
import { TFormInput } from '../../utils/interface';

export const questionJson: IQuestionJson[] = [
  {
    id: 'a1b2c3d4-e5f6-7890-1234-567890abcdef',
    question: 'How satisfied are you with our service?',
    type: TFormInput.RADIO,
    customAttributes: {
      options: ['Very Satisfied', 'Satisfied', 'Neutral', 'Dissatisfied', 'Very Dissatisfied']
    }
  },
  {
    id: 'b2c3d4e5-f6a7-8901-2345-67890abcdef1',
    question: 'Which features did you find most useful?',
    type: TFormInput.CHECKBOX,
    customAttributes: {
      options: ['Feature A', 'Feature B', 'Feature C', 'Feature D', 'Other']
    }
  },
  {
    id: 'c3d4e5f6-a7b8-9012-3456-7890abcdef12',
    question: 'Please upload any relevant files.',
    type: TFormInput.UPLOAD,
    customAttributes: {}
  },
  {
    id: 'd4e5f6a7-b890-1234-5678-90abcdef1234',
    question: 'How likely are you to recommend our service to others?',
    type: TFormInput.NUMBER,
    customAttributes: {
      lowerRange: 1,
      upperRange: 10
    }
  },
  {
    id: 'e5f6a7b8-9012-3456-7890-abcdef123456',
    question: 'Please provide any additional comments or suggestions.',
    type: TFormInput.LONG,
    customAttributes: {}
  },
  {
    id: 'f6a7b890-1234-5678-90ab-cdef12345678',
    question: 'When did you last use our service?',
    type: TFormInput.DATE,
    customAttributes: {}
  },
  {
    id: 'a7b89012-3456-7890-abcdef-1234567890ab',
    question: 'What is your name?',
    type: TFormInput.SHORT,
    customAttributes: {}
  },
  {
    id: 'b8901234-5678-90ab-cdef12-34567890abcd',
    question: 'How would you rate the ease of use of our platform?',
    type: TFormInput.RADIO,
    customAttributes: {
      options: ['Very Easy', 'Easy', 'Neutral', 'Difficult', 'Very Difficult']
    }
  },
  {
    id: 'c9012345-6789-0abc-def123-456789abcdef',
    question: 'Did you encounter any issues or bugs?',
    type: TFormInput.CHECKBOX,
    customAttributes: {
      options: ['Yes', 'No']
    }
  },
  {
    id: 'd0123456-7890-abcd-ef1234-56789abcdef1',
    question: 'How responsive was our customer support?',
    type: TFormInput.RADIO,
    customAttributes: {
      options: ['Very Responsive', 'Responsive', 'Neutral', 'Unresponsive', 'Very Unresponsive']
    }
  }
];
