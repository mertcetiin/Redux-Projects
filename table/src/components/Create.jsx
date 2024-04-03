import React from 'react'
import { useState } from 'react';
import { addUser } from '../redux/features/UserReducer';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';


function Create() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const users = useSelector((state) => state.users)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addUser({ id: users[users.length - 1].id + 1, name, email }))
        navigate('/')
    }

    return (
        <div>
            <div>
                <h3>Add New User</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="text" name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <br />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Create;