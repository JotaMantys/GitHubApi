import React from 'react';
import * as style from './Styled'

const Profile = () => {
    return ( 
    
    <style.Wrapper>

        <style.WrapperImg src = "https://avatars.githubusercontent.com/u/62626723?v=4"     alt = 'avatar' />
        <style.WrapperInfoUser>
            <div>
            <h1>nome</h1>
                <style.WrapperUserName >
                    <h3>Username</h3>
                    <a href="https://github.com/JotaMantys" target="_blank" rel="noreferrer"> voce </a>
                </style.WrapperUserName>
            </div>

        
            <style.WrapperStatusCount >
                
                    <div>
                        <h4>starred </h4> 
                        <span > 5 </span> 
                    </div> 
                    
                    <div>
                        <h4>folowers </h4> 
                        <span > 1 </span> 
                    </div>

                    <div>
                        <h4>folowing </h4> 
                        <span > 1 </span> 
                    </div> 
                
            </style.WrapperStatusCount> 
        </style.WrapperInfoUser>
    </style.Wrapper>

    );
}

export default Profile;