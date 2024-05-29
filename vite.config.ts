import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    // assetsInlineLimit: 0,
    // 开发阶段启用源码映射：https://uniapp.dcloud.net.cn/tutorial/migration-to-vue3.html#需主动开启-sourcemap
    sourcemap: process.env.NODE_ENV === 'development',
    assetsDir: 'static',
    rollupOptions: {
      // https://github.com/vitejs/vite/discussions/6552#discussioncomment-2002155
      output: {
        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
            return 'static/img/[name]-[hash][extname]';
          }

          if (/\.css$/.test(name ?? '')) {
            return 'static/css/[name]-[hash][extname]';
          }

          if (/\.ttf$/.test(name ?? '')) {
            return 'static/font/[name]-[hash][extname]';
          }

          // default value
          // ref: https://rollupjs.org/guide/en/#outputassetfilenames
          return 'static/[name]-[hash][extname]';
        },
      },
    },
  },
  plugins: [uni()],
  experimental: {
    // https://vitejs.cn/vite3-cn/config/shared-options.html#base  控制 html 所在位置
    // https://vitejs.cn/vite3-cn/guide/build.html#advanced-base-options 控制 assets 和 public 放在哪里
    renderBuiltUrl(
      filename: string,
      {
        hostId,
        hostType,
        type,
      }: {
        hostId: string;
        hostType: 'js' | 'css' | 'html';
        type: 'public' | 'asset';
      }
    ) {
      // return publicPath + '/' + filename;
      return 'https://aliyun.dc1979.com/img/h5/' + filename
    },
  }
});
