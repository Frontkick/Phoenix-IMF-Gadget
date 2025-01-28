//Set up for JWT token

module.exports = {
    secretKey: process.env.JWT_SECRET,
    expiresIn: '1h', // Expiration time for JWT token
  };
  