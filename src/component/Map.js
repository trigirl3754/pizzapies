import React, { Component } from 'react';
import '../App.css';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap(props =>
  <GoogleMap
    defaultZoom={8} 
    zoom = {props.zoom}
    defaultCenter={{ lat: 41.821975, lng: -88.088488 }} 
    center = {{
      lat: parseFloat(props.center.lat),
      lng: parseFloat(props.center.lng)
    }}    
    >
    
    {props.markers && props.markers.filter(marker => marker.isVisible).map((marker,idx,arr) => {
    const venueInfo = props.venues.find(venue => venue.id = marker.id);
    
    return(

    <Marker 
    
    key = {idx} 
    position={{ lat: marker.lat, lng: marker.lng }}
    onClick = {() => props.handleMarkerClick(marker)}
    animation = {arr.length === 1 || marker.isOpen
    ? window.google.maps.Animation.BOUNCE : window.google.maps.Animation.DROP}
    >

    {marker.isOpen && venueInfo.bestPhoto && (
    <InfoWindow>
      <React.Fragment>
        <img src = {`${venueInfo.bestPhoto.prefix}200x200${venueInfo.bestPhoto.suffix}`} alt = {""}/>
    <p className = "info-name">{venueInfo.name}</p>
    </React.Fragment>
    </InfoWindow>
    )}
    </Marker>
    );
    })}

  </GoogleMap>
))
  
export default class Map extends Component {
    render () {
        return (
<MyMapComponent
  {...this.props}
  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCB76fbSiinj4O4gu6U2DTI_lydhwBwpG8"
  loadingElement={<div className='myMap' />}
  containerElement={<div className='myMap-container' />}
  mapElement={<div className='myMap' />}
/>
    );
}
}







  
  
