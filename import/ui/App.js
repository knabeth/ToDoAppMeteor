import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import {withTracker} from 'meteor/react-meteor-data';
import {Tasksdb} from '../api/tasks.js';



// App component - represents the whole app
 class App extends Component {
     editThisTask(id){
         let tasketditprompt = prompt("modifier la tâche :")
         if (tasketditprompt != null) {
             Tasksdb.update(id,{
                 $set : {name : tasketditprompt}
             })
         }
     }
     deleteThisTask = (id) => {
         Tasksdb.remove({_id :id});
     }
     aboutThisTask = (id,name) => {
         console.log(id)
         console.log(name)
     }

    renderTasks() {
        return this.props.tasks.map((task, key) => (
        <li key={key}>{task.name}<button className="delete" onClick={() => this.deleteThisTask(task._id)}>-</button>
            <button className="edit" onClick={() => this.editThisTask(task._id)}>edit</button>
            <button className="edit" onClick={() => this.aboutThisTask(task._id,task.name)}>more</button>
        </li>
    ));
    }

    render() {

        const tasks = this.renderTasks();

        return (
            <div className="container">
            <header>
            <h1>Todo List</h1>
        </header>

            <ul>
            {tasks}

        </ul>
        </div>
    );
    }

}
export default withTracker(() => {
    return {
        tasks: Tasksdb.find().fetch(),
    };
})(App);
