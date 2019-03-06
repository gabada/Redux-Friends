import React, {useState} from 'react';

const FriendForm = props => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    // setName('');
    // setAge('');
    // setEmail('');
    return (
        <div>
            <form>
                <input type="text" placeholder="friend name" onChange={e => setName(e.target.value)} name="name" value={name} />
                <input type="text" placeholder="friend age" onChange={e => setAge(e.target.value)} name="age" value={age} />
                <input type="text" placeholder="friend email" onChange={e => setEmail(e.target.value)} name="email" value={email} />
            </form>
            <button onClick={() => {
                props.addFriend({name, age, email})
                    setName('');
                    setAge('');
                    setEmail('');
                }
            }>Add New Friend</button>
        </div>
    )
    
};

export default FriendForm;