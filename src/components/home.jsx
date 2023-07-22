import React, { useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import Header from './header';
import InputArea from './inputArea';
import Note from './note';

const Home = () => {
    const { state } = useLocation();
    let { name, email, Notes } = state;

    const [notes, addNote] = useState([{
        noteTitle: "",
        noteContent: ""
    }]);

    useEffect( ()=> {
        const newArr = Notes.map( (e) => ({
            noteTitle: e.title,
            noteContent: e.content
        }));

        addNote(newArr);
    }, []);

    const handleClick = async (title, content) => {

        addNote(prevItems => [...prevItems, {
            noteTitle: title,
            noteContent: content
        }]);

        const res = await fetch('/form/add', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                title: title,
                content: content
            })
        });

        const result = await res.json();
        console.log(result);

    }

    const deleteNote = async(id) => {

        console.log(id);
        // addNote(notes.filter((element, index) => index !== id));

        const res = await fetch('/form/delete', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                id: id
            })
        });

        const result = await res.json();
        
    }

    return (
        <div>
            <Header />
            <InputArea onChecked={handleClick} />
            <div className='container-fluid'>
                <div className='row bdy'>
                    {notes.map((element, index) => {

                        return <Note
                            key={index}
                            id={index}
                            title={element.noteTitle}
                            content={element.noteContent}
                            onChecked={deleteNote}
                        />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home;