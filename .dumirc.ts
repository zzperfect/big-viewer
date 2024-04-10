import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  plugins: ['dumi-plugin-color-chunk'],
  themeConfig: {
    name: 'big-viewer',
    footerConfig: {
      columns: [
        {
          title: '相关资源',
          items: [
            {
              title: 'GitHub',
              url: "/",
              openExternal: true
            }
          ]
        }
      ]
    }
  },
});
