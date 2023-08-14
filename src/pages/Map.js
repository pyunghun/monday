import all from '../css/all.css';
import { useEffect, useRef } from 'react';



function Map1() {
  const mapElement = useRef(null);


  useEffect(() => {
    const { naver } = window;
    if (!mapElement.current || !naver) return;

    
    const location = new naver.maps.LatLng(37.4137502, 127.0998871);
    const mapOptions: naver.maps.MapOptions = {
      center: location,
      zoom: 17,
      zoomControl: true,
      zoomControlOptions: {
        position: naver.maps.Position.TOP_RIGHT,
      },
    };
    const map = new naver.maps.Map(mapElement.current, mapOptions);
    new naver.maps.Marker({
      position: location,
      map,
    });
  }, []);


  return <div ref={mapElement} style={{ minHeight: '800px' }} />;
}




export default Map1;