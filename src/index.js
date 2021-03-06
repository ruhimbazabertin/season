import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './component/SeasonDisplay';
import Spinner   from './component/Spinner'

class App extends React.Component{
state = {lat:null, errorMessage:''}

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState ({lat: position.coords.latitude}),
            error    => this.setState = ({errorMessage: error.message})
            
        );
    }

    /*Define helper method here*/
    renderContent(){
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
            }
            if(!this.state.errorMessage && this.state.lat){
                /*instantiating season component here*/
            return  <SeasonDisplay lat={this.state.lat}/>
            }        
            return <Spinner message="Please accept  location request"/>;
    }
    /*react says you have to define render method*/
 render(){
   return (
        <div class="content">
        {this.renderContent()}
        </div>
   );
 }

}

ReactDOM.render(<App/>, document.getElementById('root'));
