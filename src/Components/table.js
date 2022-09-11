import React ,{ Fragment } from "react";

class Table extends React.Component{
    render(){
        const Value = this.props.Data ;
        
        const Show_Value = Value.map(value => {
            
            return(
            <Fragment>
                <tr >
                   <td >{value.id}</td>
                   <td>{value.Nom}</td>
                   <td>{value.Age}</td>
                   <td><button type="button" className="btn btn-dark">X</button></td>
                </tr>
               
            </Fragment>
            )
        }
            )
 
            return(
                <div >

                    <table className="table">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nom</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                            {Show_Value}
                            </tbody>
                       </table>
                 
                </div>
            )
}
}

export default Table;