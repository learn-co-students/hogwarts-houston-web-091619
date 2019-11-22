import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogFilter  from './HogFilter'
import HogList from './HogList'

class App extends Component {

  constructor(){
    super()
    // hogs.map(hog => {return {...hog,show:true} })
    hogs.map(hog => hog.show= true )


    this.state={
      hogs: hogs, //hogs
      displayHogs: hogs
    }
  }

  filterHogs = () => {
    let h = this.state.hogs.filter(hog => hog.greased === true)

    this.setState({
      displayHogs: h
    })
  }

  showAll = () => {
    this.setState({
      displayHogs: this.state.hogs
    })
  }

  sortHogsbyName = () => {
    // debugger
    let h = [...this.state.displayHogs]
    h.sort((a,b) => a.name.localeCompare(b.name) )
    // let h = this.state.displayHogs.sort((a,b) => a.name > b.name ? 1 : -1 )

    this.setState({
      displayHogs: h
    })
  }

  sortByWeight = () => {
    let h = [...this.state.displayHogs]
    h.sort((a,b) => a.weight - b.weight )
    
    this.setState({
      displayHogs: h
    })
  }


  render() {
    return (
      <div className="App">
          < Nav />
          <HogFilter
          filterHogs={this.filterHogs} 
          showAll={this.showAll}
          sortHogsbyName={this.sortHogsbyName}
          sortByWeight={this.sortByWeight} />
          <HogList hogs={this.state.displayHogs} />


      </div>
    )
  }
}

export default App;
