import React from 'react';
import {Container, Hello, ButtonGoPageUser, ButtonText} from './styles';

const Main = ({navigation}) => {
  function navigateToUser() {
    navigation.navigate('User');
  }
  return (
    <Container>
      <Hello>Hello React Native</Hello>
      <ButtonGoPageUser>
        <ButtonText onPress={navigateToUser}>Navegar para user page</ButtonText>
      </ButtonGoPageUser>
    </Container>
  );
};
Main.navigationOptions = {
  title: 'Main',
};
export default Main;
