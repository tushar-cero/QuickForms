import React, { memo, useCallback, useMemo, useState } from 'react';
import { Header } from '../../components/Header';
import { QuestionBubble } from '../../components/QuestionBubble';
import { InputBubble } from '../../components/InputBubble';
import { TFormInput } from '../../utils/interface';

const questionJson = [
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
    id: 'd4e5f6a7-b8c9-0123-4567-890abcdef123',
    question: 'Please provide any additional comments or suggestions.',
    type: TFormInput.LONG,
    customAttributes: {}
  },
  {
    id: 'e5f6a7b8-c9d0-1234-5678-abcdef12345',
    question: 'What is your name?',
    type: TFormInput.SHORT,
    customAttributes: {}
  },
  {
    id: 'f6a7b8c9-d0e1-2345-6789-abcdef123456',
    question: 'How many times have you used our product?',
    type: TFormInput.NUMBER,
    customAttributes: {
      lowerRange: 0,
      upperRange: 100
    }
  },
  {
    id: 'a7b8c9d0-e1f2-3456-7890-abcdef1234567',
    question: 'When did you first use our product?',
    type: TFormInput.DATE,
    customAttributes: {
      lowerRange: '2020-01-01',
      upperRange: '2024-12-31'
    }
  }
];

interface IQuestionJson {
  id: string;
  question: string;
  type: TFormInput;
  customAttributes?: {
    options?: string[];
    lowerRange?: Date | number | string;
    upperRange?: Date | number | string;
  };
}
// interface IFormContextJson extends IQuestionJson {
//   answer: string;
// }

export const Chat = memo(() => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const currentQuestionContextJson: IQuestionJson = useMemo(
    (): IQuestionJson => questionJson[currentIndex],
    [currentIndex]
  );
  // const [formContextJson, setFormContextJson] = useState<IFormContextJson[]>(() => {
  //   return questionJson.map(question => ({
  //     ...question,
  //     answer: '',
  //     customAttributes: question.customAttributes || {}
  //   }));
  // });

  const handleNext = useCallback(() => {
    if (currentIndex < questionJson.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex]);

  const handlePrevious = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex]);

  return (
    <>
      <Header />
      <section className="form-container mx-auto max-w-2xl">
        <div className="w-full">
          <QuestionBubble question={currentQuestionContextJson?.question} index={currentIndex + 1} />
          <div className="my-6">
            <InputBubble
              type={currentQuestionContextJson?.type}
              customAttributes={currentQuestionContextJson?.customAttributes as { options: string[] }}
            />
          </div>
          <div className="flex-between w-full mt-10">
            <button className="button-secondary" onClick={handlePrevious}>
              PREVIOUS
            </button>
            <button className="button-primary" onClick={handleNext}>
              NEXT
            </button>
          </div>
        </div>
      </section>
    </>
  );
});
