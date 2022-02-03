import { Text, TouchableOpacity } from "./styled";

export default function Button ({theme, text, ...rest})
{
   return (
      <TouchableOpacity theme={ theme || "" } {...rest}>
         <Text theme={theme}>
            { text }
         </Text>
      </TouchableOpacity> 
   ) 
}
