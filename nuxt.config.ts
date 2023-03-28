// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: [
    'video.js/dist/video-js.css', 
    '@/assets/styles/tailwind.css',
    'vue3-carousel/dist/carousel.css',
    // '@/assets/styles/variables.scss',
    '@/assets/styles/grid.css',
    '@/assets/styles/_reset.scss',
    '@/assets/styles/main.scss',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/variables.scss";',
        },
      },
    },
    vue: {
      template: {
        compilerOptions: {
          // treat all custom tags
          isCustomElement: (tag) => ['c', 'grid'].indexOf(tag) > -1
        }
      }
    },
    
  },
  // experimental: {
  //   payloadExtraction: false
  // },
  plugins: [
    { src: '@/plugins/scroll.ts'},
    // { src: '@/plugins/vue-typed-js.js' },
    // { src: '@/plugins/vue-carousel.js', ssr: false },
    // { src: '@/plugins/ga.js', mode: 'client' }
  ]
})


