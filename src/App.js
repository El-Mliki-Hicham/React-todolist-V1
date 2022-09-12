import React from "react";
import Table from "./Components/table";
import Input from "./Components/input";
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
    let _data  = this.state.data;
    let find_id = _data.findIndex(value=>value.id ===id)
    _data.splice(find_id,1)
    this.setState({data :_data})
  }
  addItems=(value)=>{
    value.id = Math.random();
    let _data = this.state.data;
    _data.push(value);
    this.setState({data:_data})
    
  }

  render(){
    return (

      <div>
      {/* send Data and Delete function to Table class */}
        <Table Data={this.state.data} delete={this.delete} />
     
        <Input addItems={this.addItems} />
      </div>  
    )
  }
}


export default App;
