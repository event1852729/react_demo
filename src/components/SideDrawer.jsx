import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const SideDrawerNav = styled.nav`
    height:100%;

`;

const SideDrawerLink = styled(NavLink)`
margin: 0 10px;
padding: 0 20px;
height: 40px;
font-size: 16px;
color: black;
display: flex;
align-items: center;
justify-content: center;
border-radius: 10px;
text-decoration: none;
transition-duration: 0.3s;
transition-property: background-color, font-size;
transition-timing-function: ease-in-out;
:hover {
  background-color: #b75e5e;
  color: white;
  font-size: 18px;
}
`;

const SideDrawerul = styled.ul`
    height: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0.5rem 0;
`;

const SideDrawerli = styled.li`
    
`;

function SideDrawer({ onClick }) {
  return (

    <SideDrawerNav>
      <SideDrawerul>
        <SideDrawerli>
          <SideDrawerLink
            onClick={onClick}
            exact
            activeStyle={{
              backgroundColor: '#b75e5e',
              fontSize: 18,
              color: 'white',
            }}
            to="/PostAnn"
          >
            公告
          </SideDrawerLink>
        </SideDrawerli>
        <SideDrawerli>
          <SideDrawerLink
            onClick={onClick}
            exact
            activeStyle={{
              backgroundColor: '#b75e5e',
              fontSize: 18,
              color: 'white',
            }}
            to="/Package"
          >
            包裹
          </SideDrawerLink>
        </SideDrawerli>
        <SideDrawerli>
          <SideDrawerLink
            onClick={onClick}
            exact
            activeStyle={{
              backgroundColor: '#b75e5e',
              fontSize: 18,
              color: 'white',
            }}
            to="/Youtube"
          >
            youtube
          </SideDrawerLink>
        </SideDrawerli>
      </SideDrawerul>
    </SideDrawerNav>
  );
}
SideDrawer.propTypes = {
  onClick: PropTypes.func,
};
SideDrawer.defaultProps = {
  onClick: null,
};

export default SideDrawer;
