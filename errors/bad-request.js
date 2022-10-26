const customAPIError = require('./custom-error');
const { statusCodes } = require('http-status-codes');
class BadRequest extends customAPIError {
	constructor(message) {
		super(message);
		this.statusCode = statusCodes.BAD_REQUEST;
	}
}

module.exports = BadRequest;
