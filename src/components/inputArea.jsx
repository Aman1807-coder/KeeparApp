import React, { useState } from 'react';

const InputArea = (props) => {

    const [title, addTitle] = useState("");
    const [content, addContent] = useState("");

    const handleTitleChange = (event) => {

        const newTitle = event.target.value;
        addTitle(newTitle);
    }

    const handleContentChange = (event) => {

        const newContent = event.target.value;
        addContent(newContent);
    }

    return (
        <div className='container-fluid'>
            <div className="row bdy">
                <div className="col-lg-12 d-flex justify-content-center">
                    <div className="form-floating">
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"
                            onChange={handleTitleChange} value={title}></textarea>
                        <label for="floatingTextarea">Enter Title</label>
                    </div>
                </div>
                <div className="col-lg-12 d-flex justify-content-center">
                    <div className="form-floating cont">
                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"
                            onChange={handleContentChange} value={content} style={{ height: 125 }}></textarea>
                        <label for="floatingTextarea">Enter Content</label>
                    </div>
                </div>
                <div className="d-flex justify-content-center butn">
                    <button type="button" className=" col-lg-2 btn btn-outline-warning"
                        onClick={() => {
                            props.onChecked(title, content);
                            addTitle("");
                            addContent("");
                        }}>Add Note</button>
                </div>
            </div>
        </div>
    );
}

export default InputArea;