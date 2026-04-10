'use client';
import { Editor, IAllProps } from '@tinymce/tinymce-react';

// TinyMCE so the global var exists
import 'tinymce/tinymce';
// DOM model
import 'tinymce/models/dom/model';
// Theme
import 'tinymce/themes/silver';
// Toolbar icons
import 'tinymce/icons/default';
// Editor styles
import 'tinymce/skins/ui/oxide/skin';

// importing the plugin js.
// if you use a plugin that is not listed here the editor will fail to load
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/anchor';
import 'tinymce/plugins/autolink';
import 'tinymce/plugins/autoresize';
import 'tinymce/plugins/autosave';
import 'tinymce/plugins/charmap';
import 'tinymce/plugins/code';
import 'tinymce/plugins/codesample';
import 'tinymce/plugins/directionality';
import 'tinymce/plugins/emoticons';
import 'tinymce/plugins/fullscreen';
import 'tinymce/plugins/help';
import 'tinymce/plugins/help/js/i18n/keynav/en';
import 'tinymce/plugins/image';
import 'tinymce/plugins/importcss';
import 'tinymce/plugins/insertdatetime';
import 'tinymce/plugins/link';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/media';
import 'tinymce/plugins/nonbreaking';
import 'tinymce/plugins/pagebreak';
import 'tinymce/plugins/preview';
import 'tinymce/plugins/quickbars';
import 'tinymce/plugins/save';
import 'tinymce/plugins/searchreplace';
import 'tinymce/plugins/table';
import 'tinymce/plugins/visualblocks';
import 'tinymce/plugins/visualchars';
import 'tinymce/plugins/wordcount';

// importing plugin resources
import 'tinymce/plugins/emoticons/js/emojis';

// Content styles, including inline UI like fake cursors
import 'tinymce/skins/content/default/content';
import 'tinymce/skins/ui/oxide/content';
import React, { useRef } from 'react';

// Define props type if there are any specific props you expect
interface BundledEditorProps extends IAllProps {
  licenseKey?: string;
}

export type RichEditorProps = {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  onBlur?: any;
};

const BundledEditor: React.FC<BundledEditorProps> = (props) => {
  return <Editor licenseKey="gpl" {...props} />;
};

const BundledEditorClient = ({
  content,
  setContent,
  onBlur,
}: RichEditorProps) => {
  const editorRef = useRef<Editor['editor'] | null>(null);
  return (
    <BundledEditor
      // tinymceScriptSrc='/tinymce/tinymce.min.js'
      // licenseKey='gpl'
      onInit={(_evt, editor) => (editorRef.current = editor)}
      // ref={editorRef}
      // initialValue={
      //   content || "<p>This is the initial content of the editor.</p>"
      // }
      // onEditorChange={}
      onBlur={onBlur}
      value={content}
      onEditorChange={(newValue, editor) => {
        setContent(newValue);
      }}
      init={{
        height: 500,
        menubar: false,
        plugins: [
          'advlist',
          'autolink',
          'lists',
          'link',
          'image',
          'charmap',
          'preview',
          'anchor',
          'searchreplace',
          'visualblocks',
          'code',
          'fullscreen',
          'insertdatetime',
          'media',
          'table',
          'codesample',
          'help',
          'wordcount',
        ],
        font_size_formats: '8px 10px 12px 14px 16px 18px 24px 36px 48px',
        font_size_input_default_unit: 'px',
        toolbar:
          'undo redo | blocks | fontsize |' +
          'bold italic forecolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | image code codesample |' +
          'removeformat | help',
        // content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        // content_style: styles,
        // content_css: '@/app/globals.css'
        editable_class:
          'prose max-w-none prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl prose-p:text-lg',
        images_upload_url: '/backend_api/file_handler/upload_image',
        resize_img_proportional: true,
        object_resizing: true,
        resize: 'both',
        browser_spellcheck: true,
        contextmenu: false,
        // images_upload_handler: example_image_upload_handler
        // class
      }}
    />
  );
};

export default BundledEditorClient;
