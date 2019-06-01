import React from 'react';
import {connect} from "react-redux";

import Row from "./Row";

class Cart extends React.Component{

    constructor(props){
        super(props);
    }
    render(){
        return(
            <table>
                 <thead>
                 <tr>
                     <td>Name</td>
                     <td>Description</td>
                     <td>Price</td>
                     <td>Quantity</td>
                     <td>Total</td>
                     <td colSpan="3">Action</td>
                 </tr>
                 </thead>
                 <tbody>
                
                    {this.props.carts.map((cart,i)=><Row cart={cart} key={i}></Row>)}
                 
                 </tbody>
                 <tfoot>
                     <tr>
                         <td>Total Price:</td>
                         <td>{this.props.totals}</td>
                     </tr>
                 </tfoot>
             </table>
        );
    }
        
}
const mapStateToProps=(state)=>{
    var total=0;
    for(let i=0;i<state.carts.length;i++){
            total=total+state.carts[i].total;
    }
    return {
        carts:state.carts,
        totals:total
    }
}
export default connect(mapStateToProps)(Cart);