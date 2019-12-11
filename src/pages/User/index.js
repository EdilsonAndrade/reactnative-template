import React from 'react';
import {Container, Hello} from './styles';

const User = () => {
  return (
    <Container>
      <Hello>Hello User</Hello>
    </Container>
  );
};

User.navigationOptions = {
  title: 'User',
};

export default User;
