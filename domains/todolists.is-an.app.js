// for more details watch the file `./domains.d.ts`

addSubDomain({
  description: 'To do lists, manage for work and other thing...', // describe your project in this field
  domain: 'is-an.app', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
  subdomain: 'todolists', // desired subdomain name
  owner: {
    repo: '<https://URL/to/the/repository/with/your/project/sources/if/it/is/public>',
    email: '<thisismegiabao@gmail.com>',
  },
  record: {
    CNAME: '<889dba5d-1f7f-4429-9aba-b30ee01cc0b3.id.repl.co>', // e.g.: <your-github-account>.github.io
    TXT: ['replit-verify=889dba5d-1f7f-4429-9aba-b30ee01cc0b3'],
  },
  proxy: false, // disable Cloudflare proxy (with is enabled by default). In this case, your origin server
                  // should provide valid a SSL certificate and protection CF will be disabled
  // nested: [{ // in addition, you may define the required nested subdomains
  //   subdomain: 'foo',
  //   record: {
  //     CNAME: '...',
  //   },
  //   proxy: false,
  // }, {
  //   subdomain: 'bar',
  //   record: {
  //     A: ['...'],
  //   },
  //   proxy: true,
  // }]
})
