import React, { Dispatch, SetStateAction } from "react";
import { Note, Intents, Response } from "../models/note.model";
import { Notes } from "./Notes";

interface Props {
  notes: Note[];
  setNotes: Dispatch<SetStateAction<Note[]>>;

  intents: Intents[];
  responses: Response[];
}

export const NoteList = ({ notes, setNotes, intents, responses }: Props) => {
  const handleDelete = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const renderNotes = (): JSX.Element[] => {
    return notes.map((note) => {
      return <Notes key={note.id} note={note} handleDelete={handleDelete} />;
    });
  };

  const displayIntents = (): JSX.Element[] => {
    return intents.map((intent) => {
      console.log(intent.intents.split(/\r?\n/));
      return (
        <div className="note" key={intent.intent_id}>
          <p>{intent.intents}</p>
        </div>
      );
    });
  };

  const displayResponse = (): JSX.Element[] => {
    return responses.map((response) => {
      console.log(response.responses.split(/\r?\n/));
      return (
        <div className="note" key={response.response_id}>
          <p>{response.responses}</p>
        </div>
      );
    });
  };

  return (
    <>
      {/* <h2 className="mt-3">Demo</h2> */}
      {/* <h2>{getIntents}</h2> */}
      <div>{renderNotes()}</div>
      <div>{displayIntents()}</div>
      <div>{displayResponse()}</div>
    </>
  );
};
