<<<<<<< HEAD
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import userRoutes from "./routes/user.js"
=======
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import userRouter from './routes/user.js'
import authRouter from './routes/auth.js'
>>>>>>> a3bb25df88ddef2faf36c1941eeb905007e47554


export default function expressConfig(app) {

  app.use(express.json())
  // routes for each endpoint
  app.use('/api', userRouter)
  app.use('/api',authRouter)
  
  app.use(helmet())

  morgan.token('host', function (req, res) {
    return req.hostname;
  });

<<<<<<< HEAD
    // app.use(helmet())
    app.use(express.json())

    morgan.token('host', function(req, res) {
        return req.hostname;
        });
      app.use("/api",userRoutes)
      app.use(express.json())

=======
>>>>>>> a3bb25df88ddef2faf36c1941eeb905007e47554
  app.use((req, res, next) => {
    console.log("hehehehehhehe",req)
    // Website you wish to allow to connect
    // res.setHeader('Access-Control-Allow-Origin', 'http://accepted-origin');
    // Request methods you wish to allow

    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    );
    // Request headers you wish to allow
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-Requested-With, Content-type, Authorization, Cache-control, Pragma'
    );
    res.setHeader('Content-Type', 'application/json')
    // Pass to next layer of middleware
    next();
  });

  app.use(morgan(':method :host :status :res[content-length] - :response-time ms'))

  

}