import React from "react";
import Table from "./Components/table";
import "bootstrap/dist/css/bootstrap.min.css"
class App extends React.Component{

  state={
    data:[
      {id:1,Nom:"hicham",Age:21},
      {id:2,Nom:'nada',Age:21}
    ]
  }
  render(){
    return (

      <div>
       
        <Table Data={this.state.data} />
      </div>
    )
  }
}


export default App;
