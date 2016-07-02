import crypto from 'crypto';

export default {
	name: 'User',
	fields: {
		//gravatar
		profileImage: (obj, args, context) => {
			const email = obj.email.toLowerCase();
			const hash = crypto.createHash('md5').update(email).digest('hex');
			return '//www.gravatar.com/avatar/${hash}';
		},
		firstLast: (obj, args, context) => {
			const first = obj.first;
			const last = obj.last;
			return first + " "+ last;
		},
		lastFirst: (obj, args, context) => {
			const first = obj.first;
			const last = obj.last;
			return last + ", "+ first;
		}
	},
};

