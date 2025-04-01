import { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { DynamicIcon } from '../../../../utils/Icons';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

const ChatInput = ({ onSendMessage, disabled = false }: ChatInputProps) => {
  const [input, setInput] = useState('');
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  // Auto resize textarea
  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${Math.min(textAreaRef.current.scrollHeight, 150)}px`;
    }
  }, [input]);

  const handleSubmit = () => {
    if (!input.trim() || disabled) return;

    onSendMessage(input.trim());
    setInput('');

    // Reset textarea height
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="bg-white rounded-2xl p-3 shadow-md border border-gray-200">
      <div className="flex items-end">
        <textarea
          ref={textAreaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Message Gemini..."
          className="flex-1 max-h-[150px] resize-none bg-transparent border-0 focus:ring-0 outline-none p-2 text-gray-800"
          disabled={disabled}
          rows={1}
        />
        <button
          onClick={handleSubmit}
          disabled={!input.trim() || disabled}
          className={`p-2 rounded-full ${
            !input.trim() || disabled ? 'text-gray-300' : 'text-purple-600 hover:bg-purple-100'
          } transition-colors`}
          aria-label="Send message"
        >
          <DynamicIcon name="SendIcon" />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
