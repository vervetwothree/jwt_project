const customAPIError = require('./custom-error');
const { statusCodes } = require('http-status-codes');
class UnauthenticatedError extends customAPIError {
	constructor(message) {
		super(message);
		this.statusCode = statusCodes.UNAUTHORIZED;
	}
}

module.exports = UnauthenticatedError;
