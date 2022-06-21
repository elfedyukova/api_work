require('dotenv').config()

import express from 'express'
//import compression from 'compression'
//import cors from 'cors'

const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express()

app.use(
	'/api',
	createProxyMiddleware({
		target: 'http://qa-qa-api-backend.staging.qiwi.com',
		changeOrigin: true,
	})
);

app.listen(4000, () => console.log('App listening on port 4000!'))