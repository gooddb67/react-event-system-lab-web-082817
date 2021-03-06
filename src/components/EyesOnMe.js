import React from 'react';

export default class EyesOnMe extends React.Component{

  buttonFocus = () => {
    console.log('Good!')
  };

  buttonBlur = () => {
    console.log('Hey! Eyes on me!')
  };

  render(){
    return (
      <button onFocus={this.buttonFocus} onBlur={this.buttonBlur}></button>
    );
  }
}
