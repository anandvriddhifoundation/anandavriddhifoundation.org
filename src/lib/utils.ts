import slugify from '@sindresorhus/slugify';

export const generateSlug = (value: string) =>
  slugify(value, {
    customReplacements: [
      ['@', 'at'],
      ['&', 'and'],
      ['/', 'or'],
    ],
  });
