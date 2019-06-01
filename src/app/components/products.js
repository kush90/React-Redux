import React from 'react';

import List from '../containers/List';
import Cart from '../containers/Cart';
import Form from '../containers/Form';
require('../css/style.css');
class Product extends React.Component{

    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
            
            <div id="left">
            <h2 className="text-center">Proudcts</h2>
            <List></List>
            </div>
            <div id="right">
              <h2>Your carts Info:</h2>
             <Cart></Cart>
            </div>

            <div id="content">
                <h5 className="text-center">Add Products</h5>
               <Form></Form>  
            </div>

            </div>
        );
    }
}
export default Product;