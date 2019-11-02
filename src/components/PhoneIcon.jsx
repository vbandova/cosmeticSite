import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ReactComponent as RRS } from 'assets/media/brand/phone.svg';
export const Wrapper = styled.div`
  align-items: flex-start;
  display: inline-flex;
  font-size: 0;

  svg {
    height: 4.2rem;
    max-height: 100%;
    width: auto;
  }
`;

const PhoneIcon = () => <Wrapper>{<RRS />}</Wrapper>;


export default PhoneIcon;