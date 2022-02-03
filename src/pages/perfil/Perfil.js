import { StatusBar } from 'expo-status-bar';

import
   {
   Text,
   SafeAreaView
} from '../styledComponents';

export default function Perfil()
{
   return (
      <>
         <StatusBar style="theme-dark" />
         <SafeAreaView>
            <Text>Perfil</Text>
         </SafeAreaView>
      </>
   );
}