import React from 'react'
import MenuLink from './MenuLink'
import styled from 'styled-components'
import { Link } from 'react-router-dom'



const Container = styled.div`
    margin-top: 2rem;
    width: 100%;
`

const Menu = () => {
    return (
        <Container>
             <Link to="/Home">
             <MenuLink title="Home" icon={'home'}  />
             </Link>
             <Link to="/Matching">
             <MenuLink title="Matching" icon="factory"   />
             </Link>
             <Link to="/Charts"> 
             <MenuLink title="Charts" icon="chart-areaspline"/>
             </Link>
             <Link to="/Visualisation"> 
              <MenuLink title="Visualisation" icon={'television'}/>
             </Link>
             <Link to="/Settings"> 
              <MenuLink title="Settings" icon={'cog'} />
             </Link>

        </Container>
    )
}

export default Menu