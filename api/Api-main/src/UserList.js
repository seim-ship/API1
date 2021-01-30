import React , {useState , useEffect} from 'react'
import axios from 'axios'
import './App.css';
function UserList() {
    const[users , setUsers] = useState([])
    useEffect (() => {
     axios
     .get('https://jsonplaceholder.typicode.com/users')
     .then(res =>{
         console.log(res)
         setUsers(res.data)
     })
     .catch(err =>{
         console.log(err)
     })
   }, [])
    
    return (
        <div>
           <ul className="li">
             {
                 users.map(user =><li key={user.id}>{user.name}</li>)
             }  
           </ul> 
        </div>
    )
}

export default UserList
