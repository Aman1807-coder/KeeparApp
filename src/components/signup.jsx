import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import Header from './header';

const Signup = () => {

    const [details, setDetails] = useState({
        name: "",
        contact: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [check, setCheck] = useState(false);
    const [alert, setAlert] = useState("");
    const navigate = useNavigate();

    const handleChange = (event) => {

        const newValue = event.target.value;
        const newName = event.target.name;

        setDetails({ ...details, [newName]: newValue });
    }

    const postData = async () => {
        
        setCheck(false);

        const res = await fetch('/form', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(details)
        });

        const result = await res.json();
        console.log(result);

        if (result) {
            navigate('/home', {
                state: {
                    name: result.name,
                    email: result.email,
                    Notes: result.notes
                }
            });
        }

        else {
            setAlert('Something Went Wrong Please Try Again');
            setCheck(true);
        }

    }


    const handleClick = (event) => {
        event.preventDefault();

        if (details.contact.length !== 10) {
            console.log(details.contact.length);
            setAlert("Enter a Valid Contact Number");
            setCheck(true);
            return;
        }

        if (details.password.length < 7) {
            setAlert("Password must be 8 characters long");
            setCheck(true);
            return;
        }

        if (details.confirmPassword !== details.password) {
            setAlert("Password and Confirm Password must be same");
            setCheck(true);
            return;
        }

        else {
            postData();
        }

    }

    return (
        <div>
            <Header />
            <div className="container-fluid ">
                <div className="row">
                    <div className="card cardup text-bg-light container-fluid col-6 col-sm-6 col-md-6 col-lg-4 ">
                        <div className="card-header text-bg-warning">Sign Up</div>
                        <div className="card-body row">
                            <form className="form">
                                <div className="mb-3 ">
                                    <label for="exampleInputEmail1" className="form-label">Name</label>
                                    <input type="text" className="form-control " aria-label="Sizing example input"
                                        aria-describedby="inputGroup-sizing-sm" name="name" onChange={handleChange} />
                                </div>
                                <div className="mb-3 ">
                                    <label for="exampleInputEmail1" className="form-label">Contact</label>
                                    <input type="text" className="form-control " aria-label="Sizing example input"
                                        aria-describedby="inputGroup-sizing-sm" name="contact" onChange={handleChange} />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" name="email" onChange={handleChange} />
                                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" name="password" onChange={handleChange} />
                                    <span id="passwordHelpInline" className="form-text">
                                        Must be 8 characters long.
                                    </span>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" name="confirmPassword" onChange={handleChange} />
                                </div>
                                <button type="submit"
                                    className="btn btn-warning d-inline-flex focus-ring focus-ring-warning py-1 px-2 text-decoration-none border rounded-2" onClick={handleClick}>Submit</button>
                                <Link to='signin'>
                                    <button type="button" className="btn btn-link text-warning">Already a user ?</button>
                                </Link>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="alertdiv">
                    {check && <div className="alert alert-warning container col-6 col-lg-4 " role="alert">
                        {alert}
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Signup;