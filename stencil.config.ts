import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'blip-ds',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        { src: 'globals', dest: 'styles' },
      ],
      empty: false
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      empty: false
    },
  ],
  globalScript: 'src/globals/scripts/index.ts',
  excludeSrc: ['/test/', '**/.spec.', '**/.stories.'],
  plugins: [
    sass({
      includePaths: ['src/globals'],
      injectGlobalPaths: [
        'src/globals/app.scss',
      ]
    })
  ],
};
