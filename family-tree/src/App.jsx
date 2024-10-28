import React, { useState, useEffect } from 'react';
import './App.css';
import { data } from './Data';
import Tree from './Tree';
import { NoteForm } from './components/NoteForm';

function App() {
  const [notes, setNotes] = useState([]);

  // Загрузка заметок из sessionStorage при монтировании компонента
  useEffect(() => {
    const storedNotes = sessionStorage.getItem("notes");
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  // Сохранение заметок в sessionStorage при их изменении
  useEffect(() => {
    sessionStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  return (
    <div className="App">
      <div className="header">
        <h2>Programming Notes</h2>
        <NoteForm addNote={addNote} />
      </div>
      <div className="line">
        <hr />
      </div>
      <div>
        <Tree data={data} />

        {/* <FilterMenu setFilter={setFilter} /> */}
        {/* <NoteList notes={filteredNotes} /> */}
      </div>
    </div>
  );
}

export default App;