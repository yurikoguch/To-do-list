
import React from 'react'
import Title from './Components/Title/Title'
import List from './Components/List/List'
import shortid from 'shortid'
import StyledInput from "./styled/StyledInput";
import StyledButton from "./styled/StyledButton";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            text: '',
        }

        this.removeTodo = this.removeTodo.bind(this);

    }

    handleChange = e => {
        this.setState({ text: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault()

        if (!this.state.text.length) {
            return
        }

        const today = new Date()
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()

        const newItem = {
            text: this.state.text,
            id: shortid.generate(),
            date: date
        }

        this.setState(state => ({
            items: [ ...state.items, newItem ],
            text: '',
        }))
    }

    removeTodo(i){
        let arr = this.state.items.slice();
       arr.splice(i, 1);
        this.setState({items: arr});
    }



    render() {
        const {
            items,
            text
        } = this.state
        const {
            handleSubmit,
            handleChange
        } = this
        return (
            <div>
                <Title />
                <List
                    items={this.state.items}
                    removeTodo={this.removeTodo}
                    editText={this.editText}
                />

                {/* TODO: move it into separate component (functional) */}
                <form onSubmit={handleSubmit} >
                    <StyledInput
                        onChange={handleChange}
                        value={text}
                        placeholder="Please enter tasks"
                    />
                    <StyledButton>
                        Add #{items.length + 1}
                    </StyledButton>
                </form>
            </div>
        )
    }
}

export default  App
