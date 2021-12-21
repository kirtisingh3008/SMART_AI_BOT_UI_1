import React, { useState, useEffect} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { CreateNotes } from './components/CreateNotes';
import { NoteList } from './components/NoteList';
import {Note} from './models/note.model';


function App() {
  const [notes, setNotes] =useState<Note[]>([{
    id: (new Date).toString(),
    tag: "Greet",
    question: " Hey what's App",
    answer: " I am good",
    color: "#dfdfdf",
    date: (new Date).toString()
  }])

   return(
     <>
     <Container className="mt-5">
     <Row>
       <Col>
         <CreateNotes notes={notes} setNotes={setNotes} />
       </Col>
     </Row>
     <Row>
       <Col>
         <NoteList notes={notes} setNotes={setNotes} />
       </Col>
     </Row>
     </Container>
     </>
   );
};
export default App;
