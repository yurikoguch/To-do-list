import React from 'react';
import Title from './Components/Title';
import Form from './Components/Form';
import List from './Components/List';



class App extends React.Component {

        state = {
            tasks: []
        };

        addTask = task => {
            this.setState({
                tasks:[task, ...this.state.tasks],
            });
        };

    render() {

        return (
            <div className={'App'}>
                <Title/>
                <Form onSubmit={this.addTask}/>
                {this.state.tasks.map(task => (
                    <List key={task.id} text={task.text}/>
                ))}
            </div>
        );
    };
};

export default  App
