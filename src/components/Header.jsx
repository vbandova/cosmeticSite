import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { appColor, headerHeight } from 'modules/theme';

import { logOut } from 'actions';

import { Container, utils } from 'styled-minimal';
import Icon from 'components/Icon';
import Logo from 'components/Logo';
import EmailIcon from 'components/EmailIcon';
import PhoneIcon from 'components/PhoneIcon';
import TextHeader from 'components/TextHeader';
const { responsive, spacer } = utils;

const HeaderWrapper = styled.header`
  background-color: #f7cbf7;
  height: ${headerHeight}px;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 200;

  &:before {
    background-color: ${appColor};
    bottom: 0;
    content: '';
    height: 0.2rem;
    left: 0;
    position: absolute;
    right: 0;
  }
`;

const HeaderContainer = styled(Container)`

  align-items: center;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  height: 100%;
  justify-content: space-between;
  padding-bottom: ${spacer(2)};
  padding-top: ${spacer(2)};
`;

const Login = styled.button`
  align-items: center;
  color: #fff;
  display: flex;
  flex-wrap: nowrap;
  font-size: 1.3rem;
  padding: ${spacer(2)};

  ${responsive({ lg: 'font-size: 1.6rem;' })}; /* stylelint-disable-line */

  &.active {
    color: #fff;
  }

  span {
    display: inline-block;
    margin-right: 0.4rem;
    text-transform: uppercase;
  }
`;

export default class Header extends React.PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

 headerView=() =>{
    if (window.innerWidth<780) {
      return (
        <HeaderWrapper>
        <HeaderContainer>
          <EmailIcon />
          <PhoneIcon/>
          <Logo type="logo" />
          <Login onClick={this.handleClickLogout}>
            <span>login</span>
            <Icon name="sign-in" width={16} />
          </Login>
        </HeaderContainer>
      </HeaderWrapper>
      );
    }
    return ( 
     <HeaderWrapper>
      <HeaderContainer>
        <EmailIcon />
        <TextHeader class="nomobile" text="almamorel@gmail.com"/>
        <PhoneIcon/>
        <TextHeader class="nomobile" text="0987......."/>
        <Logo type="logo" />
        <Login onClick={this.handleClickLogout}>
          <span>login</span>
          <Icon name="sign-in" width={16} />
        </Login>
      </HeaderContainer>
    </HeaderWrapper>);
  }
  handleClickLogout = () => {
    const { dispatch } = this.props;

    dispatch(logOut());
  };

  render() {
    console.log(window.innerWidth)
    const isMobile = window.innerWidth<780;
      return (
        <div>
        {isMobile ? (
          <HeaderWrapper>
          <HeaderContainer>
            <div>
            <EmailIcon />
            <PhoneIcon/>
            </div>
            <Logo type="logo" />
            <Login onClick={this.handleClickLogout}>
              <span>login</span>
              <Icon name="sign-in" width={16} />
            </Login>
          </HeaderContainer>
          </HeaderWrapper>
          ) : ( 
            <HeaderWrapper>
            <HeaderContainer>
              <div>
              <EmailIcon />
              <TextHeader class="nomobile" text="almamorel@gmail.com"/>
              <PhoneIcon/>
              <TextHeader class="nomobile" text="0987607980"/>
              </div>
              <Logo type="logo" />
              <Login onClick={this.handleClickLogout}>
                <span>login</span>
                <Icon name="sign-in" width={16} />
              </Login>
            </HeaderContainer>
          </HeaderWrapper>)
      }
      </div>
    )
  }
}
