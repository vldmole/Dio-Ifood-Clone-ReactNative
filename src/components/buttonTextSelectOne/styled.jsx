import styled, { css } from "styled-components";
import { Dimensions } from "react-native";

//----------------------------------------------------------
export const OptionsView = styled.View`
   flex-direction: row;
   text-align: left;
   margin: 0px 0px 0px 20px;
   font-weight: bold;
   width: ${ (Dimensions.get('window').width) - 40}px;
`
//----------------------------------------------------------
export const OptionButton = styled.TouchableOpacity`
   margin-right: 20px;
`
//----------------------------------------------------------
export const ButtonText = styled.Text`
   ${ props => props.selected ?
      css`
         font-weight: bold;
         color: #ff001A
         `
      : css`` 
   }
`
//----------------------------------------------------------