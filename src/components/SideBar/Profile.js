import React from 'react'
import styled from 'styled-components';
import Image from '../../assets/images/logo.png'


const Container = styled.div`
margin-top: 1rem;


`
const ProfileImg = styled.img`
height:  5rem;


`

const ProfileName  = styled.div`
font-size: 1rem;
font-weight: 300;
color: #FAF7FE;
font-family: cursive;
`

const Profile = () => {
    return(
        <Container> 
            <ProfileImg    src={Image} />
        </Container>

    );

};
export default Profile ;