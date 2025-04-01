import { marked } from 'marked';

export const renderMarkdown = (text: string): string => {
  try {
    return marked.parse(text) as string;
  } catch (error) {
    console.error('Error parsing markdown:', error);
    return text;
  }
};
