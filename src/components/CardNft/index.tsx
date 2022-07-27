import {  Card, 
          Container, 
          Pic, 
          Title,
          Description,
          Details,
          Values,
          Price,
          PriceText,
          IconCoin,
          ClockIcon,
          DaysLeft,
          DaysLeftDescription,
          Infos,
          Line,
          UserDetails,
          Avatar,
          Name
         } from './styles'
import imageEquilibrium from '../../../assets/image-equilibrium.jpg';
import { SvgUri } from 'react-native-svg';
import { View } from 'react-native';
import IconView from '../../../assets/icon-view.png';
import iconEthereum  from '../../../assets/icon-ethereum.png';
import iconClock from '../../../assets/icon-clock.png';
import avatar from '../../../assets/image-avatar.png';


const CardNft = () => {
  return (
    <Container>
      <Card>
        <Pic source={imageEquilibrium} />
        <Details>
          <Title>
            Equilibrium #3429
          </Title>
          <Description>
            Our Equilibrium collection promotes balance and calm
          </Description>
        </Details>
        <Values>
          <Price>
            <IconCoin source={iconEthereum} />
            <PriceText>
              0.041 ETH
            </PriceText>
          </Price>
          <DaysLeft>
              <ClockIcon source={iconClock} />
              <DaysLeftDescription>
                  3 days left
              </DaysLeftDescription>
          </DaysLeft>
        </Values>
        <Line/>
        <Infos>
          <Avatar source={avatar} />
          <UserDetails> Creation of </UserDetails>
          <Name> Jules Wyvern </Name>
        </Infos>
      </Card>
    </Container>
  )
}

export default CardNft
