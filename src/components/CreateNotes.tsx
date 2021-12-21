import React, {useState, useRef, FormEvent} from 'react';
import {Note} from '../models/note.model';
import {Alert , Form, FormGroup, FormLabel , FormControl, Button} from 'react-bootstrap';

import "./CreateNotes.css";

interface Props {
    notes: Note[],    //array to set notes
    setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

export const CreateNotes = ({notes, setNotes}: Props) => {

    const [error, setError] = useState("");
    // title of the card
    const cardTitle = useRef<HTMLInputElement | null>(null);
   //  text of the card
   const cardText =useRef<HTMLTextAreaElement | null>(null);
   // color of the card
   const cardColor =useRef<HTMLInputElement | null>(null);
   
   const handleSubmit = (e: FormEvent<HTMLFormElement>): void =>{
       e.preventDefault();
       // prevent the page from reloading when the user click enter
      
       // validating it like if anyof the field is empty 
       // return setError 
       if(cardTitle.current?.value === "")
       {
           return setError("Please Fill the tag fields");
       }
      // otherwise error is empty
       setError("");
       setNotes([...notes, {
           id: (new Date()).toString(),
           tag: (cardTitle.current as HTMLInputElement).value,
           question: (cardText.current as HTMLTextAreaElement).value,
           answer: (cardText.current as HTMLTextAreaElement).value,
           color: (cardColor.current as HTMLInputElement).value,
           date: (new Date()).toString()
       }]);
      
       (cardTitle.current as HTMLInputElement).value = "";
       (cardText.current as HTMLTextAreaElement).value = "";
  }
  return (
      <>
        <h2 className="header">Customize Your ChatBot</h2>
        {error && <Alert variant="danger">{ error}</Alert>}
        <Form className ="mt-3 mb-3" onSubmit={(e) => handleSubmit(e)}>

         <FormGroup className="mb-3" controlId="formBaicTitle">
            <FormLabel>Tag</FormLabel>
            <FormControl type="text" 
            placeholder="Enter Tag" 
            ref={cardTitle}/>
         </FormGroup>

         <FormGroup className="mb-6" controlId="formBaicText">
            <FormLabel>Qusestion</FormLabel>
            <FormControl 
            placeholder="Enter Your Question" as="textarea" 
            rows={3} ref={cardText}/>
         </FormGroup>

         <FormGroup className="mb-6" controlId="formBaicText">
            <FormLabel>Answer</FormLabel>
            <FormControl 
            placeholder="Enter Your Answer" as="textarea" 
            rows={3} ref={cardText}/>
         </FormGroup>
          
         <FormGroup className="mb-3">
            <FormLabel htmlFor="colorInput">Add color to your messages as well</FormLabel>
            <FormControl 
            type="color" 
            id="colorInput" 
            defaultValue="#dfdfdf" 
            title="Choose Color of your choice"
            ref ={cardColor}/>
         </FormGroup>
         <Button type="submit" variant="primary">
             Add  ➕
         </Button>
        </Form>
      </>
  );
};
