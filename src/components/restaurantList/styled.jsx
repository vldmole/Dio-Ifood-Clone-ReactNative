import styled from "styled-components";
import { Dimensions } from "react-native";

//--------------------------------------------------------------
export const RestaurantListView = styled.View`
   flex-direction: column;
   justify-content: space-around;
   align-items: center;
   width: ${ (Dimensions.get('window').width) }px;
   min-height: ${ (Dimensions.get('window').height - (Dimensions.get('window').height -235)) }px
   padding: 2px 2px 2px 2px;
`

//--------------------------------------------------------------
export const RestaurantListTitle = styled.Text`
   text-align: left;
   margin: 0px 0px 0px 30px;
   font-weight: bold;
   width: ${ (Dimensions.get('window').width) }px;
`
//--------------------------------------------------------------
/*
ScrollView isn't good if there are a lot of restaurants in the list, 
FlatList will render lazyly as need

export const RestaurantScrollListView = styled.ScrollView.attrs({
   showsHorizontalScrollIndicator: false,
   showsVertiacalScrollIndicator: false,
   contentContainerStyle: css`justify-content: center`,
})`
   width:${ (Dimensions.get('window').width) - 10 }px;
   margin: 2px 5px 2px 5px;
`;*/

//--------------------------------------------------------------
export const RestaurantFlatListView = styled.FlatList`
   flex: 1;
   width:${ (Dimensions.get('window').width) - 10 }px;
   margin: 2px 5px 2px 5px;
`
//--------------------------------------------------------------
export const RestaurantView = styled.View`
   flex-direction: row;
   align-items: center;
   border-radius: 5px;
   border: 1px solid #c4c4c4;
   background-color: #fff;
   min-width: 90%;
   margin-bottom: 1px;
   padding: 2px 2px 2px 2px;
`
//--------------------------------------------------------------
export const RestaurantInfo = styled.View`
   display: flex;
   flex-direction: column;
   justify-content: center;
   margin-left: 10px;
   margin-top: 0px;
`
//--------------------------------------------------------------
export const RestaurantPhoto = styled.Image`
   border-radius: 25px;
   width: 70px;
   height: 70px;
   resize-mode: cover;
`
//--------------------------------------------------------------