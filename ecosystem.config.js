module.exports = {
  apps: [{
    name: '𓆩 𝐋̷𝐄̷𝐆̷𝐄̷𝐍̷𝐃̷ ➌⓿➋ 𓆪',
    script: './index.js',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production'
    },
    log_file: './logs/combined.log',
    out_file: './logs/out.log',
    error_file: './logs/error.log',
    time: true
  }]
};
