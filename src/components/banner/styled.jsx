import styled from "styled-components";
import { Dimensions } from "react-native";

//---------------------------------------------------------
export const ListView = styled.FlatList`
   flex-direction: row;
   margin-top: 2px;
   height: 100px;
   align-self: center;
   align-content: center;
   width: ${ (Dimensions.get('window').width) - 50 }px;
`
//---------------------------------------------------------
export const BannerView = styled.View`
   align-content: center;
`
//---------------------------------------------------------
export const PhotoView = styled.Image`
   border-radius: 10;
   width: ${ (Dimensions.get('window').width) -50}px;
   height: 100px;
   resize-mode: cover;
`
//---------------------------------------------------------