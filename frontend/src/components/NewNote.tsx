import { useState } from "react";
import "./NewNote.css";

function NewNote() {
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");

  // binding for Golang
  const handleAddNote = () => {
    console.log("Title: ", title);
    console.log("Description: ", desc);
  };

  return (
    <div className="main-container">
      <div className="title-container">
        <label>Title</label>
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="desc-container">
        <label>Description</label>
        <textarea
          id="desc-box"
          placeholder="Enter description"
          rows={5}
          value={desc}
          onChange={(even) => setDesc(even.target.value)}
        ></textarea>
      </div>
      <div className="button-zero">
        <button onClick={handleAddNote}>Add Note</button>
      </div>
    </div>
  );
}

export default NewNote;
