import { Dimensions } from "react-native";

import { ListView, BannerView, PhotoView} from "./styled";

export default function BannerList({ list })
{
   const renderItem = ({ item }) => (
      <Banner key={ item.id } banner={ item } />
   )

   return (
      <ListView
         horizontal={ true }
         pagingEnabled={ true }
         showsHorizontalScrollIndicator={ false }
         legacyImplementation={ false }
         data={ list }
         renderItem={ renderItem }
         keyExtractor={ item => item.id }
      />
   )
}

export function Banner({ banner })
{
   return (
      <BannerView key={ banner.id }>
         <PhotoView source={banner.imgUrl} />
      </BannerView>
   )
}