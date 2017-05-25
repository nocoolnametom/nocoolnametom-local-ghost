const config = {
  blog: {
    url: 'https://blog.nocoolnametom.com',
    mail: {},
    database: {
      client: 'sqlite3',
      connection: {
        filename: '/var/backup/ghost/content/data/blog.db',
      },
      debug: false,
    },

    paths: {
      contentPath: '/var/backup/ghost/content/',
    },

    server: {
      host: '127.0.0.1',
      port: '2368',
    }
  },

  homepage: {
    url: 'https://nocoolnametom.com',
    mail: {},
    database: {
      client: 'sqlite3',
      connection: {
        filename: '/var/backup/ghost/content/data/homepage.db',
      },
      debug: false,
    },

    paths: {
      contentPath: '/var/backup/ghost/content/',
    },

    server: {
      host: '127.0.0.1',
      port: '2369',
    }
  },

  niceapodcast: {
    url: 'https://niceapodcast.com',
    mail: {},
    database: {
      client: 'sqlite3',
      connection: {
        filename: '/var/backup/ghost/content/data/niceapodcast.db',
      },
      debug: false,
    },

    paths: {
      contentPath: '/var/backup/ghost/content/',
    },

    server: {
      host: '127.0.0.1',
      port: '2370',
    },
  },
};

module.exports = config;
