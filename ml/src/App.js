import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './App.scss';

const Loc = ({ text }) => <div>{text}</div>;

class App extends Component {

  static defaultProps = {
    center: {
      lat: 32.0420589,
      lng: 34.9147659
    },
    zoom: 15
  };


  render() {

  function locs() {
    
  }

    return (
      <div className="App">
        <header className="App-header">
          MyLocations
        </header>
        <main className="App-main">
          Your Map
            <div id={'map'} style={{ height: '60vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAKTHm7M5ADSMkqnfNuoSqbzTmb5iwretQ' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Loc
            lat={32.040051}
            lng={34.908851}
            text="Tal Forsher's House"
          />
        </GoogleMapReact>
      </div>
        </main>
        <footer className="App-footer">
          <span onClick={locs}><span role="img" aria-label="earth">🌏</span>Locations</span>
          <span><span role="img" aria-label="notebook">📔</span>Categories</span>
        </footer>
      </div>
    );
  }
}

export default App;
