import React from 'react';
import NoteCreateForm from './NoteCreateForm/NoteCreateForm';
import NoteList from './NoteList/NoteList'
const uuid = require('uuid');

export default class Dashboard extends React.Component {
    constructor(props){
        super(props);

        this.state = {};
        // Vinicio - this array in here will hold all the notes for our application
        this.state.notes = [];
        // Vinicio - notes are going to have main properties
        // 1 - id
        // 2 - title
        // 3 - content
    }

    renderNotes = () => {
        return(
            <ul>
            {
                this.state.notes.map(currentNote => {
                    return <NoteList note={currentNote}
                    handleRemoveNotes={this.handleRemoveNotes}
                    />
                })
            }
            </ul>
        );
    };

    handleAddNotes = note => {
        // Vinicio - here I'm going to assume that the note only comes with
        // name and price, and that I use the "back end" to create IDs
        //-------------------------------------------------------------------------
        // BACK END - "Saving this on the DB"
        //-------------------------------------------------------------------------
        note.id = uuid.v1();
        note.createdOn = new Date();
        //-------------------------------------------------------------------------

        this.setState((previousState) => {
            // Vinicio - in order to create the new state we create a new arra
            // Vinicio - we do this to follow functional's programming principle of inmutability
            return {
                notes: [...previousState.notes, note],
            }
        });
    };

    handleRemoveNotes = note => {
        this.setState(previousState => ({
            note: previousState.notes.filter(currentNote => currentNote.id !== note.id),
        }));
    };

    render(){
        return(<div>
            <h2>Note Dashboard</h2>
        <NoteCreateForm handleAddNotes={this.handleAddNotes}/>
        { this.renderNotes() }
    </div>);
    }
}