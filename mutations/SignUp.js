import bcrypt from 'bcrypt-as-promised';
import assert from 'assert';

export default types => ({
	name: 'SignUp',
	inputFields: {
		email: types.String,
		password: types.String,
		first: types.String,
		last: types.String,
	},
	outputFields: {
		session: types.Session,
	},
	mutateAndGetPayload: async (input, context) => {
		const {email, password, first, last} = input;
		const {db, session} = context;

		assert(email.match(/.+@.+?\..+/), 'Email is invalid');
		assert(password.length > 5, 'Password is invalid; too short.');
		assert(first.length > 0, 'First Name Required.');
		assert(last.length > 0, 'Last Name Required.');

		const passwordHash = await bcrypt.hash(password, 10);
		const user = await db.insert('users', {
			email,
			passwordHash,
			first,
			last,
		});

		session.currentUserID = user.id;
		return {session};
	},
});