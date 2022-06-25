import React from 'react'
import styled from 'styled-components';
import { AppBar, Box, InputBase, Toolbar, Typography, withTheme } from '@material-ui/core'
import { LocationSearchingTwoTone } from '@material-ui/icons'
import { Autocomplete } from '@material-ui/lab'
import { useMediaQuery } from '@material-ui/core';
import GoogleMapReact from 'google-map-react';
import { useState, useEffect, useRef } from 'react';
import { LocationCityOutlined } from '@material-ui/icons';
import useStyles2 from './stylex';
import Rating from '@material-ui/lab/Rating';
import useStyles from './styles';
import { LoadScript, Marker, DirectionsRenderer, InfoBox } from '@react-google-maps/api';

const MapAboutSection = styled.section`position: absolute;
width: 920px;
height: 653px;
left: 605px;
top: 5929px;

background: black;
box-shadow: -4px -4px 8px #27292D, 4px 4px 8px #070809;`;
const MapContainer = () => {
  let API_URL;

  //! Set API_URL based on env
              
  if(process.env.NODE_ENV !== 'production') {
      API_URL=process.env.REACT_APP_DEV_API_URL;
  }
  else{
      API_URL=process.env.REACT_APP_PROD_API_URL;
  }

    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');
  const coordinates = {lat:28.7041,lng:77.1025};
  const sourceRef = useRef();
      const destinationRef = useRef();
  
      const [modalOpen, setModalOpen] = useState(false);
  
      const [userCurrentLatitude, setUserCurrentLatitude] = useState();
      const [userCurrentLongitude, setUserCurrentLongitude] = useState();
      const [destinationLatitude, setDestinationLatitude] = useState(28.555503);
      const [destinationLongitude, setDestinationLongitude] = useState(77.3804877);
  
      const [markers, setMarkers] = useState(null);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(false);
  
      const [deviceId, setDeviceId] = useState("");
      const [deviceName, setDeviceName] = useState("");
      const [deviceUUID, setDeviceUUID] = useState("");
      const [chargeRate, setChargeRate] = useState("");
      const [deviceType, setDeviceType] = useState("");
      const [groupId, setGroupId] = useState("");
      const [latitude, setLatitude] = useState("");
      const [longitude, setLongitude] = useState("");
      const [address, setAddress] = useState("");
  
      const [directionsResponse, setDirectionsResponse] = useState("");
      const [distance, setDistance] = useState("");
      const [duration, setDuration] = useState("");
  useEffect(() => {

       
    // var myHeaders = new Headers();
    // myHeaders.append("userAuthToken", JSON.parse(localStorage.getItem("powerstrip-analytics-token")));
    // myHeaders.append("Content-Type", "application/json");

    // var requestOptions = {
    // method: 'GET',
    // headers: myHeaders,
    // redirect: 'follow'
    // };
          
          fetch(`${API_URL}/device/all`)
          .then(result => result.json())
          .then((result) => {
              console.log(result);
              console.log(result.devices);
              if(result.devices) {
                  setMarkers(result.devices);
              }
              else {
                  setError(true);
              }
              setLoading(false);
          })
          .catch((err) => {
              console.log(err);
              setError(true);
              setLoading(false);
          })
      },[])
      const mapStyles = {        
        height: "100vh",
        width: "100%"
    };
    
    const defaultCenter = {
        lat: 28.552403, lng: 77.3604877
    };
  
    return (

<div className={classes.mapContainer}>

<GoogleMapReact 
  
   
                 
                  
                     
                    //    mapContainerStyle={mapStyles}
                       zoom={9.5}
                       center={defaultCenter}
 bootstrapURLKeys={{key : 'AIzaSyAOd-j-X-i5AZ4e9pbpVpIogHQA6xtELsM'}}

margin={[50,50,50,50]}
options={''}
onChange={''}
onChildClick={''}>



 

</GoogleMapReact>

   
               </div>
)
}


export default MapContainer



