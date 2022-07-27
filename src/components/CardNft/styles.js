import styled from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';
export const Container = styled.View`
   background-color: hsl(217, 54%, 11%);
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
`;
export const Card = styled.View`
   width: 80%;
   height: 80%;
   background-color: hsl(216, 50%, 16%);
   display: flex;
   align-items: center;
`;

export const Pic = styled.Image`
  margin-top: ${RFPercentage(4)}px;
  width: 85%;
  height:  60%;
  border-radius: 18px;
`;

export const Details = styled.View`
  display: flex;
  margin:  ${RFPercentage(2.5)}px;
  width: 80%;
`;
export const Title = styled.Text` 
  font-size: ${RFPercentage(2.5)}px;
  color: #fff;
  font-weight: 500;
`;
export const Description = styled.Text`
  margin-top:  ${RFPercentage(2)}px;
  color: hsl(215, 51%, 70%);
`;
export const Values = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 80%;
`;

export const Line = styled.View`
  width: 80%;
  height: ${RFPercentage(0.1)}px;;
  margin-top: ${RFPercentage(2.4)}px;
  background-color: hsl(215, 51%, 70%);
`;
export const Price = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
`;
export const PriceText = styled.Text`
  color:hsl(178, 100%, 50% );
  display: flex;
  font-weight: 500;
  margin-left: ${RFPercentage(1)}px;
  font-size: ${RFPercentage(2.5)}px;
`;
export const DaysLeft = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const IconCoin = styled.Image`
  width: 10px; 
  height: 20px;
`;
export const ClockIcon = styled.Image`
  width: 25px; 
  height: 25px;
`;

export const DaysLeftDescription = styled.Text`
  color:hsl(178, 100%, 50% );
  display: flex;
  font-weight: 300;
  margin-left: ${RFPercentage(1)}px;
  font-size: ${RFPercentage(2.5)}px;
`;
export const Infos = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: ${RFPercentage(2)}px;
  align-items: center;
  justify-content: flex-start;
  width: 80%;
`;
export const UserIcon = styled.Image`
`;
export const UserDetails = styled.Text`
  color: hsl(215, 51%, 70%);
  font-size: ${RFPercentage(2)}px ;
  margin-left: ${RFPercentage(2)}px;
`;

export const Name = styled.Text`
  color: #fff;
  font-size: ${RFPercentage(2)}px ;
  margin-left: ${RFPercentage(1)}px;
`;
export const Avatar = styled.Image`
  width: 40px; 
  height: 40px;
  border: 1px solid white;
  border-radius:  100px;
`;
