import React, { Component } from 'react';
import axios from 'axios';
import DisplayMusic from './DisplayMusic/DisplayMusic';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      music: []
      }
  }

  componentDidMount(){
    this.getAllSongs();
  }

  getAllSongs = async() => {
    let response= await axios.get('http://127.0.0.1:8000/music/');
    console.log("Right after api call", response.music)
    this.setState({
      music: response.music
    })
    console.log('State Music Variable', this.state.music);
    console.log(response);
  }


  render() { 
    console.log(this.state.music)
    if(this.state.music.length == 0){
      return(<div></div>)
    }
    else{
       return ( 
      <div>
        <h1>Music Library</h1>
        <h1> {this.state.music} </h1>
        <DisplayMusic song={this.state.music} />
      </div>
     );
    }
   
  }
}
 
export default App;

