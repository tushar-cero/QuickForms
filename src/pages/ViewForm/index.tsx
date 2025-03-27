import React, { memo, useCallback, useMemo, useState } from 'react';
import { Header } from '../../components/Header';
import { QuestionBubble } from '../../components/QuestionBubble';
import { InputBubble } from '../../components/InputBubble';
import { useFormContext } from '../../hooks/useFormContext';
import { FormProvider } from '../../context/provider';
import { questionJson } from './utils';

const ViewForm = memo(() => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const { formState, dispatch } = useFormContext();
  const currentQuestionContextJson = useMemo(() => formState[currentIndex], [currentIndex, formState]);

  const handleNext = useCallback(() => {
    console.log('NEXT', currentIndex, formState.length - 1);
    if (currentIndex < formState.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  }, [currentIndex, formState.length]);

  const handlePrevious = useCallback(() => {
    console.log('PREVIOUS', currentIndex, formState.length - 1);
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  }, [currentIndex]);

  const handleAnswerUpdate = useCallback(
    (answer: string | string[]) => {
      dispatch({
        type: 'UPDATE_ANSWER',
        id: currentQuestionContextJson.id,
        answer
      });
    },
    [currentQuestionContextJson, dispatch]
  );

  return (
    <>
      <Header />
      <section className="form-container mx-auto max-w-2xl">
        <div className="w-full">
          <QuestionBubble question={currentQuestionContextJson?.question} index={currentIndex + 1} />
          <div className="my-6 min-h-[200px]">
            <InputBubble
              type={currentQuestionContextJson?.type}
              customAttributes={currentQuestionContextJson?.customAttributes as { options: string[] }}
              onAnswerChange={handleAnswerUpdate}
              currentAnswer={currentQuestionContextJson?.answer}
            />
          </div>
          <div className="flex-between w-full mt-10">
            {currentIndex === 0 ? (
              <div />
            ) : (
              <button className="button-secondary" onClick={handlePrevious}>
                PREVIOUS
              </button>
            )}
            <button className="button-primary" onClick={handleNext} disabled={!currentQuestionContextJson?.answer}>
              {currentIndex === formState.length - 1 ? 'SUBMIT' : 'NEXT'}
            </button>
          </div>
        </div>
      </section>
    </>
  );
});

export const ViewFormWrapper = memo(() => {
  return (
    <FormProvider initialQuestions={questionJson}>
      <ViewForm />
    </FormProvider>
  );
});
