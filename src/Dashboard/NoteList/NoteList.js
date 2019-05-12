import React from 'react';
// import NoteForm from '../NoteCreateForm/NoteCreateForm';
const uuid = require('uuid');

export default class NoteItem extends React.Component {

    render() {

        const currentNote = this.props.note;

        // -------------------------------------------------------------------------------

        return(
            <li key={currentNote.id = uuid.v1()}>
            {currentNote.title} : {currentNote.content}
    <br />
    <button onClick={this.props.handleRemoveNotes.bind(null, currentNote)}>Remove Note</button>

        </li>
    );
    }

}