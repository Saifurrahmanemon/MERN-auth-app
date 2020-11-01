const Validator = require('validator');

const isEmpty = require('is-empty');

module.exports = validateLoginInput = data => {
	let errors = {};

	let { email, password } = data;

	//converting empty fields to empty strings as validator function

	email = !isEmpty(email) ? email : '';
	password = !isEmpty(password) ? password : '';

	if (Validator.isEmpty(email)) {
		error.email = 'Email is required!';
	} else if (!Validator.isEmail(email)) {
		error.email = 'Enter a valid Email!';
	}

	if (Validator.isEmpty(password)) {
		error.password = 'Password is required!';
	} else if (!Validator.isLength(password, { min: 6, max: 30 })) {
		error.password = 'Password must be above 6 characters';
	}

	return {
		errors,
		isValid: isEmpty(errors),
	};
};
