import React from 'react';
import MapHead from './MapHead';
import NavLink from './Navlink';
import Footer from './Footer';
import Iframe from 'react-iframe'; 

const Map = (props) => {
  return (
    <div>
   <NavLink /> 
<MapHead /> 


<Iframe url="https://www.arcgis.com/home/webmap/viewer.html?webmap=80aba8feca084c8c80ca93aa25bd8966"
        width="850px"
        height="650px"
        id="myId"
        className="FloridaInteractiveMap"
        display="initial"
        position="relative"
        allowFullScreen/>




<Footer /> 
  
  


    </div>
  );
};

export default Map;