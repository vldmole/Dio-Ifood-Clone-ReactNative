import styled from "styled-components";
import { css } from "styled-components/native"
import { Dimensions } from "react-native";

export const SafeAreaView = styled.SafeAreaView`
 flex: 1 1 auto;
 flex-direction: column;
 align-items: center;
 padding-top: 0px;
`
export const ViewPrincipal = styled.View`
   flex-direction: column;           
   width: ${ (Dimensions.get('window').width) }px;   
`

export const ViewActivity = styled.View`
   flex:1;
   align-items: center;
   justify-content: center;
   padding-top: 40px;
`

export const Image = styled.Image`
   margin: 40px;
   padding: 80px;
`

export const BannerView = styled.ScrollView`
   margin-top: 20px;
   height: 150px;
   flex-direction: row;
   width: ${(Dimensions.get('window').width)-10}px;
`

