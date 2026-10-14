const { defineConfig } = require('@playwright/test');
module.exports = defineConfig({testDir:'tests',testMatch:'*.spec.cjs',workers:1,use:{launchOptions:process.env.CHROMIUM_PATH?{executablePath:process.env.CHROMIUM_PATH}:{},baseURL:'http://127.0.0.1:4189'},webServer:{command:'python3 -m http.server 4189 --bind 127.0.0.1',url:'http://127.0.0.1:4189'}});
