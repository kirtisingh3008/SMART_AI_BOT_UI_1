import * as React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Note } from '../models/note.model';
import './Notes.css';

interface Props{
    note: Note,
    handleDelete: (id: string) => void
    // updateTag: (id: string) => void
}

export const Notes = ({note, handleDelete,}: Props) =>{
   return (
       <div className="mb-3">
           <Card style={{backgroundColor: note.color}}>
               <Card.Body>
                   <div className="Note">
                   <Card.Title>Tag: {note.tag}</Card.Title>
                   <Card.Text>question: {note.question}</Card.Text>
                   <Card.Text>answer: {note.answer}</Card.Text>
                   
                   <Card.Subtitle className="text-muted">{ note.date}</Card.Subtitle>
                   </div>
                   <div className="Btn">
                   <Button className="mt-3" variant="danger" onClick={() => handleDelete(note.id)}>Delete</Button>
                   </div>
               </Card.Body>
           </Card>
       </div>
   );
};