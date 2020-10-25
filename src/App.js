import React from 'react';
import './App.css';
import AppTime from './components/AppTime';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      nykvarn_clicked: false,
      stockholm_clicked: false,
      kristinehamn_clicked: false,
    };


    this.handelclick_nykvarn = this.handelclick_nykvarn.bind(this);
    this.handelclick_stockholm = this.handelclick_stockholm.bind(this);
    this.handelclick_kristinehamn = this.handelclick_kristinehamn.bind(this);
    this.handelclick_go_back = this.handelclick_go_back.bind(this);
  }


  handelclick_nykvarn(event){
    this.setState({
        stockholm_clicked: false,
        kristinehamn_clicked: false, 
        nykvarn_clicked: true,       
      })
      event.preventDefault();

  }

  handelclick_stockholm(event){
    this.setState({
      nykvarn_clicked: false,
      kristinehamn_clicked: false,
      stockholm_clicked: true,        
    })
    event.preventDefault();
  }

  handelclick_kristinehamn(event){
    this.setState({
      nykvarn_clicked: false,
      stockholm_clicked: false,
      kristinehamn_clicked: true,        
    })
    event.preventDefault();
  }

  handelclick_go_back(event){
    this.setState({
      nykvarn_clicked: false,
      stockholm_clicked: false,
      kristinehamn_clicked: false,        
    })
    event.preventDefault();
  }

  render(){

    const {nykvarn_clicked, stockholm_clicked, kristinehamn_clicked} = this.state;

    if(nykvarn_clicked === true){
      return (
        <div className="App">
          <AppTime city="nykvarn" country="sweden" />
          <button className="tillbaka_btn" onClick={this.handelclick_go_back} >Tillbaka</button>
        </div>
      );
    }

    if(stockholm_clicked === true){
      return (
        <div className="App">
          <AppTime city="stockholm" country="sweden" />
          <button className="tillbaka_btn" onClick={this.handelclick_go_back} >Tillbaka</button>
        </div>
      );
    }

    if(kristinehamn_clicked === true){
      return (
        <div className="App">
          <AppTime city="kristinehamn" country="sweden" />
          <button className="tillbaka_btn" onClick={this.handelclick_go_back} >Tillbaka</button>
        </div>
      );
    }

    return(
      <div className="main_menu">
        <button onClick={this.handelclick_nykvarn} >Nykvarn</button>
        <button onClick={this.handelclick_stockholm}>Stockholm</button>
        <button onClick={this.handelclick_kristinehamn}>Kristinehamn</button>
      </div>
    );
  }
  
}

export default App;
