import { StatusBar } from 'expo-status-bar';

import
{
    Text,
    View,
    Image,
    ButtonContainer,
    SafeAreaView
} from '../styledComponents';
  
import banner from './img/banner.png';
import Button from '../../components/button/Button';

export default function Start({ navigation })
{
  return (
    <>
      <StatusBar style="theme-dark" />
      <SafeAreaView>
        <View>
          <Text
            style={ { fontWeight: 'bold', fontSize: 18 } }
          >
            Pedir comida nunca foi tão fácil
          </Text>

          <Image source={banner} />
          
          <Text
            style={ { fontWeight: 'bold', fontSize: 16 } }
          >
            Permitir Localização
          </Text>
          
          <Text>Para descobrir restaurantes que entregam em sua região</Text>
        </View>

        <ButtonContainer>
          <Button
            text="PULAR"
            onPress = {() => navigation.navigate('Main')} 
          />
          
          <Button
            theme="primary"
            text="ENTRAR"
            onPress = { () => { } }
          />
        </ButtonContainer>
      </SafeAreaView>
    </>
  );
}