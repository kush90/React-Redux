let initialState = [
    {id:1,name:"Acer",description:"core i3",price:1000},
    {id:2,name:"Dell",description:"core i5",price:2000},
    {id:3,name:"Mac",description:"core i7",price:5000},
    {id:4,name:"LENOVO",description:"core i3",price:1500},
]
const productReducer =(state=initialState,action) =>{

    if(action.type=="ADD_PRODUCT"){

        state= [
            ...state,
            Object.assign({},action.product )
        ]
    }

    return state;

}

export default productReducer;