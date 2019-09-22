
import React from 'react';
import Title from './Components/Title/Title';
import List from './Components/List/List';
import shortid from 'shortid'




class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { items: [], text: '', };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);



    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (!this.state.text.length) {
            return;
        }



        const newItem = {
            text: this.state.text,
            id: shortid.generate(),
        };


        this.setState(state => ({
            items: state.items.concat(newItem),
            text: '',
        }));
    }

    render() {
        return (
            <div>
                <Title />
                <List
                    key={this.state.id}
                    items={this.state.items}
                />
                <form onSubmit={this.handleSubmit} >
                    <input
                        onChange={this.handleChange}
                        value={this.state.text}
                    />
                    <button>
                        Add #{this.state.items.length + 1}
                    </button>
                </form>
            </div>
        );
    }


}


export default  App