// import React from 'react'
// import styled from 'styled-components';
// // import { AppBar, Box, InputBase, Toolbar, Typography, withTheme } from '@material-ui/core'
// // import { LocationSearchingTwoTone } from '@material-ui/icons'
// // import { Autocomplete } from '@material-ui/lab'
// // import { useMediaQuery } from '@material-ui/core';
// import GoogleMapReact from 'google-map-react';
// import { LocationCityOutlined } from '@material-ui/icons';
// import useStyles2 from './stylex';
// import Rating from '@material-ui/lab/Rating';
// import useStyles from './styles';

// import { useState, useEffect, useRef } from 'react';
// import { LoadScript, Marker, DirectionsRenderer, InfoBox } from '@react-google-maps/api';
// import { Box, Center, Spinner, Text, Icon, Button, Input, InputGroup, InputLeftAddon } from '@chakra-ui/react';
// import {
//     Drawer,
//     DrawerBody,
//     DrawerHeader,
//     DrawerOverlay,
//     DrawerContent,
//   } from '@chakra-ui/react';
//   import {
//     Table,
//     Tbody,
//     Tr,
//     Td,
//     TableContainer,
//   } from '@chakra-ui/react';
//   import {
//     Modal,
//     ModalOverlay,
//     ModalContent,
//     ModalHeader,
//     ModalFooter,
//     ModalBody,
//     ModalCloseButton,
//   } from '@chakra-ui/react';
// import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
// import { useDisclosure } from '@chakra-ui/react';
// import { FaWifi } from "react-icons/fa";
// import ChargerMarker from "../../Assets/charger-marker.png";

// const MapContainer = () => {

//     const { isOpen, onOpen, onClose } = useDisclosure()

//     //! API_URL variable
//     let API_URL;

//     //! Set API_URL based on env
                
//     if(process.env.NODE_ENV !== 'production') {
//         API_URL=process.env.REACT_APP_DEV_API_URL;
//     }
//     else{
//         API_URL=process.env.REACT_APP_PROD_API_URL;
//     }

//     const sourceRef = useRef();
//     const destinationRef = useRef();

//     const [modalOpen, setModalOpen] = useState(false);

//     const [userCurrentLatitude, setUserCurrentLatitude] = useState();
//     const [userCurrentLongitude, setUserCurrentLongitude] = useState();
//     const [destinationLatitude, setDestinationLatitude] = useState(28.555503);
//     const [destinationLongitude, setDestinationLongitude] = useState(77.3804877);

//     const [markers, setMarkers] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(false);

//     const [deviceId, setDeviceId] = useState("");
//     const [deviceName, setDeviceName] = useState("");
//     const [deviceUUID, setDeviceUUID] = useState("");
//     const [chargeRate, setChargeRate] = useState("");
//     const [deviceType, setDeviceType] = useState("");
//     const [groupId, setGroupId] = useState("");
//     const [latitude, setLatitude] = useState("");
//     const [longitude, setLongitude] = useState("");
//     const [address, setAddress] = useState("");

//     const [directionsResponse, setDirectionsResponse] = useState("");
//     const [distance, setDistance] = useState("");
//     const [duration, setDuration] = useState("");
//     useEffect(() => {

//       setModalOpen(true);
      
//       fetch(`${API_URL}/device/all`, requestOptions)
//       .then(result => result.json())
//       .then((result) => {
//           console.log(result);
//           console.log(result.devices);
//           if(result.devices) {
//               setMarkers(result.devices);
//           }
//           else {
//               setError(true);
//           }
//           setLoading(false);
//       })
//       .catch((err) => {
//           console.log(err);
//           setError(true);
//           setLoading(false);
//       })
//   },[])

//   const mapStyles = {        
//     height: "50vh",
//     width: "50%"
// };
// const defaultCenter = {
//   lat: 28.552403, lng: 77.3604877
// };

// return (

//    <div className={classes.mapContainer}>
   
           

//                <Box>
   
            
   
//                     {markers ?
//                    <LoadScript
//                    googleMapsApiKey={process.env.REACT_APP_MAPS_API_KEY}>
//                        <GoogleMapReact
//                        mapContainerStyle={mapStyles}
//                        zoom={9.5}
//                        center={defaultCenter}>
   
