import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import './main.html';
import {Tasks} from '../import/api/tasks.js';
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '../import/ui/App.js';

Meteor.startup(() => {
    render(<App />, document.getElementById('render-target'));
});



Template.body.helpers(

    {
        tasks: function(){
            return Tasks.find().fetch()
        }

    }
);


Template.body.events({




});