import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled.View`
  justify-content: center;
  align-content: center;
  align-items: center;
  margin: auto;
`;
export const Hello = styled.Text`
  text-align: center;
  color: #3c64ad;
  font-size: 18px;
  font-weight: bold;
`;

export const ButtonGoPageUser = styled(RectButton)`
  background: #3c64ad;
  padding: 10px;
  border-radius: 4px;
`;

export const ButtonText = styled.Text`
  text-align: center;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`;
