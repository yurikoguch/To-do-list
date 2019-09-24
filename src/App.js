
import React from 'react'
import Title from './Components/Title/Title'
import List from './Components/List/List'
import shortid from 'shortid'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            text: '',
        }
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
                    items={items}
                />

                {/* TODO: move it into separate component (functional) */}
                <form onSubmit={handleSubmit} >
                    <input
                        onChange={handleChange}
                        value={text}
                    />
                    <button>
                        Add #{items.length + 1}
                    </button>
                </form>
            </div>
        )
    }
}

export default  App
