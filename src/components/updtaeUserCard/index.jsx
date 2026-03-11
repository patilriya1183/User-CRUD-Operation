
import { useEffect, useState } from 'react';
import './index.css'
import { Link, useNavigate, useParams } from 'react-router-dom';

const UpdateUserCard = () =>{

    const [user, setUser] = useState({

        id : "",
        name : "",
        email : "",
        phone : "",
        department : "",
        status : ""
    });

    const {id} = useParams();
    const navigate = useNavigate();


    useEffect(() => {

        const getUser = async () =>{

            let api = `http://localhost:8080/user/get/${id}`;

            let response = await fetch(api);

            let data = await response.json();

            setUser(data);
        }

        getUser();

    }, [id]);


    const handleChange = (e) => {

        setUser({ ...user, [e.target.name] : e.target.value });
    }

    const updateUser = async () => {

        let api = `http://localhost:8080/user/update/${id}`;

        let option = {
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(user)
        };

        await fetch(api, option);

        navigate("/");
    }

    return(
            
            <div className='mainCardComponent'>
    
                <div className='mainUpdateContainerRow'>
    
                    <div className='userUpdateContainer'>

                        <h1 className='mainHead'> Update User Data </h1>
    
                        <div className='userCard-UpdateCard'>
    
                            <div className='containtUpdateCard'>

                                <label> Name : </label>
                                <input type="text"  name="name" value={user.name} onChange={handleChange}/> 

                                <label> ID : </label> 
                                <input type="text"  name="id" value={user.id} onChange={handleChange} /> 

                                <label> Email : </label> 
                                <input type="email"  name="email" value={user.email} onChange={handleChange}/> 

                                <label> Phone : </label> 
                                <input type="tel"  name="phone" value={user.phone} onChange={handleChange} /> 

                                <label> Department : </label> 
                                <input type="text"  name="department" value={user.department} onChange={handleChange} /> 

                                <label> Status : </label> 
                                <input type="text"  name="status" value={user.status} onChange={handleChange} /> 

                            </div>
    
                            <div className='buttonUpdateCard'>
                                
                                <Link to='/'>
                                
                                    <button className='backBtn'> Back </button>
    
                                </Link>

                                <button className='updateBtn' onClick={updateUser}> Update </button>

                            </div>
    
                        </div>
    
                    </div>
    
                </div>
    
            </div>
    )
}

export default UpdateUserCard;