import React from "react";
import {connect} from "react-redux";

import {add} from '../actions/carts';

class List extends React.Component{

    constructor(props){
        super(props);
    }
    addToCart = (product) => {
        this.props.add(product);
    }
    
    render(){
        const lists = this.props.products.map((product)=>
            <div id="box" key={product.id}>
                <p>{product.name}</p>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <button onClick={()=>this.addToCart(product)}>Add To Cart</button>  
            </div>  
        );

        return(
            <div>
            {lists}
            </div>
        );
    }

}

const mapStateToProps=(state)=>{

    return {
        products:state.products
    }
}
const mapDispatchToprops=(dispatch)=>{
    return {
        add:(product)=>{
            dispatch(add(product))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToprops)(List);
