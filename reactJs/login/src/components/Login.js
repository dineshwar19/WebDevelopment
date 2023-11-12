import React, { useState } from 'react'

const Login = ({ getData }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [data, setData] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name === "" || email === "") {
            return;
        }
        
        // Update 'name' and 'email' first
        setName("");
        setEmail("");
        
        
        // Then, add the entry to 'data' and call 'getData' in the callback
        setData((prevData) => {
            const newEntry = { id: prevData.length, name: name, email: email };
            getData([...prevData, newEntry]);
            console.log(data)
            return [...prevData, newEntry];
        });
    }
    

    return (
        <div className='flex flex-col items-center justify-center min-h-screen dark:bg-slate-700'>
            <form onSubmit={handleSubmit} className='p-10 bg-white rounded-lg flex flex-col items-center'>
                <input type="text"
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='border-b border-black p-2 outline-none mb-5' />
                <input type="email"
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='border-b border-black p-2 outline-none mb-5' />
                <button type='submit' className='bg-blue-500 text-white p-2 rounded-lg'>Submit</button>
            </form>
        </div>
    );
}

export default Login;
