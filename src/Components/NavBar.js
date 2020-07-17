import React from './node_modules/react';
import { Link } from './node_modules/react-router-dom';
import styled from './node_modules/styled-components';

const NavBar = props => {
    return (
        <Navigation>
            <Link to='/'>Home</Link>
        </Navigation>
    );
}

const Navigation = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    background: darkgoldenrod;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 5rem;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    a {
        text-decoration: none;
        color: #fff;
        font-weight: bold;
        margin-right: 40px;
        font-size: 2rem;
    }
`

export default NavBar;