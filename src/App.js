import React, {Component}from 'react';
import axios from 'axios';

class App extends Component{
  state = {
    breeds : []
  }



  componentDidMount() {
    console.log('coming')
    axios.get('http://localhost:3000/breeds').then(
      
      res => {
        console.log(res)
          this.setBreeds(res.data);
          console.log(this.breeds)
      },
      err => {
          console.log(err)
      }
  )
  }

  

  render(){
    return (
      <div><h1>Hello </h1></div>
     
    )
  }
}

export default App;