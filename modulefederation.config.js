const deps = require('./package.json').dependencies;

module.exports = {
    name: "consumer",
    filename: "remoteEntry.js",
    remotes: {
      marketing: `marketing@${process.env.REMOTE_URL}/_next/static/remoteEntry.js`,
    },
    exposes: {
      "./RemoteRoutes": "./src/RemoteRoutes",
    },
    shared: {
      react: { singleton: true, requiredVersion: deps.react },
      "react-dom": {
        singleton: true,
        requiredVersion: deps["react-dom"],
      },
    },
  }