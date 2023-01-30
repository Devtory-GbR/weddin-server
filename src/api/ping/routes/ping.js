module.exports = {
  routes: [
    {
      method: "GET",
      path: "/ping/",
      handler: "ping.test",
      config: {
        auth: false,
      },
    },
  ],
};
