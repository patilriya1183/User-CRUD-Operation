import { useState } from 'react';
import './index.css'
import { Link, useNavigate } from 'react-router-dom';

const CreateUserCard = () =>{

    const [user, setUser] = useState({
        name:"",
        id:"",
        email:"",
        phone:"",
        department:"",
        status:""
    });

    const navigate = useNavigate();

    const createUser = async () => {

        let api = "http://localhost:8080/user/add";

        let option = {
            method : "POST",
            headers : {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(user)
        }

        let response = await fetch(api, option);
        
        let data = await response.json();
        
        console.log(data);

        navigate("/");
    }

    const handleChange = (e) => {

        setUser({ ...user, [e.target.name] : e.target.value });
 
    }

    return(
        <>

            <div className='mainCardComponent'>
    
                <div className='mainUpdateContainerRow'>
    
                    <div className='userUpdateContainer'>

                        <h1 className='mainHead'> Create New User </h1>
    
                        <div className='userCard-UpdateCard'>
    
                            <div className='containtUpdateCard'>

                                <label> Name : </label>
                                <input type="text" name="name" value={user.name} onChange={handleChange} />

                                <label> ID : </label>
                                <input type="text" name="id" value={user.id} onChange={handleChange} />

                                <label> Email : </label>
                                <input type="email" name="email" value={user.email} onChange={handleChange} />

                                <label> Phone : </label>
                                <input type="tel" name="phone" value={user.phone} onChange={handleChange} />

                                <label> Department : </label>
                                <input type="text" name="department" value={user.department} onChange={handleChange} />

                                <label> Status : </label>
                                <input type="text" name="status" value={user.status} onChange={handleChange} /> 

                            </div>
    
                            <div className='buttonUpdateCard'>
                                
                                <button className='backBtn' onClick={createUser}> 
                                        
                                        Create User 
                                        
                                </button>

                            </div>
    
                        </div>
    
                    </div>
    
                </div>
    
            </div>

        </>
    )
}

export default CreateUserCard;