import React from "react";
import noteContext from "./Notecontext";
import { useState } from "react";

const NoteState = (props) => {
    const notesinitial=
        [
            {
              "_id": "661c8b52df02fcf46a7dce6d",
              "user": "6612c5c003fbe3af30a6d61f",
              "title": "new journey",
              "description": "hello description",
              "date": "2024-04-15T02:05:06.037Z",
              "__v": 0
            },
            {
              "_id": "661cfe33c8ed5ebedf187d94",
              "user": "6612c5c003fbe3af30a6d61f",
              "title": "new journey",
              "description": "hello description",
              "date": "2024-04-15T10:15:15.533Z",
              "__v": 0
            },
            {
              "_id": "66436f3cb6466462a90ef81e",
              "user": "6612c5c003fbe3af30a6d61f",
              "title": "new journey",
              "description": "hello description",
              "date": "2024-05-14T14:03:40.567Z",
              "__v": 0
            }
          ]
          const [notes,Setnotes]=useState(notesinitial);

    return (
        <noteContext.Provider value={{notes,Setnotes}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;