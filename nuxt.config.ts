export default {
  css: [
    "@fortawesome/fontawesome-free/css/all.css",
    "vuetify/lib/styles/main.sass",
    "/assets/scss/main.scss",
    "@mdi/font/css/materialdesignicons.min.css",
  ],
  app: {
    head: {
      title: "SANAM",
      link: [
        {
          rel: "icon",
          href: "http://localhost:3000/_nuxt/assets/images&icons/imagesNavbar/logo.png",
        },
      ],
    },
  },
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
};
