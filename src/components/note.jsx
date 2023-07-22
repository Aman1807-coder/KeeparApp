import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const Note = (props) => {

    return (
        <div className='col-lg-3 col-md-4 col-sm-12'>
            <div className="card text-bg-light note">
                <div className="card-header text-bg-warning">{props.title}</div>
                <div className="card-body">
                    <h5 className="card-title">{props.content}</h5>
                </div>
                <div className="d-flex justify-content-center">
                    <button type="button" className="btn btn-outline-danger del"
                        onClick={() => { props.onChecked(props.id) }}><DeleteIcon /></button>
                </div>
            </div>
        </div>
    );
}

export default Note;