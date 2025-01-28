//Helper functions to randomly generate percentage and generated Confirmation code for gadgets

const helpers = {
    generateRandomPercentage: () => Math.floor(Math.random() * 100) + 1,
    generateConfirmationCode: () => Math.random().toString(36).substring(2, 8).toUpperCase(),
  };
  
  module.exports = helpers;
  