//                            <Marker
//                            draggable={false}
//                            onDragEnd={() => handleCoordinates()}
//                            icon={{
//                                path: 'm 12,2.4000002 c -2.7802903,0 -5.9650002,1.5099999 -5.9650002,5.8299998 0,1.74375 1.1549213,3.264465 2.3551945,4.025812 1.2002732,0.761348 2.4458987,0.763328 2.6273057,2.474813 L 12,24 12.9825,14.68 c 0.179732,-1.704939 1.425357,-1.665423 2.626049,-2.424188 C 16.809241,11.497047 17.965,9.94 17.965,8.23 17.965,3.9100001 14.78029,2.4000002 12,2.4000002 Z',
//                                fillColor:'inherit',
//                                // fillOpacity: 1.0,
//                                // strokeColor: '#000000',
//                                // strokeWeight: 1,
//                                // scale: 2,
//                            }}
//                            // onDrag={handleCoordinates}
//                            label={{
//                                text: "Destination",
//                                color: "inherit",
//                                fontSize: "0px",
//                                // fontWeight: "bold",
//                            }}
//                            name="Destination"
//                            position={{lat: destinationLatitude, lng: destinationLongitude}} />
   
//                            <Marker
//                            // icon={Logo}
//                            label={{
//                                text: "You",
//                                color: "inherit",
//                                fontSize: "0px",
//                                // fontWeight: "bold",
//                            }}
//                            />
   
//                        {markers.map((data, index) => (
//                            // <InfoBox>
//                            <Marker key={index}
//                            icon={ChargerMarker}
//                            // label={{
//                            //     text: data.device_id,
//                            //     color: "#000000",
//                            //     fontSize: "18px",
//                            //     fontWeight: "bold",
//                            // }}
//                            name={data.device_id}
//                            onClick={() => {handleMarkClick(data); onOpen()}}
//                            title={data.site}
//                            position={{lat: data.lat, lng: data.lng}} />
//                            // </InfoBox>
//                        ))}
   
   
//                        </GoogleMapReact>
//                    </LoadScript>
//                    :
//                    <Box></Box>}
   
//                </Box>
   
              
   
              
               
//            </div>
//        )
//    }
   
//    export default MapContainer;
   

// import { useState, useEffect, useRef } from 'react';
// import { GoogleMap, LoadScript, Marker, DirectionsRenderer, InfoBox } from '@react-google-maps/api';
// import { Box, Center, Spinner, Text, Icon, Button, Input, InputGroup, InputLeftAddon } from '@chakra-ui/react';
// import {
//     Drawer,
//     DrawerBody,
//     DrawerHeader,
//     DrawerOverlay,
//     DrawerContent,
//   } from '@chakra-ui/react';
//   import {
//     Table,
//     Tbody,
//     Tr,
//     Td,
//     TableContainer,
//   } from '@chakra-ui/react';
//   import {
//     Modal,
//     ModalOverlay,
//     ModalContent,
//     ModalHeader,
//     ModalFooter,
//     ModalBody,
//     ModalCloseButton,
//   } from '@chakra-ui/react';
// import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
// import { useDisclosure } from '@chakra-ui/react';
// import { FaWifi } from "react-icons/fa";
// import ChargerMarker from "../../Assets/charger-marker.png";

// const MapContainer = () => {

//     const { isOpen, onOpen, onClose } = useDisclosure()

//     //! API_URL variable
//     let API_URL;

//     //! Set API_URL based on env
                
//     if(process.env.NODE_ENV !== 'production') {
//         API_URL=process.env.REACT_APP_DEV_API_URL;
//     }
//     else{
//         API_URL=process.env.REACT_APP_PROD_API_URL;
//     }

//     const sourceRef = useRef();
//     const destinationRef = useRef();

//     const [modalOpen, setModalOpen] = useState(false);

