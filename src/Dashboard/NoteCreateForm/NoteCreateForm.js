import React from 'react';

export default class NoteCreateForm extends React.Component {
    // Vinicio - no constructor = No State
    constructor(props){
        super(props);
        this.state = {
            title : '',
            content: '',
        };
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value,
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.handleAddNotes(this.state);
    };

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <input
        type="text"
        name="title"
        value={this.state.title}
        onChange={this.handleChange}
        placeholder="title"
            />
            <input
        type="text"
        name="content"
        value={this.state.content}
        onChange={this.handleChange}
        placeholder="content"
            />
            <button type="submit">Create Note</button>
        </form>

        );
    }
}