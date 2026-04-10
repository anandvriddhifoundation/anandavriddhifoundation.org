'use client';
import React, { Suspense, useState } from 'react';
// import RichEditor from './RichEditor'
import dynamic from 'next/dynamic';

const RichEditor = dynamic(() => import('@/components/RichEditor'), {
  ssr: false,
});

const EditorPage = () => {
  const [content, setContent] = useState('<p>Ola</p>');

  return (
    <main>
      <section className="container mx-auto px-4 sm:px-20">
        <h1>My Editor</h1>
        <Suspense
          fallback={
            <div>
              <p>Loading Editor...</p>
            </div>
          }
        >
          <RichEditor content={content} setContent={setContent} />
        </Suspense>

        <div
          id="preview"
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
      </section>
    </main>
  );
};

export default EditorPage;
