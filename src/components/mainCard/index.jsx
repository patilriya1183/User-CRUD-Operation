import { BsFillPersonFill } from 'react-icons/bs';
import './index.css'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';



const MainCardComponent = () =>{

    const [user, setUser] = useState([]);

    useEffect(() => {

        async function getAllUser(){

            let api = "http://localhost:8080/user/all";

            let response = await fetch(api);

            let data = await response.json();

            console.log(data);

            setUser(data);
        }

        getAllUser();

    }, []);

    const deleteUser = async (id) =>{

        let api = `http://localhost:8080/user/delete/${id}`;
        
        let option = {
            method : "DELETE"
        }

        let response = await fetch(api, option);

        let data = await response.text();

        console.log(data);

        alert("User Deleted Successfully");

        window.location.reload();
    }

    return(

        <div className='mainCardComponent'>

            <h1 className='mainHead'> User Card </h1>

            <div className='mainCardContainerRow'>

                <div className='userCardsContainer'>

                    {
                        user.map((u) => (

                            <div className='userCard-MainCard' key={u.id}>

                            <div className='headingCard'>

                                <BsFillPersonFill className='userIcon'/>

                                <h2> {u.name} </h2>

                            </div>

                            <div className='containtCard'>
                                <p> ID : {u.id} </p>
                                <p> Email : {u.email} </p>
                                <p> Phone : {u.phone} </p>
                                <p> Department : {u.department} </p>
                                <p> Status: {u.status}   </p>
                            </div>

                            <div className='buttonCard'>
                                
                                <Link to={`/update/${u.id}`}>
                                
                                    <button className='editBtn'> Edit </button>

                                </Link>

                                <button className='deleteBtn' onClick={() => deleteUser(u.id)} > Delete </button>
                            </div>

                        </div>
                        ))
                    }

                </div>

            </div>

            <div className='newUserButtonDiv'>

                <Link to = '/create'>
                
                    <button className='newUserBtn'> Create New user </button>

                </Link>
                
            </div>

        </div>
    )
}

export default MainCardComponent;