import React from 'react'
import './Main.css'
import Form from 'react-bootstrap/Form';
import Todo from './ToDo';
const Main = () => {
    return (
        <div className='container d-flex gx-0'>
            <div className='menu'>
                <div className='logo mt-3 mb-5'>.taskez</div>
                <div className='list'>Overview</div>
                <div className='list'>Stats</div>
                <div className='list'>Projects</div>
                <div className='list'>Chat</div>
                <div className='list'>Calendar</div>
                <div className='bottom'>Settings</div>
                <div className='logout'>Log Out</div>
            </div>
            <div className='toDo'>
                <div>
                    <Form>
                        <Form.Group style={{ width: '320px' }} className="m-5" controlId="formBasicName">
                            <Form.Control type="Name" placeholder="search..." />
                        </Form.Group>
                    </Form>
                </div>
                <div className='proj'>Projects</div>
                <div className='d-flex justify-content-around'>
                    <div className='work'>To-Do<Todo></Todo></div>
                    <div className='work'>In progress<div className='prog'><h4>Frontend</h4><p>As I am doing frontend course I should do internships afterward.</p></div></div>
                    <div className='work'>Completed</div>
                </div>
            </div>
        </div>
    )
}

export default Main