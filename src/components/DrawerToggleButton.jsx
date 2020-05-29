import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const ToggleButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 24px;
  width: 30px;
  background: transparent;
  border: none;
  cursor:pointer;
  margin-right : 1.5rem;
`;


const ButtonLine = styled.div`
    width: 30px;
    height 2px;
    background: white;
`;

function DrawerToggleButton({ onClick }) {
  return (
    <ToggleButton onClick={onClick}>
      <ButtonLine />
      <ButtonLine />
      <ButtonLine />
    </ToggleButton>

  );
}

DrawerToggleButton.propTypes = {
  onClick: PropTypes.func,
};
DrawerToggleButton.defaultProps = {
  onClick: null,
};

export default DrawerToggleButton;
