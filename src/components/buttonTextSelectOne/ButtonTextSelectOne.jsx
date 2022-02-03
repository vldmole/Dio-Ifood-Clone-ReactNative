import {
   OptionsView,
   OptionButton,
   ButtonText,
} from './styled';

//------------------------------------------------------------------------
export default function ButtonTextSelectOne({ hook, values } )
{
   const [type, setType] = [...hook];
   
   return (
      <OptionsView>
      {
         values.map(text => (
            <OptionButton key={ text } onPress={ () => setType(text) } >
               <ButtonText selected={ type == text }>
                  {text}
               </ButtonText>
            </OptionButton>
         ))
      }
      </OptionsView>   
   )
}

//------------------------------------------------------------------------