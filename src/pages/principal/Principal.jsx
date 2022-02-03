import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Alert, ActivityIndicator } from 'react-native';

import { SafeAreaView } from '../styledComponents';
import { ViewActivity, ViewPrincipal } from './styled';
  
import RestaurantList from '../../components/restaurantList/RestaurantList';
import CategorieList from '../../components/categorieList/CategorieList';
import BannerList from '../../components/banner/BannerList';
import ButtonTextSelectOne  from '../../components/buttonTextSelectOne/ButtonTextSelectOne';

import { loadCategories, loadRestaurants, loadBanners } from "../../fake/api";


export default function Principal()
{
  const [banners, setBanners] = useState([]);
  const [categories, setCategories] = useState([]);
  const [restaurants, setRestaurants] = useState([]);

  const [loaded, setLoaded] = useState(false);
  const [type, setType] = useState(null);

  useEffect(() =>
  {
    (async () =>
    {
      const listRest = await loadRestaurants(5000);
      setRestaurants(listRest);
      
      const listCat = await loadCategories(5000);
      setCategories(listCat);
      
      const listBanners = await loadBanners(5000);
      setBanners(listBanners);

      setLoaded(true);
    })()
      .catch((err) => Alert(err))
  },[]);
  

  const PageView = () =>
  {
    return (
      <ViewPrincipal>
        
        <ButtonTextSelectOne
          hook={ [type, setType] }
          values={ ['Entrega','Retirada'] }
        />        

        <CategorieList list={ categories } />

        <BannerList list={banners} />

        <RestaurantList list={ restaurants } />
      
      </ViewPrincipal>
    )
  } 

  return (
    <>
      <StatusBar style="theme-dark" />
      <SafeAreaView>
      {
        loaded ? (
           <PageView />
        ): (
            <ViewActivity>
              <ActivityIndicator color="#ff001A" size="large"/>
            </ViewActivity>
        )
      }
      </SafeAreaView>
    </>
  );
}
