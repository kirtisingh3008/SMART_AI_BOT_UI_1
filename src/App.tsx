import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CreateNotes } from "./components/CreateNotes";
import { NoteList } from "./components/NoteList";
import { Note, Intents, Response } from "./models/note.model";
import axios from "axios";
const intentURL = "/intent";
const responseURL = "/response";

function App() {
  const [notes, setNotes] = useState<Note[]>([
    //   {
    //   id: (new Date).toString(),
    //   tag: "Greet",
    //   question: " Hey what's App",
    //   answer: " I am good",
    //   color: "#dfdfdf",
    //   date: (new Date).toString()
    // }
  ]);

  const [getIntents, setgetIntents] = useState<Intents[]>([]);
  const [getResponse, setgetResponse] = useState<Response[]>([]);

  useEffect(() => {
    axios
      .get(intentURL)
      .then((res) => {
        console.log(res.data);
        const intent = res.data;
        setgetIntents(intent);
        // setData({data: response.data})
        // setData([...data, response.data])
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(responseURL)
      .then((res) => {
        console.log(res.data);
        const response = res.data;
        setgetResponse(response);
        // setData({data: response.data})
        // setData([...data, response.data])
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col>
            <CreateNotes notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
        <Row>
          <Col>
            <NoteList
              notes={notes}
              setNotes={setNotes}
              intents={getIntents}
              responses={getResponse}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default App;
