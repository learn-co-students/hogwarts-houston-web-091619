import React from 'react'

export default class HogCard extends React.Component{

    state={
        showDetail:false
    }

    btnChange = ()=>{
        this.setState({
            showDetail:!this.state.showDetail
        })
    }

    render(){
        // const {name,specialty,greased,weight}
        const hogImageName = this.props.hog.name.split(' ').join('_').toLowerCase()
        const imageFile = require(`../hog-imgs/${hogImageName}.jpg`)
        return(
            <div>
                <img src = {imageFile} />
               <h2>Name: {this.props.hog.name}</h2>
               {this.state.showDetail ? <div class="description">
                    <h3>Specialty: {this.props.hog.specialty}</h3>
                    <h3>Weight: {this.props.hog.weight}</h3> </div> : " "}
               <button onClick={()=> this.btnChange()}>Details</button>
            </div>
        )
    }
}
            // <div>
            //     <img src = {imageFile} />
            //    <h2>Name: {this.props.hog.name}</h2>
            //    {this.state.showDetail ? <div class="description">
            //         <h3>Specialty: {this.props.hog.specialty}</h3>
            //         <h3>Weight: {this.props.hog.weight}</h3> </div> : " "}
            //    <button onClick={()=> this.btnChange()}>Details</button>
            // </div>

            // <div class="ui card">
            //     <div class="image">
            //         <img src={imageFile}></img>
            //     </div>
            //     <div>
            //         <a class="header">Name: {this.props.hog.name}</a>
            //         {this.state.showDetail ? <div class="description">
            //             <p>Specialty: {this.props.hog.specialty}</p>
            //             <p>Weight: {this.props.hog.weight}</p> </div> : " "}
            //     </div>
            //     <div class="extra content">
            //     <button onClick={()=> this.btnChange()}>Details</button>
            //     </div>
            // </div> 