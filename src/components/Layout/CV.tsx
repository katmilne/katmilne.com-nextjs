import React from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

const CVContent = ({ markdownContent }) => {
  return (
    <div className="prose max-w-screen-md mx-auto">
      <ReactMarkdown remarkPlugins={[gfm]}>{markdownContent}</ReactMarkdown>
    </div>
  );
};

export default CVContent;