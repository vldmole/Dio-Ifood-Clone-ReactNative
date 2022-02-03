import { ListView, View, Photo, Text, PhotoView } from './styled'


//---------------------------------------------------------
export default function CategorieList({list}) 
{
   const renderItem = ({ item }) => (
      <Categorie key={ item.id } categorie={ item } />
   )

   return (
      <ListView
         horizontal
         pagingEnabled={ true }
         showsHorizontalScrollIndicator={ false }
         legacyImplementation={ false }
         data={ list }
         renderItem={ renderItem }
         keyExtractor={ item => item.id }
      />
   )
}

//---------------------------------------------------------
export function Categorie ({ categorie })
{
   return (
      <View key={ categorie.id }>
         <PhotoView>
            <Photo source={ categorie.imgUrl } />
         </PhotoView>
         
         <Text>
            { categorie.name }
         </Text>
      </View>
   )
}

//---------------------------------------------------------