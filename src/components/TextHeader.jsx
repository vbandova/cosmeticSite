import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: flex-start;
  display: inline-flex;

  svg {
    height: 4.2rem;
    max-height: 100%;
    width: auto;
  }
`;

const TextHeader=  ({text})  => <Wrapper>{<p>{text}</p>}</Wrapper>;

TextHeader.propTypes = {
    text: PropTypes.string,
  };
  

export default TextHeader;