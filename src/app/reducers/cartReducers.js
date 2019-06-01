const cartReducer = (state=[],action) => {
    const carts=[...state];
    switch(action.type){
        
        case "ADD_TO_CART":
        let added_product = action.product;
        added_product.qty=1;
        added_product.total= added_product.price*added_product.qty;
        let filtered = state.filter((cart) => {
            return cart.id == added_product.id;
          });
        if (state.length==0 || filtered.length==0){
           
       
         state= [
            ...state,
            Object.assign({},added_product )
          ];
        }
        else{
            carts.forEach(cart=>{
                if(cart.id==added_product.id){
                    cart.qty+=1;
                    cart.total=cart.price* cart.qty;
                }
            });

           state=carts;
           
        }
        break;

        case "DELETE_TO_CART":
        let newState=carts.filter(cart=>{return cart.id!==action.id});
        state = newState;
        break;

        case "INCREASE_QTY":
        carts.forEach(cart=>{
            if(cart.id==action.id){
                cart.qty+=1;
                cart.total=cart.price* cart.qty;
            }
        });
        state=carts;
        break;

        case "DECREASE_QTY":
       
        carts.forEach(cart=>{
            if(cart.id==action.id){
                cart.qty-=1;
                cart.total=cart.price* cart.qty;
            }
        });
        state=carts; 
       

    }
   console.log(state);
    return state;
    
}
export default cartReducer;