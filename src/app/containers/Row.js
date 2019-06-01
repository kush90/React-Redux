import React from 'react';
import {connect} from 'react-redux';
import {remove,increase,decrease} from '../actions/carts';

class Row extends React.Component{
    constructor(props){
        super(props);
    }
    remove =()=>{
        this.props.remove(this.props.cart.id);
    }
    increaseQty =()=>{
        this.props.increase(this.props.cart.id);
    }
    decreaseQty =()=>{
        this.props.decrease(this.props.cart.id);
    }
    render(){
        return (
            <tr>
                <td>{this.props.cart.name}</td>
                <td>{this.props.cart.description}</td>
                <td>{this.props.cart.price}</td>
                <td>{this.props.cart.qty}</td>
                <td>{this.props.cart.total}</td>
                <td><button onClick={this.increaseQty}>+</button></td>
                <td><button onClick={this.decreaseQty}>-</button></td>
                <td><button onClick={this.remove}>X</button></td>
            </tr>
        );
    }
}
const mapStateToProps=(state)=>{
    return {
     state
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        remove:(id)=>{
            dispatch(remove(id))
        },
        increase:(id)=>{
            dispatch(increase(id))
        },
        decrease:(id)=>{
            dispatch(decrease(id))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Row);