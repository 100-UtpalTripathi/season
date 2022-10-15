import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import SeasonDisplay from './SeasonDisplay'
import Loader from './Loader'

class App extends React.Component {
  // constructor(props)
  // {
  //   super(props);
  //   this.state = { lati : null, errorMessage : "" }
  // }
  //Babble will convert this statement to upper defined constructor
  state = { lati : null, errorMessage : "" }
  componentDidMount()
  {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({lati : position.coords.latitude}),
      (err) => this.setState({errorMessage : err.message})
    );
  }
  render() {
    if(this.state.lati && !this.state.errorMessage)
      return (<SeasonDisplay lat = {this.state.lati}/>)
    else if(!this.state.lati && this.state.errorMessage)
      return(<h2>Error : {this.state.errorMessage}</h2>)
    else
      return(<Loader message = "Please Accept Request!"/>)
  }
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
)