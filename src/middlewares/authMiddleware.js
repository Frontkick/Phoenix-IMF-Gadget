//Applied JWT tokens for Authorization and Authentication of user

const jwt = require('jsonwebtoken');
const { secretKey } = require('../config/jwt');

module.exports = (req, res, next) => {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {                                                             //If Authorization Header is not present in header then raise error
    return res.status(401).json({ message: 'Authorization header is missing' });
  }

  // Split the 'Bearer <token>' string into the token part
  const token = authorizationHeader.split(' ')[1];                                        //if Present then split and sent for decoding

  if (!token) {
    return res.status(401).json({ message: 'Token is missing in authorization header' }); //If token is not present in headers
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();                                                                               //Decoding JWT Bearer Token
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
