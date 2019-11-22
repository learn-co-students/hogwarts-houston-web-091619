import React, { Component } from 'react';
import '../App.css';
import HogList from './HogList'
import Nav from './Nav'
import hogs from '../porkers_data';
import 'semantic-ui-css/semantic.min.css'

class App extends Component {
  constructor(){
    super()
    this.state={
        hogs:hogs,
        currentHogFilter:hogs,
        filterType:false,
        sortByName:false,
        sortByWeight:false
    }
  }
  // {this.props.hogs.map(hogData => <HogCard hog={hogData}/>)}
  filterHogBy = (filter) =>{
    if(filter === true){
      let greasedHog = []

      hogs.map(hog => {
        if(hog.greased){
          greasedHog.push(hog)
        }
      })

      this.setState({
        currentHogFilter: greasedHog
      })
    }else{
      this.setState({
        currentHogFilter: this.state.hogs
      })
    }
  }

  changeFilterType = () =>{
    ////or we could use this
    // this.setState({
    //   filterType:!this.state.filterType
    // },()=>this.filterHogBy())
    this.setState({
      filterType:!this.state.filterType
    })
    this.filterHogBy(!this.state.filterType)
  }

  sortHogByName = (filter) =>{
    if(filter === true){
      let hogByName = []
      hogByName = this.state.currentHogFilter.sort((a, b) => a.name.localeCompare(b.name))

      this.setState({
        currentHogFilter: hogByName
      })
    }else{
      console.log("Changing back to start arr")
      console.log(this.state.hogs)
      this.setState({
        currentHogFilter: hogs
      })
    }
  }

  changeSortName = () =>{
    this.setState({
      sortByName:!this.state.sortByName
    })
    console.log(!this.state.sortByName)
    this.sortHogByName(!this.state.sortByName)
  }

  render() {
    return (
      <div className="App">
          < Nav changeFilterType={this.changeFilterType}
                filterType = {this.state.filterType}/>
          <HogList 
            hogs={this.state.currentHogFilter}
            changeSortName={this.changeSortName}
            sortByName={this.state.sortByName}
            changeSortWeight={this.changeSortWeight}
            sortByWeight={this.state.sortByWeight}/>
      </div>
    )
  }

  sortHogByWeight = (filter) =>{
    if(filter === true){
      let hogByWeight = []
      hogByWeight = this.state.currentHogFilter.sort(function(a, b){
        return a.weight - b.weight;
      });

      this.setState({
        currentHogFilter: hogByWeight
      })
    }else{
      this.setState({
        currentHogFilter: hogs
      })
    }
  }

  changeSortWeight = () =>{
    this.setState({
      sortByWeight:!this.state.sortByWeight
    })
    this.sortHogByWeight(!this.state.sortByWeight)
  }
}

export default App;
