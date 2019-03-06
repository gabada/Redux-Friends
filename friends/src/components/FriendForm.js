import React, {useState} from 'react';

const FriendForm = props => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    return (
        <div>
            <form>
                <input type="text" placeholder="friend name" onChange={e => setName(e.target.value)} name="name" value={name} />
                <input type="text" placeholder="friend age" onChange={e => setAge(e.target.value)} name="age" value={age} />
                <input type="text" placeholder="friend email" onChange={e => setEmail(e.target.value)} name="email" value={email} />
                <input type="text" placeholder="friend gender" onChange={e => setGender(e.target.value)} name="gender" value={gender} />
            </form>
            <button onClick={() => {
                props.addFriend({name, age, email, gender})
                    setName('');
                    setAge('');
                    setEmail('');
                    setGender('');
                }
            }>Add New Friend</button>
        </div>
    )
    
};

export default FriendForm;