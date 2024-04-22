import { useState } from 'react';
import './App.css'
import { useEffect } from 'react';

function App() {

  const [userss, setusers] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(data => setusers(data))
  }, [])
  console.log(userss)

  const handelsubmit = e => {
    e.preventDefault()
    const name = e.target.name.value;
    const email = e.target.email.value;
    const users = { name, email }
    console.log(users)
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(users)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.insertedId) {
          alert('add to clint');

        }
      })
  }



  //   fetch('http://localhost:3000/users', {
  //     method: 'POST',
  //     body: JSON.stringify(users),
  //     headers: {
  //       'Content-type': 'application/json; charset=UTF-8',
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((json) => console.log(json));
  // }


  // const handeldelate = _id => {
  //   console.log(_id);
    // fetch(`http://localhost:3000/users/${_id}`, {
    //   method: 'DELETE'
    // })
  //     .then(res => res.json())
  //     .then(data => console.log(data));
  // }


  const handeldelate = _id => {
    console.log(_id)
    fetch(`http://localhost:5000/users/${_id}`, {
      method: 'DELETE'
    })
    
      .then(res => res.json())
      .then((json) => console.log(json));
  }


  return (
    <>
      <h1>Mongodb project</h1>
      <form onSubmit={handelsubmit}>
        <input type="text" name="name" id="" /><br />
        <input type="email" name="email" id="" /><br />
        <input type="submit" value={"Submit"} id="" />


      </form>


      {
        userss.map(user => (
          <div key={user.insertedId} style={{ display: 'flex', flex: 'worp', gap: '50px', border: '1px solid', padding: '10px', margin: '10px' }}>
            <h1>{user.insertedId}</h1>
            <h2><span style={{ marginRight: "10px" }}> Name</span> {user.name}</h2>
            <h2><span style={{ marginRight: "10px" }}> Email</span> {user.email}</h2>
            <h2><span style={{ marginRight: "10px" }}> id</span> {user._id}</h2>
            <button onClick={() => handeldelate(user._id)} style={{ border: '2px silid' }}>Delate buttons</button>
          </div>
        ))
      }

    </>
  )
}

export default App
