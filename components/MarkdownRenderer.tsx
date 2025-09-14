import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

// A simple and safe Markdown renderer that supports **bold**, `code`, and paragraphs.
export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const paragraphs = content.split('\n\n');

  return (
    <>
      {paragraphs.map((paragraph, pIndex) => {
        const parts = paragraph.split(/(\`.*?\`|\*\*.*?\*\*)/g).filter(Boolean);
        return (
          <p key={pIndex} className="mb-2 last:mb-0">
            {parts.map((part, index) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={index}>{part.slice(2, -2)}</strong>;
              }
              if (part.startsWith('`') && part.endsWith('`')) {
                return <code key={index} className="bg-[--border-color] text-[--primary-color] rounded px-1 py-0.5 font-mono text-sm">{part.slice(1, -1)}</code>;
              }
              return part;
            })}
          </p>
        );
      })}
    </>
  );
};