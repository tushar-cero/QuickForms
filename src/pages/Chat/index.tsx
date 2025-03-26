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
