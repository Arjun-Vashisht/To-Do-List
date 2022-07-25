import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css'
import LoginImage from './LoginImage';
import { NavLink } from "react-router-dom"

const Login = () => {
    const [inpVal, setInpVal] = useState({
        name: '',
        email: '',
        password: '',
    })
    const [data, setData] = useState([]);
    console.log(inpVal)
    const getCred = (cred) => {
        // console.log(cred.target.value)
        const { value, name } = cred.target
        // console.log(value,name)

        setInpVal(() => {
            return {
                ...inpVal,
                [name]: value,
            }
        })
    }
    const addData = (add) => {
        add.preventDefault();

        const { name, email, password } = inpVal;

        if (name === '') {
            alert('Fill Your Complete Details!')
        } else if (email === '') {
            alert('Fill Your Complete Details!')
        } else if (!email.includes('@')) {
            alert('Format of email is not valid!')
        } else if (password === '') {
            alert('Fill Your Complete Details!')
        } else if (password.length < 5) {
            alert('Password is too short!')
        } else {
            console.log('data added successfully!')

            localStorage.setItem("userCred", JSON.stringify([...data, inpVal]))
        }

    }
    return (
        <div className='mainSec m-5' style={{ overflow: 'hidden' }}>
            <section className='d-flex justify-content-around'>
                <LoginImage></LoginImage>
                <div className='data p-5' style={{ width: '40%' }}>
                    <h3 className='text-center col-lg-10'>Sign Up</h3>
                    <Form>
                        <Form.Group className="mb-3 mt-3 col-lg-10" controlId="formBasicName">
                            <Form.Control name='name' onChange={getCred} type="Name" placeholder="Full Name" />
                        </Form.Group>
                        <Form.Group className="mb-3 col-lg-10" controlId="formBasicEmail">
                            <Form.Control name='email' onChange={getCred} type="email" placeholder="Email" />
                        </Form.Group>

                        <Form.Group className="mb-3 col-lg-10" controlId="formBasicPassword">
                            <Form.Control name='password' onChange={getCred} type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Button className='col-lg-10 mb-3' onClick={addData} style={{ background: "rgb(67, 185, 127)" }} variant="primary" type="submit">
                                Sign Up
                            </Button>
                            <Form.Check type="checkbox" label="Remember me" />
                        </Form.Group>
                    </Form>
                    <p>Already have an account <span> <NavLink to="/login">Sign in</NavLink></span></p>
                </div>
            </section>
        </div>
    )
}

export default Login