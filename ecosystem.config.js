const argEnvIndex = process.argv.indexOf('--env');
let argEnv = (argEnvIndex !== -1 && process.argv[argEnvIndex + 1]) || '';

module.exports = {
  apps: [
    {
      name: 'ozorder_graphql_server',
      script: 'yarn',
      args: `start:${argEnv}`,
      interpreter: 'none',
      autorestart: false,
      watch: argEnv === 'dev',
      log_date_format: 'YYYY-MM-DD HH:mm Z',
      error_file: '/home/system/pm2_log/error.log',
      out_file: '/home/system/pm2_log/out.log',
      log_file: '/home/system/pm2_log/combined.log',
      log_level: 'debug',
      env_dev: {
        NODE_ENV: 'dev',
        APP_MODE: 'development',
      },
      env_prod: {
        NODE_ENV: 'prod',
        APP_MODE: 'production',
      },
    },
  ],
};

