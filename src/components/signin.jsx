import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

const Signin = () => {

    const [details, setDetails] = useState({
        email: "",
        password: ""
    });

    const [check, setCheck] = useState(false);
    const [alert, setAlert] = useState("");
    const navigate = useNavigate();

    const handleChange = (event) => {

        setCheck(false);

        const newValue = event.target.value;
        const newName = event.target.name;

        setDetails({ ...details, [newName]: newValue });
    }

    const handleClick = async (event) => {
        event.preventDefault();

        const res = await fetch('/form/signin', {
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

    return (
        <div class="container-fluid " >
            <div class="row">
                <div class="card cardin text-bg-light container-fluid col-6 col-sm-6 col-md-6 col-lg-4 " >
                    <div class="card-header text-bg-warning">Sign In</div>
                    <div class="card-body row">
                        <form class="form justify-content-center">
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    name="email" onChange={handleChange}
                                />
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1"
                                    name="password" onChange={handleChange}
                                />
                            </div>
                            <button type="submit" class="btn btn-warning" onClick={handleClick}>Submit</button>
                            <Link to='/'>
                                <button type="button" class="btn btn-link text-warning"> Not yet Registered ?</button>
                            </Link>
                        </form>
                    </div>
                </div>
            </div>
            <div className="alertdiv">
                {check && <div className="alert alert-danger container col-6 col-lg-4 alertin" role="alert">
                    {alert}
                </div>}
            </div>
        </div>
    )
}

export default Signin;