import { Text } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { useState } from "react";

import
{
   RestaurantListView,
   RestaurantListTitle,
   RestaurantFlatListView,
   RestaurantView,
   RestaurantPhoto,
   RestaurantInfo,
} from "./styled";

//-----------------------------------------------------------------------
export default
function RestaurantList({ list })
{
   return (
      <RestaurantListView>
         <RestaurantListTitle>
            RESTAURANTES
         </RestaurantListTitle>
         <RestaurantFlatList data={ list } />
      </RestaurantListView>
   )
}

//-----------------------------------------------------------------------
export function RestaurantFlatList({ data })
{
   const [selectedId, setSelectedId] = useState(null);

   const renderItem = ({ item }) =>
   {
      return (
         <Restaurant restaurant={ item } />
      )
   };

   return (
      <RestaurantFlatListView
         data={ data }
         renderItem={ renderItem }
         keyExtractor={ restaurant => restaurant.id }
         extraData={ selectedId }
      />
   )
}

//-----------------------------------------------------------------------
export function Restaurant({ restaurant })
{
   return (
      <RestaurantView key={ restaurant.id }>
         <RestaurantPhoto
            source={ restaurant.imgUrl }
         />
         
         <RestaurantInfo>
            <Text>
               { restaurant.name }
            </Text>

            <AntDesign name="star" size={ 12 } color="#f9a825" />
            
            <Text>
               { restaurant.rating } - { restaurant.categorie } -{ restaurant.distance }km
            </Text>
            
            <Text>
               { restaurant.timeToDo } - R$: { restaurant.freightValue }
            </Text>
         </RestaurantInfo>
      </RestaurantView>
   );
}

//-----------------------------------------------------------------------
/* old implementation
const RestaurantList = ({ list }  ) =>
{
   return (
      <RestaurantListView>
         <RestaurantListTitle>
            RESTAURANTES
         </RestaurantListTitle>
         <RestaurantScrollListView>
         {
            list.map((restaurant) => (
               <Restaurant 
                  key={restaurant.id} 
                  restaurant = {restaurant} 
               />
            ))
         }
         </RestaurantScrollListView>
      </RestaurantListView>
   )
}
*/

