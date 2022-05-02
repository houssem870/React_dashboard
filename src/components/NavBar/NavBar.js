import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    padding: 3rem;
    justify-content: flex-end;
    align-items: center;
    margin-left:20mm ;
    background-color: #ffffff;
    text-align: left;
    margin: 0.0rem;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);

`

const ProfileImg = styled.img`
    margin: 0 1rem;
    cursor: pointer;
    height:  6rem;
    border: 4px solid #683cdc;
    position: absolute;
`


const MessageIcon = styled.span`
    color: ${({ theme }) => theme.colorGray}; 
    color: #683cdc;
  padding: 15px 25px;
  font-size: 40px;
  position: absolute;
  padding-left:20%;
  padding-right: 20%;
    

`

const NotificationIcon = styled.span`
    color: ${({ theme }) => theme.colorGray}; 
    color: #683cdc;
  padding: 15px 25px;
  font-size: 40px;
  position: absolute;
  padding-left:10%;
  padding-right: 10%;
`
const NavBar = () => {
    return (
        <Container >
            <MessageIcon className="iconify"  data-inline="false" data-icon="bxs:message-rounded"></MessageIcon>
            <ProfileImg  style={{width: 50, height: 50, borderRadius: 60/ 2}} src={require('../../assets/images/profile.png')} />
            <NotificationIcon className="iconify" data-inline="false" data-icon="bxs:bell"></NotificationIcon>
        </Container>
    )
}

export default NavBar