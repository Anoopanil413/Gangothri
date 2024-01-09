// basic url configuration of mongoose  port jwt



export default {
    port: process.env.PORT || 3000,
    mongo: {
      uri: process.env.MONGO_URL || 'mongodb://localhost:27017/Gangothri'
    },
    jwtSecret: process.env.JWT_SECRET 
  };