//     const [userCurrentLatitude, setUserCurrentLatitude] = useState();
//     const [userCurrentLongitude, setUserCurrentLongitude] = useState();
//     const [destinationLatitude, setDestinationLatitude] = useState(28.555503);
//     const [destinationLongitude, setDestinationLongitude] = useState(77.3804877);

//     const [markers, setMarkers] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(false);

//     const [deviceId, setDeviceId] = useState("");
//     const [deviceName, setDeviceName] = useState("");
//     const [deviceUUID, setDeviceUUID] = useState("");
//     const [chargeRate, setChargeRate] = useState("");
//     const [deviceType, setDeviceType] = useState("");
//     const [groupId, setGroupId] = useState("");
//     const [latitude, setLatitude] = useState("");
//     const [longitude, setLongitude] = useState("");
//     const [address, setAddress] = useState("");

//     const [directionsResponse, setDirectionsResponse] = useState("");
//     const [distance, setDistance] = useState("");
//     const [duration, setDuration] = useState("");
//     useEffect(() => {

//       setModalOpen(true);
      
//       fetch(`${API_URL}/device/all`, requestOptions)
//       .then(result => result.json())
//       .then((result) => {
//           console.log(result);
//           console.log(result.devices);
//           if(result.devices) {
//               setMarkers(result.devices);
//           }
//           else {
//               setError(true);
//           }
//           setLoading(false);
//       })
//       .catch((err) => {
//           console.log(err);
//           setError(true);
//           setLoading(false);
//       })
//   },[])

//   const mapStyles = {        
//     height: "50vh",
//     width: "50%"
// };
// const defaultCenter = {
//   lat: 28.552403, lng: 77.3604877
// };

// return (
//   <Box>
           

//             <Box>

         

//                 {markers ?
//                 <LoadScript
//                 googleMapsApiKey={process.env.REACT_APP_MAPS_API_KEY}>
//                     <GoogleMap
//                     mapContainerStyle={mapStyles}
//                     zoom={9.5}
//                     center={defaultCenter}>

//                         <Marker
//                         draggable={false}
//                         onDragEnd={() => handleCoordinates()}
//                         icon={{
//                             path: 'm 12,2.4000002 c -2.7802903,0 -5.9650002,1.5099999 -5.9650002,5.8299998 0,1.74375 1.1549213,3.264465 2.3551945,4.025812 1.2002732,0.761348 2.4458987,0.763328 2.6273057,2.474813 L 12,24 12.9825,14.68 c 0.179732,-1.704939 1.425357,-1.665423 2.626049,-2.424188 C 16.809241,11.497047 17.965,9.94 17.965,8.23 17.965,3.9100001 14.78029,2.4000002 12,2.4000002 Z',
//                             fillColor:'inherit',
//                             // fillOpacity: 1.0,
//                             // strokeColor: '#000000',
//                             // strokeWeight: 1,
//                             // scale: 2,
//                         }}
//                         // onDrag={handleCoordinates}
//                         label={{
//                             text: "Destination",
//                             color: "inherit",
//                             fontSize: "0px",
//                             // fontWeight: "bold",
//                         }}
//                         name="Destination"
//                         position={{lat: destinationLatitude, lng: destinationLongitude}} />

//                         <Marker
//                         // icon={Logo}
//                         label={{
//                             text: "You",
//                             color: "inherit",
//                             fontSize: "0px",
//                             // fontWeight: "bold",
//                         }}
//                         />

//                     {markers.map((data, index) => (
//                         // <InfoBox>
//                         <Marker key={index}
//                         icon={ChargerMarker}
//                         // label={{
//                         //     text: data.device_id,
//                         //     color: "#000000",
//                         //     fontSize: "18px",
//                         //     fontWeight: "bold",
//                         // }}
//                         name={data.device_id}
//                         onClick={() => {handleMarkClick(data); onOpen()}}
//                         title={data.site}
//                         position={{lat: data.lat, lng: data.lng}} />
//                         // </InfoBox>
//                     ))}


//                     </GoogleMap>
//                 </LoadScript>
//                 :
//                 <Box></Box>}

//             </Box>

           

           
            
//         </Box>
//     )
// }

// export default MapContainer;
