import React, {useRef, useEffect} from 'react';
import Editor from '@toast-ui/editor';

import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';

export default function MarkdownEditor({initialValue, onContentChange}) {
    const editorRef = useRef(null);

    useEffect(() => {
        const editor = new Editor({
          el: editorRef.current,
          initialValue,
        });
    
        editor.on('change', () => {
          onContentChange(editor.getMarkdown());
        });
    
        return () => {
          editor.destroy();
        };
      }, [initialValue, onContentChange]);
    
      return <div ref={editorRef} />;
}
