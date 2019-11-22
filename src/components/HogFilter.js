import React from 'react'

class HogFilter extends React.Component{
    render(){
        return(<div>
                <button onClick={this.props.filterHogs}>Filter Greased</button>
                <button onClick={this.props.sortHogsbyName}>Sort by Name</button>
                <button onClick={this.props.sortByWeight}>Sort by Weight</button>
                <button onClick={this.props.showAll}>Show ALL</button>

        </div>)
    }
}

export default HogFilter 