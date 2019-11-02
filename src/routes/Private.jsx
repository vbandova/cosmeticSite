import React from 'react';
import styled from 'styled-components';


import { Box, Container, Heading, Link, Paragraph, Screen, Text, utils } from 'styled-minimal';

const Header = styled.div`
  margin-bottom: ${utils.spacer(3)};
  text-align: center;
`;

const Private = () => (
  <Screen key="Private" data-testid="PrivateWrapper">
    <Container verticalPadding>
    </Container>
  </Screen>
);

export default Private;
