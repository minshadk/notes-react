import "./App.css";
import ReactDOM from "react-dom";
import { useState } from "react";

import TextInput from "./components/inputs/TextInput";
import Modal from "./components/modal/Modal";

function App() {
  const [title, setTitle] = useState();
  const [tagline, setTagline] = useState();
  const [body, setBody] = useState();
  const [note, setNote] = useState();
  const [notes, setNotes] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const domElement = document.getElementById("portal");

  const [showAddNotes, setShowAddNotes] = useState(false);

  // console.log(note);
  // console.log(notes);
  const handleAddNote = (event) => {
    setNote(event.target.value);
    setNotes(notes ? [...notes, note] : [note]);
    // setShowAddNotes(false);
  };
  return (
    <div className="background-wrapper">
      <div className="container">
        <h1>Notes</h1>
        {/* <div className="add-note-wrapper">
          <div>
            <input
              type="text"
              placeholder="Take a note..."
              onBlur={(event) => {
                handleAddNote(event);
              }}
              onClick={(e) => {
                setShowAddNotes(true);
              }}
            />
          </div>
          {showAddNotes && (
            <div>
              
              <TextInput
                textValue={tagline}
                setTextValue={setTagline}
                placeholder="Tagline ..."
                label="Tagline"
              />
              <div>
                <textarea type="text" placeholder="tagline" />
              </div>
            </div>
          )}
        </div> */}
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          Add Notes
        </button>
        {ReactDOM.createPortal(
          <Modal open={isOpen}>
            Modal datadsdfasdfsdfsd fasd falsesdf showAddNotesfasd falseasd
            falsedsf
          </Modal>,
          domElement
        )}
      </div>
    </div>
  );
}

export default App;
