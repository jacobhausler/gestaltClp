
export default {
  name: 'Session',
  fields: {
    id: () => '!',
    currentUser: (obj, args, context) => {
    	if (obj.currentUserID == null) { return null; }
    	return context.db.findBy('users', {id: obj.currentUserID}); 
    },
  },
};
