import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom';
import { updateUser } from '../redux/features/UserReducer';
import { useNavigate } from 'react-router-dom';


function Update() {

    const { id } = useParams();
    const users = useSelector((state) => state.users)
    const existingUser = users.filter((f) => f.id == id)
    const { name, email } = existingUser[0];

    const [uname, setName] = useState(name);
    const [uemail, setEmail] = useState(email);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateUser({
            id: id,
            name: uname,
            email: uemail,
        }))
        navigate('/')
    }

    return (
        <div>
            <div>
                <h3>Update User</h3>
                <form onSubmit={handleUpdate}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input type="text" name='name'
                            value={uname}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="text" name='email'
                            value={uemail}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <br />
                    <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default Update;