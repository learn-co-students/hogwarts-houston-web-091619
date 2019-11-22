import React from 'react'
import HogCards from './HogCards'

class HogList extends React.Component{
    render(){
        return(<div>
            {this.props.hogs.map(hog => <HogCards {...hog} /> )}
       
        </div>)
    }
}

export default HogList