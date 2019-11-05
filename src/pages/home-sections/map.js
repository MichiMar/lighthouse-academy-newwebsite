import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AddressAcademy = ({ coordenadas }) => <div>{coordenadas}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 40.25,
      lng: -111.64
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "75vh", width: "50%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBPD7a2FYQYcgZRfnCvBhm4kK_0r0a70ZY" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AddressAcademy
            lat={40.250233}
            lng={-111.641689}
            text="Lighthouse Montessori Academy, LLC"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
