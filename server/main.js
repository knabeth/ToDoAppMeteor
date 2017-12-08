import { Meteor } from 'meteor/meteor';
import '../import/api/tasks.js';
Meteor.startup(() => {
  // code to run on server at startup
});
Meteor.publish('users.list', function (options) {
    check(arguments, Match.Any);
    var criteria = {}, projection= {};
    if(options.summary){
        _.extend(projection, {fields: {emails: 1, profile: 1}});
    }
    return Meteor.users.find(criteria, projection);
});