class CustomAPIError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const createCustomError = (msg, statusCode) => {
  return new CustomAPIError(msg, statusCode);
};

module.exports = {
  createCustomError,
  CustomAPIError,
};

class MyCar {
  constructor(color) {
    this.color = color;
  }
}

function createNewCarForBibhuti(color) {
  return new MyCar(color);
}
