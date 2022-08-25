import React, { useRef, useState } from 'react';
import ReactMarkdown from 'react-markdown';

const initialPreviewText = '# markdown preview';
export default function Markdown() {
  const textAreaRef = useRef();

  const [text, setText] = useState(initialPreviewText);
  return (
    <div className="markdown">
      <textarea
        ref={textAreaRef}
        onInput={(e) => setText(e.target.value)}
        defaultValue={initialPreviewText}
      ></textarea>
      <div className="text-box">
        <div className="text">
          <ReactMarkdown>{text}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
