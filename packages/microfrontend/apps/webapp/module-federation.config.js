module.exports = {
  name: 'webapp',
  exposes: {
    './Module': 'apps/webapp/src/app/remote-entry/entry.module.ts',
  },
};
