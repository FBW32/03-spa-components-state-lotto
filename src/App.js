
import React from 'react';
import Numbers from './Numbers';

class App extends React.Component {
  state = {            /* in the state we store our data */
    number :  [],
    reset : false
  }

randomNumber = () => {  
let num = 0;
let myArr = []
  for (let i=0; i< 7; i++){
    if (i === 6){
      ( num= Math.ceil(Math.random() * 10 ))
    }else {
      ( num= Math.ceil(Math.random() * 50 ))
      while(myArr.includes(num)) {
        ( num= Math.ceil(Math.random() * 50 ))
      }
    } myArr.push(num)
  }  
this.setState({number : myArr})
 
} 



hideNumber=()=> {

  this.setState({number: [], reset: false})
}


  render(){
    return (
      <div>
        <h1>Lotto 6/49</h1>
        <h3>Generating lucky numbers</h3>
        {this.state.reset ? null : <div style={{display: "flex"}}> {this.state.number.map(num => {
         return (
 <Numbers number = {num} />
         )
       })} </div>}
       
        <button onClick={this.hideNumber}>Reset</button>
        <button onClick={this.randomNumber}>Show me lucky numbers</button>
      </div>
    )
  }


}


export default App;