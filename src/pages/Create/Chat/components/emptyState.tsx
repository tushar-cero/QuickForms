import { DynamicIcon } from '../../../../utils/Icons';

interface EmptyStateProps {
  onExampleClick: (text: string) => void;
}

export const EmptyState = ({ onExampleClick }: EmptyStateProps) => {
  const examples = ['Create a feedback form for my Saas product.', 'Create a survey for my new product launch.'];

  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4">
      <div className="bg-pink-100 p-4 rounded-full mb-4">
        <DynamicIcon name="HeartHandshakeIcon" />
      </div>
      <h2 className="text-4xl font-bold gradient-text mb-6">QuickForms</h2>

      <div className="grid grid-cols-2 gap-3 w-full max-w-lg">
        {examples.map((example, index) => (
          <button
            key={index}
            onClick={() => onExampleClick(example)}
            className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:bg-purple-50 transition-colors text-gray-800"
          >
            {example}
          </button>
        ))}
      </div>
    </div>
  );
};
