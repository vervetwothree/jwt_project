const jwt = require('jsonwebtoken');
const { unauthenticatedError } = require('../errors');

const authenticationMiddleware = async (req, res, next) => {
	const authHeader = req.headers.authorization;

	if (!authHeader || !authHeader.startsWith('Bearer')) {
		throw new unauthenticatedError('No token provided');
	}

	const token = authHeader.split(' ')[1];

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		const { id, username } = decoded;
		req.user = { id, username };
		next();
	} catch (error) {
		throw new customAPIError('Not authorized to access this route', 401);
	}
};

module.exports = authenticationMiddleware;
