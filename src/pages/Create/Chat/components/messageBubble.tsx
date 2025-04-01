import { Message } from '../../../../utils/interface';

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble = ({ message }: MessageBubbleProps) => {
  const isUser = message.sender === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`p-4 rounded-2xl max-w-[80%] ${
          isUser ? 'bg-white border border-gray-200 text-gray-800' : 'bg-purple-100 text-gray-800'
        }`}
      >
        {isUser ? (
          <p className="whitespace-pre-wrap break-words">{message.content}</p>
        ) : (
          <div className="prose prose-sm max-w-none markdown-content">{message.content}</div>
        )}
        <div className={`text-xs mt-1 text-gray-400 ${isUser ? 'text-right' : ''}`}>
          {new Date(message.timestamp).toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit'
          })}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
