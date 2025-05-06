module.exports = {
  apps: [{
    name: 'time-for-namaz-api',
    script: 'dist/main.js',
    instances: 1,
    autorestart: true,
    watch: false,
    env: {
      NODE_ENV: 'production',
      PORT: 8080
    }
  }]
}; 