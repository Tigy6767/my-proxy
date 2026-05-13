const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

// REPLACE WITH THE ACTUAL LINK YOU WANT TO MASK
const TARGET_WEBSITE = 'https://daydreamx.global.ssl.fastly.net/'; 

app.use('/', createProxyMiddleware({
    target: TARGET_WEBSITE,
    changeOrigin: true,
    ws: true
}));

app.listen(3000, () => {
    console.log('Proxy server running');
});
