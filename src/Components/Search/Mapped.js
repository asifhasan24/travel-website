import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';


class Mapped extends Component {
    render() {
        return (
            <div>
                <div className="map">
                    <Map google={this.props.google} zoom={14}>

                        <Marker onClick={this.onMarkerClick}
                            name={'Current location'} />

                        <InfoWindow onClose={this.onInfoWindowClose}>

                        </InfoWindow>
                    </Map>
                </div>

            </div>
        );
    };
};

export default GoogleApiWrapper({
    apiKey: ("AIzaSyDvOSGJ_E1vYeNx78eug46gy0GiR0qxfT0")
})(Mapped)