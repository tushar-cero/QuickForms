import React, { memo } from 'react';

interface IQuestionBubbleProps {
  index: number;
  question: string;
}

export const QuestionBubble = memo((props: IQuestionBubbleProps) => {
  const { index, question } = props;
  return (
    <div className="flex justify-start items-baseline gap-3 w-full">
      <span className="text-xl font-medium text-zinc-500">{`${index}.`}</span>
      <span className="text-2xl">{question}</span>
    </div>
  );
});
