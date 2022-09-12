import React from "react";


class Input extends React.Component{

    state ={
       
        Nom: '',
        Age:''
    }

handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItems(this.state)
    this.setState({
        Nom:'',
        Age:''
    })
        }

    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
        }

    render(){
        return(
            <div onSubmit={this.handleSubmit} >
<form>
                <input type="text " id="Nom" onChange={this.handleChange}    value={this.state.Nom}></input>
                <input type="numbre" id="Age" onChange={this.handleChange} value={this.state.Age}></input>
                <input type="submit"></input>
                    </form>
            </div>
        )

    }
}
export default Input 