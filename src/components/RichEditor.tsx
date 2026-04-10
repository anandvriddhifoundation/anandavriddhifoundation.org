import React, { Suspense } from 'react';
import { RichEditorProps } from '@/components/BundledEditorClient';
import dynamic from 'next/dynamic';

const BundledEditorClient = dynamic(() => import('./BundledEditorClient'), {
  ssr: false,
});

const RichEditor = ({ content, setContent, onBlur }: RichEditorProps) => {
  return (
    <Suspense fallback={null}>
      <BundledEditorClient
        content={content}
        setContent={setContent}
        onBlur={onBlur}
      />
    </Suspense>
  );
};

export default RichEditor;
