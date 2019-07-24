_.register({  
  rule: [
    {
      host: /^maxidbr\.com$/,
      path: /^\/publiciter\/api2\.php/,
      query: /^\?info=(.+)/,
    },
    {
      host: /^62\.210\.220\.184$/,
      path: /^\/publiciter\/api1\.php/,
      query: /^\?info=(.+)/,
    },
  ],
  async ready () {
    const g = $('a.btn.btn-download');
    await $.openLink(g.href);
  },
});
