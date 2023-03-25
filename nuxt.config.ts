// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: [
    // 'video.js/dist/video-js.css', 
    '~/assets/styles/tailwind.css',
    '~/assets/styles/grid.css',
    // '~/assets/styles/variables.scss' ,
    '~/assets/styles/_reset.scss',
    '~/assets/styles/main.scss',
    'vue3-carousel/dist/carousel.css'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/assets/styles/variables.scss";',
        },
      },
    },
    vue: {
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: (tag) => ['c','grid'].indexOf(tag) > -1
        }
      }
    },
  },
  plugins: [
    // { src: '@/main.js' },
    // { src: '@/plugins/vue-typed-js.js' },
    // { src: '@/plugins/vue-carousel.js', ssr: false },
    { src: '@/plugins/ga.js', mode: 'client' }
  ],
  buildModules: [
    'nuxt-vite'
  ]
})


