import React from 'react'
import {HogDetails} from './HogDetails'
// import cherub from '../hog-imgs/cherub.jpg'

class HogCard extends React.Component{
    constructor(){
        super()
        this.state={
            displayDetails: false
        }
    }

    changeDisplay = () => {
        this.setState({
            displayDetails: !this.state.displayDetails
        })
    }
 
    render(){
        const {name} = this.props
        // const name = this.props.name
        const imgSrc = name.toLowerCase().replace(/\s+/g,"_")
        console.log(imgSrc)
        return(
        <div onClick={this.changeDisplay}>
            
            <h3>{name}</h3>

            <img src={require(`../hog-imgs/${imgSrc}.jpg`)} />
            {/* <img src={cherub} /> */}

            {this.state.displayDetails
            ? <HogDetails {...this.props} />
            : null
            }
            
        </div>)
    }
}

export default HogCard