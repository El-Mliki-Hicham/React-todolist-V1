import React from "react";
import Table from "./Components/table";
import "bootstrap/dist/css/bootstrap.min.css"
class App extends React.Component{

  //State :data
  state={
    data:[
      {id:1,Nom:"hicham",Age:21},
      {id:2,Nom:'nada',Age:21}
    ]
  }
//Delete function 
  delete=(id)=>{
    console.log(id)
  }

  render(){
    return (

      <div>
      {/* send Data and Delete function to Table class */}
        <Table Data={this.state.data} delete={this.delete} />
      </div>
    )
  }
}


export default App;
