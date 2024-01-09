import express from 'express';
import mongoose from 'mongoose';
import expressConfig from './framework/webserver/express.js';
import serverConfig from './framework/webserver/server.js';



const app = express();

// express.js configuration (middlewares etc.)
expressConfig(app);

// server configuration and start
serverConfig(app).startServer();


