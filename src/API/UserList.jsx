import React, { useEffect, useState } from 'react'

const UserList = () => {
    const[users,setUsers] = useState([]) ;
    const[loading,setLoading] = useState(true) ;
    const[error,setError] = useState(null) ;

    useEffect(()=>{

        const fetchUsers = async () =>{
            try{
          const response = await fetch("https://jsonplaceholder.typicode.com/users") ;
          if(!response.ok){
            throw new Error(response.statusText) ;
          }
          const result = await response.json() ;
          setUsers(result) ;
          setLoading(false) ;
            }catch(err){
                setError(err.message)
                setLoading(false);
            }
        }
        fetchUsers();
    },[]) ;

    if(loading){
        return <div>Loading...</div>;
    }
    if(error){
        return <p>Error: {error}</p>;eturn 
    }

    return(
        <div>
            <h1>Users List</h1>
            <ul>
                {users.map((user,i)=>(
                    <li key={i}>{user.name}</li>
                ))
                }
            </ul>
        </div>
    )
}

export default UserList
