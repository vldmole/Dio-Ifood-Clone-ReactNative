import styled from 'styled-components';
import { Dimensions } from "react-native";

//---------------------------------------------------------
export const ListView = styled.FlatList`
   flex-direction: row;
   margin-top: 20px;
   height: 90px;
   align-self: center;
   align-content: center;
   width: ${ (Dimensions.get('window').width)-12}px;
`

//---------------------------------------------------------
export const View = styled.View`
   align-items: center;
   width: ${ (Dimensions.get('window').width) - 12 }px;
`

//---------------------------------------------------------
export const Photo = styled.Image`
   width: ${ (Dimensions.get('window').width) - 16 }px;
   border-radius: 5px
   height: 70px;
   resize-mode: cover;
`
//---------------------------------------------------------
export const PhotoView = styled.View`
   
`
//---------------------------------------------------------
export const Text = styled.Text`
   margin-top: 0px
`
//---------------------------------------------------------