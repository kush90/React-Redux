import React from 'react';
import {connect} from 'react-redux';

import {add_product} from '../actions/carts';

class Form extends React.Component{
    constructor(props){
        super(props);
    }
    handleForm =(e) =>{
        let i=5;
        i++;
        e.preventDefault();
        let product={
            id:i,
            name:this.refs.name.value,
            description:this.refs.description.value,
            price:this.refs.price.value
        }
        this.props.add_product(product);
        this.refs.name.value="";
        this.refs.description.value="";
        this.refs.price.value="";
        
    }
    render(){
        return (
            <form onSubmit={this.handleForm}>
                    <label>Name</label>
                    <input type="text"  placeholder="Name ..." ref="name" required/>

                    <label>Description</label>
                    <input type="text"  placeholder="Description ..." ref="description" required/>

                    <label>Price</label>
                    <input type="text"  placeholder="Price ..." ref="price" required/>

                    <input type="submit" value="Submit"/>
                </form>
        );
    }
}


const mapDispatchToProps = (dispatch)=>{
    return {
        add_product:(product)=>{
            dispatch(add_product(product))
        }
    }
}
export default connect(null,mapDispatchToProps)(Form);