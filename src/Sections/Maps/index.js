import React from 'react'
import styled from 'styled-components';
import { AppBar, Box, InputBase, Toolbar, Typography, withTheme } from '@material-ui/core'
import { LocationSearchingTwoTone } from '@material-ui/icons'
import { Autocomplete } from '@material-ui/lab'
import { useMediaQuery } from '@material-ui/core';
import GoogleMapReact from 'google-map-react';
import { LocationCityOutlined } from '@material-ui/icons';
import useStyles2 from './stylex';
import Rating from '@material-ui/lab/Rating';
import useStyles from './styles';

 import MapContainer from './MapContainer';
const AboutSection = styled.div`
position: absolute;
width: 607px;
height: 653px;
left: 0px;
top: 7000px;

background: black;
box-shadow: -4px -4px 8px #27292D, 4px 4px 8px #070809;`;
const MapAboutSection = styled.section`position: absolute;
width: 920px;
height: 653px;
left: 605px;
top: 7000px;

background: black;
box-shadow: -4px -4px 8px #27292D, 4px 4px 8px #070809;`;
const desc = styled.text`
position: absolute;
width: 327px;
height: 98px;
left: 150px;
top: 5976px;

font-family: 'Sulphur Point';
font-style: normal;
font-weight: 700;
font-size: 50px;
line-height: 50px;

color: #FFFFFF;`;
const divx = styled.div``;
const formx = styled.input`
position: absolute;
width: 327px;
height: 98px;
left: 150px;
top: 5976px
// left: 9.92%;
// right: 64.88%;
// top: 88.02%;
// bottom: 11.24%;
// color:white; 
// background: #1B1D20;
box-shadow: inset -4px -4px 8px #27292D, inset 4px 4px 8px #070809;
border-radius: 10px;`;
const MainC = styled.div`
top:-800px`;
const Map = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)');
const coordinates = {lat:28.7041,lng:77.1025};

  return (
    <MainC>
    
    <AboutSection>
    <desc style={{"fontFamily": 'Sulphur Point',
    "fontStyle": "normal",
    "fontWeight": "700",
    "fontSize": "50px",
    "color":"white",
    "top": "199px",
    "position": "absolute",
"width": "327px",
"height": "90px",
"left": "150px",
// "top": "5976px",

    "lineHeight": "50px"}}> Find a station near you
     
    </desc>
    <divx style={{"position": "absolute",      "width": "381px",      "height": "50px",      "left": "150px",      "top": "140px",      
    "fontFamily": 'Sulphur Point',      "fontStyle": "normal",      "fontWeight": "300",      "fontSize": "22px",      "lineHeight": "22px",      
    "color": "#EEEEEE"}} >
    We have set more than 200 devices in Delhi and Bangalore.
    </divx>
    <formx style={{"position": "absolute",
      // "left": "9.92%",
      // "right": "64.88%",
      // "top": "80.02%",
      // "bottom": "11.24%","
"left": "150px",
"top": "320px",
"width": "327px",
"height": "42px",
      
      "background": "#1B1D20",
      "boxShadow": "inset -4px -4px 8px #27292D, inset 4px 4px 8px #070809",
      "borderRadius": "10px"}}> 
      
      <input placeholder="Search" type="text" name="name" required style={{
        "left": "150px",
        "top": "320px",
        "width": "327px",
        "height": "42px",
      // bottom: 22.47%;
      
      'background': '#1B1D20',
      'boxShadow': 'inset -4px -4px 8px #27292D, inset 4px 4px 8px #070809',
      'borderRadius': '5px'}}/></formx>

      <Box display="flex">
      
     {/*<Autocomplete>*/}
     <div style={{"    position": "relative",
     "borderRadius": "theme.shape.borderRadius",
     "backgroundColor": "alpha(theme.palette.common.white, 0.15)",
     '&:hover': "{ backgroundColor: alpha(theme.palette.common.white, 0.25) }",
    "marginRight": "theme.spacing(2)",
    "marginLeft": "0",
    "width": '100%',
    
    
    
    }}>
    
 <InputBase placeholder='' style={{"color":"inherit"}}  />
     </div>
     
     
     {/*</Autocomplete>*/}
      
      
      </Box>
    
    </AboutSection>
    <MapAboutSection>
  
   <MapContainer />
    
    </MapAboutSection>
    </MainC>
   
  )
}

export default Map
// import React from 'react'
// import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
// import Geocode from "react-geocode";
// Geocode.setApiKey("AIzaSyAOd-j-X-i5AZ4e9pbpVpIogHQA6xtELsM");
// Geocode.enableDebug();
// class Map extends React.Component{
// constructor( props ){
//   super( props );
//   this.state = {
//    address: '',
//    city: '',
//    area: '',
//    state: '',
//    mapPosition: {
//     lat: this.props.center.lat,
//     lng: this.props.center.lng
//    },
//    markerPosition: {
//     lat: this.props.center.lat,
//     lng: this.props.center.lng
// }
//   }
//  }
// /**
//   * Get the current address from the default map position and set those values in the state
//   */
//  componentDidMount() {
//   Geocode.fromLatLng( this.state.mapPosition.lat , this.state.mapPosition.lng ).then(
//    response => {
//     const address = response.results[0].formatted_address,
//      addressArray =  response.results[0].address_components,
//      city = this.getCity( addressArray ),
//      area = this.getArea( addressArray ),
//      state = this.getState( addressArray );
  
