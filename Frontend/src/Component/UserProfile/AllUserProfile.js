import React,{ useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';

const AllUserProfile = () => {
    const [pro_pic, setpro_pic] = useState(null);
    const storedUserDetails = localStorage.getItem('facilityUser');
    const storedUser = JSON.parse(storedUserDetails);
    const userType = JSON.parse(storedUserDetails).userDetails.userType;
    const firstName=JSON.parse(storedUserDetails).userDetails.firstName;
    const lastName=JSON.parse(storedUserDetails).userDetails.lastName;
    
    useEffect(() => {

        if (storedUser) {
            const avatarColor = getEmailAvatarColor(storedUser.userDetails.email);
            localStorage.setItem('facilityUser', JSON.stringify({ ...storedUser, avatarColor }));
        }
    }, []);

    const getEmailAvatarColor = (email) => {
        if (!email) {
            return null;
        }
        // Use the email to generate a hash (or any unique identifier)
        const hash = email.split('').reduce((acc, char) => acc + char.charCodeAt(0, 1), 0);
        return `#${hash.toString(16).slice(0, 6)}`;
    };

    function handleChange(e) {
        console.log(e.target.files);
        setpro_pic(URL.createObjectURL(e.target.files[0]));
    }
  
    // Parse JSON and get user details or set default values
    // const userDetails = storedUserDetails
    //     ? storedUser.userDetails
    //     : { firstName: 'Unknown', lastName: 'User' };
    

    // // Destructure user details
    // const { firstName, lastName} = userDetails;
    // console.log(userDetails);

    return (
        <div>
            {/* Retrieve and display the user details from local storage */}
            {storedUserDetails && (
                <div>

                    {/* Display the user's avatar from local storage */}
                    {pro_pic ? (
                        <img src={pro_pic ? URL.createObjectURL(pro_pic) : ''} 
                            alt="" 
                            style={{ 
                                width: '100px', 
                                height:'100px',
                                borderRadius:'50%',
                                marginLeft: '5px' ,}}/>
                    ) : (
                    <Avatar style={{ backgroundColor: JSON.parse(storedUserDetails).avatarColor ,
                                    width:'100px',
                                    height:'100px',
                                    fontSize:'35px',}}>
                        {storedUser.userDetails.email.slice(0, 2).toUpperCase()}
                    </Avatar>
                    
                    )}
                    <input type="file" onChange={handleChange} />
                    <img src={pro_pic} />
                    {/* <input type="file" 
                        accept='/image/*'
                        onChange={(event) => {
                            const file = event.target.files[0];
                            if(file && file.type.substring(0,5)==="image"){
                                setpro_pic(file);
                            }else{
                                setpro_pic(null)
                            }
                        }} />  */}
                </div>
            )}
            {/* Display the user's details */}

            <div className='userdetails'>
               {userType === 'admin' && (
                    <div>
                        <p>E-mail : {storedUser.userDetails.email}</p>
                            <p>Name : {firstName} {lastName}</p>
                    </div>                       
                )}

                {userType === 'university' && (
                    <div>
                        <p>E-mail : {storedUser.userDetails.email}</p>
                        <p>Name : {firstName} {lastName}</p>
                        <p>University ID : {storedUser.userDetails.universityID}</p>
                        <p>University E-mail : {storedUser.userDetails.universityEmail}</p>
                    </div>
                )}

                {userType === 'Guest' && (
                    <div>
                        <p>E-mail : {storedUser.userDetails.email}</p>
                        <p>Name : {firstName} {lastName}</p>
                    </div> 
                )}
            </div>
        </div>
    );
}

export default AllUserProfile;
