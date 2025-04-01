import { useState, useRef, useEffect, memo } from 'react';
import { nanoid } from 'nanoid';

import { Message } from '../../../utils/interface';
import { EmptyState } from './components/emptyState';
import MessageBubble from './components/messageBubble';
import ChatInput from './components/chatInput';
import { DynamicIcon } from '../../../utils/Icons';

export const Chat = memo(() => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = (content: string) => {
    if (!content.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: nanoid(),
      content,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMessage]);

    // Simulate AI response
    setIsTyping(true);
    setTimeout(() => {
      const aiMessage: Message = {
        id: nanoid(),
        content: generateAIResponse(content),
        sender: 'ai',
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const generateAIResponse = (userMessage: string): string => {
    // Simple response generation logic for demo purposes
    const responses = [
      `I understand you're saying: "${userMessage}". That's an interesting point.`,
      `Thanks for sharing your thoughts on "${userMessage}". Let me think about that.`,
      `Regarding "${userMessage}" - I have some insights I can share about this topic.`,
      "I'm processing your message. Here's what I think:\n\n- First, let's consider the context\n- There are multiple perspectives to explore\n- We can dive deeper if you'd like",
      "That's a great question! Here's my response:\n\n```\nconst answer = 'It depends on several factors';\nconsole.log(answer);\n```"
    ];

    return responses[Math.floor(Math.random() * responses.length)];
  };

  return (
    <div className="grid grid-cols-2 gap-4 h-full">
      <div className="flex flex-col">
        <div className="flex justify-start items-center w-full">
          <DynamicIcon name="ChevronLeftIcon" /> Name of the form
        </div>
        <div ref={chatContainerRef} className="flex-1 overflow-y-auto mb-4 px-4 scroll-smooth">
          {messages.length === 0 ? (
            <EmptyState onExampleClick={handleSendMessage} />
          ) : (
            <div className="flex flex-col space-y-4 py-4">
              {messages.map((message) => (
                <MessageBubble key={message.id} message={message} />
              ))}
              {isTyping && (
                <div className="self-start bg-purple-100 rounded-2xl p-4 max-w-[80%] text-gray-500">
                  <div className="flex space-x-2">
                    <div
                      className="w-2 h-2 rounded-full bg-purple-500 animate-bounce"
                      style={{ animationDelay: '0ms' }}
                    ></div>
                    <div
                      className="w-2 h-2 rounded-full bg-purple-500 animate-bounce"
                      style={{ animationDelay: '150ms' }}
                    ></div>
                    <div
                      className="w-2 h-2 rounded-full bg-purple-500 animate-bounce"
                      style={{ animationDelay: '300ms' }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="flex-none">
          <ChatInput onSendMessage={handleSendMessage} disabled={isTyping} />
        </div>
      </div>
      <div className="bg-purple-50 rounded-2xl p-4">View Form</div>
    </div>
  );
});
