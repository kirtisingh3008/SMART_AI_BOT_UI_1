import React, { Dispatch, SetStateAction } from 'react';
import { Note } from '../models/note.model';
import { Notes } from './Notes';


interface Props {
    notes: Note[],
    setNotes: Dispatch<SetStateAction<Note[]>>
}

export const NoteList = ({notes, setNotes}: Props) => {
    const handleDelete = (id: string) => {
        setNotes(notes.filter(note => note.id !== id));
    }
    const renderNotes = ():JSX.Element[] => {
        return notes.map(note =>{
            return <Notes key={note.id} note={note} handleDelete={handleDelete}/>
        })

    }
    return (
        <>
        <h2 className="mt-3">Demo</h2>
        <div>{renderNotes()}</div> 
        </>
    );
    };