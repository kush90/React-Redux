export const add=(product)=>{
   return {
       type:"ADD_TO_CART",
       product:product
   }
}

export const remove=(id)=>{
    return {
        type:"DELETE_TO_CART",
        id:id
    }
}

export const increase=(id)=>{
    return{
        type:"INCREASE_QTY",
        id:id
    }
}

export const decrease=(id)=>{
    return{
        type:"DECREASE_QTY",
        id:id
    }
}

export const add_product = (product)=>{
    return {
        type:"ADD_PRODUCT",
        product:product
    }
}