//     console.log( 'city', city, area, state );
  
//     this.setState( {
//      address: ( address ) ? address : '',
//      area: ( area ) ? area : '',
//      city: ( city ) ? city : '',
//      state: ( state ) ? state : '',
//     } )
//    },
//    error => {
//     console.error(error);
//    }
//   );
//  };
// /**
//   * Component should only update ( meaning re-render ), when the user selects the address, or drags the pin
//   *
//   * @param nextProps
//   * @param nextState
//   * @return {boolean}
//   */
//  shouldComponentUpdate( nextProps, nextState ){
//   if (
//    this.state.markerPosition.lat !== this.props.center.lat ||
//    this.state.address !== nextState.address ||
//    this.state.city !== nextState.city ||
//    this.state.area !== nextState.area ||
//    this.state.state !== nextState.state
//   ) {
//    return true
//   } else if ( this.props.center.lat === nextProps.center.lat ){
//    return false
//   }
//  }
// /**
//   * Get the city and set the city input value to the one selected
//   *
//   * @param addressArray
//   * @return {string}
//   */
//  getCity = ( addressArray ) => {
//   let city = '';
//   for( let i = 0; i < addressArray.length; i++ ) {
//    if ( addressArray[ i ].types[0] && 'administrative_area_level_2' === addressArray[ i ].types[0] ) {
//     city = addressArray[ i ].long_name;
//     return city;
//    }
//   }
//  };
// /**
//   * Get the area and set the area input value to the one selected
//   *
//   * @param addressArray
//   * @return {string}
//   */
//  getArea = ( addressArray ) => {
//   let area = '';
//   for( let i = 0; i < addressArray.length; i++ ) {
//    if ( addressArray[ i ].types[0]  ) {
//     for ( let j = 0; j < addressArray[ i ].types.length; j++ ) {
//      if ( 'sublocality_level_1' === addressArray[ i ].types[j] || 'locality' === addressArray[ i ].types[j] ) {
//       area = addressArray[ i ].long_name;
//       return area;
//      }
//     }
//    }
//   }
//  };
// /**
//   * Get the address and set the address input value to the one selected
//   *
//   * @param addressArray
//   * @return {string}
//   */
//  getState = ( addressArray ) => {
//   let state = '';
//   for( let i = 0; i < addressArray.length; i++ ) {
//    for( let i = 0; i < addressArray.length; i++ ) {
//     if ( addressArray[ i ].types[0] && 'administrative_area_level_1' === addressArray[ i ].types[0] ) {
//      state = addressArray[ i ].long_name;
//      return state;
//     }
//    }
//   }
//  };
// /**
//   * And function for city,state and address input
//   * @param event
//   */
//  onChange = ( event ) => {
//   this.setState({ [event.target.name]: event.target.value });
//  };
// /**
//   * This Event triggers when the marker window is closed
//   *
//   * @param event
//   */
//  onInfoWindowClose = ( event ) => {
// };
// render(){
// const AsyncMap = withScriptjs(
//    withGoogleMap(
//     props => (
//      <GoogleMap google={this.props.google}
//       defaultZoom={this.props.zoom}
//       defaultCenter={{ lat: this.state.mapPosition.lat, lng: this.state.mapPosition.lng }}
//      >
// </GoogleMap>
// )
//    )
//   );
// let map;
//   if( this.props.center.lat !== undefined ) {
//    map = <div>
//      <div>
//       <div className="form-group">
//        <label htmlFor="">City</label>
//        <input type="text" name="city" className="form-control" onChange={ this.onChange } readOnly="readOnly" value={ this.state.city }/>
//       </div>
//       <div className="form-group">
//        <label htmlFor="">Area</label>
//        <input type="text" name="area" className="form-control" onChange={ this.onChange } readOnly="readOnly" value={ this.state.area }/>
//       </div>
//       <div className="form-group">
//        <label htmlFor="">State</label>
//        <input type="text" name="state" className="form-control" onChange={ this.onChange } readOnly="readOnly" value={ this.state.state }/>
//       </div>
//       <div className="form-group">
//        <label htmlFor="">Address</label>
//        <input type="text" name="address" className="form-control" onChange={ this.onChange } readOnly="readOnly" value={ this.state.address }/>
//       </div>
//      </div>
//      <AsyncMap
//       googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAOd-j-X-i5AZ4e9pbpVpIogHQA6xtELsM&libraries=places"
//       loadingElement={
//        <div style={{ height: `100%` }} />
//       }
//       containerElement={
//        <div style={{ height: this.props.height }} />
//       }
//       mapElement={
//        <div style={{ height: `100%` }} />
//       }
//      />
//     </div>
// } else {
//    map = <div style={{height: this.props.height}} />
//   }
//   return( map )
//  }
// }
// export default Map