import MDEditor from '@uiw/react-md-editor';
import { memo } from 'react';

const MarkdownContent = memo(function MarkdownContent({ content }: { content: string }) {
  return (
    <div className="font-mono text-sm overflow-hidden relative">
      <div className="overflow-x-auto p-4">
        <div data-color-mode="light">
          <MDEditor.Markdown source={content} style={{ whiteSpace: 'pre-wrap' }} />
        </div>
      </div>
    </div>
  );
});
export default MarkdownContent;
