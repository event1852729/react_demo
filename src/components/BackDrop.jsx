import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BackDropDiv = styled.div`
    width : 100%;
    position : fixed;
    height : 100%;
    top : 0;
    left : 0;
    background : rgba(0,0,0,0.3);
    z-index : 100; 
`;
function BackDrop({ onClick }) {
  return (
    <BackDropDiv onClick={onClick} />
  );
}

BackDrop.propTypes = {
  onClick: PropTypes.func,
};
BackDrop.defaultProps = {
  onClick: null,
};

export default BackDrop;
