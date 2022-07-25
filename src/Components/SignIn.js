import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css'
import LoginImage from './LoginImage';
import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom"

const SignIn = () => {
    const history = useNavigate()
    const [inpVal, setInpVal] = useState({
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

        const getuserArr = localStorage.getItem("userCred")
        console.log(getuserArr)
        const { email, password } = inpVal;

        if (email === '') {
            alert('Fill Your Complete Details!')
        } else if (!email.includes('@')) {
            alert('Format of email is not valid!')
        } else if (password === '') {
            alert('Fill Your Complete Details!')
        } else if (password.length < 5) {
            alert('Password is too short!')
        } else {
            if (getuserArr && getuserArr.length) {
                const userCred = JSON.parse(getuserArr)
                const userLogin = userCred.filter((el, k) => {
                    return el.email === email && el.password === password
                })

                if (userLogin.length === 0) {
                    alert('Invalid details!')
                } else {
                    console.log("success")
                    history("/main")
                }
            }
        }
    }
    return (
        <div>
            <div className='mainSec m-5' style={{ overflow: 'hidden' }}>
                <section className='d-flex justify-content-around'>
                    <LoginImage></LoginImage>
                    <div className='data p-5' style={{ width: '40%' }}>
                        <h3 className='text-center col-lg-10'>Sign In</h3>
                        <Form>
                            <Form.Group className="mb-3 col-lg-10" controlId="formBasicEmail">
                                <Form.Control name='email' onChange={getCred} type="email" placeholder="Email" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-10" controlId="formBasicPassword">
                                <Form.Control name='password' onChange={getCred} type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Button className='col-lg-10 mb-3' onClick={addData} style={{ background: "rgb(67, 185, 127)" }} variant="primary" type="submit">
                                    Sign In
                                </Button>
                                <Form.Check type="checkbox" label="Remember me" />
                            </Form.Group>
                        </Form>
                        <p>Create a new account <span> <NavLink to='/'>Sign Up</NavLink></span></p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default SignIn 