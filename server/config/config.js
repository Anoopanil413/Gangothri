// basic url configuration of mongoose  port jwt



export default {
    port: process.env.PORT || 3000,
    mongo: {
      uri: 'mongodb://0.0.0.0:27017/Gangothri'
    },
    jwtSecret: process.env.JWT_SECRET 
  };