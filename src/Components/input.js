import React from "react";


class Input extends React.Component{

    state ={
        name: '',
        id:''
    }

handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    }

    render(){
        return(
            <div  onSubmit={this.handleSubmit} >

                <input type="input" id="id"></input>
                <input type="input" id="Nom"></input>
                <button type="btn" >add  </button>

            </div>
        )

    }
}
export default Input 