import React from 'react'
import HogCard from './HogCard'
// import porkers_data from '../porkers_data'
export default class HogList extends React.Component{

    render(){
        return(
            <div>
                <h4 >Only one sort button can be on at a moment</h4>
                {/* <button onClick={()=>{this.props.changeSortName()}}>Sort By Name</button>
			    <button onClick={()=>{this.props.changeSortWeight()}}>Sort By Weight</button> */}
                <button onClick={()=>{this.props.changeSortName()}}>{this.props.sortByName? "Sort By Name On":"Sort By Name Off"}</button>
			    <button onClick={()=>{this.props.changeSortWeight()}}>{this.props.sortByWeight? "Sort By Weight On":"Sort By Weight Off"}</button>
                {this.props.hogs.map(hogData => <HogCard hog={hogData}/>)}
            </div>
        )
    }
}