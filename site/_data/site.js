module.exports = {
  name: "arron.dev",
  shortDesc:
    "The personal blog of Arron McCrory",
  url: "",
  authorEmail: "arronmccrory@gmail.com",
  authorHandle: "@arron",
  authorName: "Arron",
  postsPerPage: 7,
  socialImage: "/img/social.jpg",
  theme: {
    primary: {
      background: "white",
      text: "black",
      highlight: "#666",
    },
    secondary: {
      background: "black",
      text: "white",
      highlight: "#666",
    },
  },

  keystone: {
    comments: true,
    bookmarks: true,
    claps: true,
    login: true,
  },
  // Critical CSS results in much slower build times and uses a lot of system resources
  // turn on in production :)
  // See `site/transforms/critical-css-transform.js` for more details
  criticalCSS: false,
};
