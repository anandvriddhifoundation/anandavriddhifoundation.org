'use client';

import React from 'react';

interface IframeClientProps
  extends React.IframeHTMLAttributes<HTMLIFrameElement> {
  src: string;
  title: string;
  allowFullScreen?: boolean;
}

const IframeClient = ({
  src,
  title,
  allowFullScreen = false,
  className,
  style,
  ...props
}: IframeClientProps) => {
  return (
    <iframe
      src={src}
      title={title}
      allowFullScreen={allowFullScreen}
      className={className}
      style={{ border: 0, ...style }}
      {...props}
    />
  );
};

export default IframeClient;
