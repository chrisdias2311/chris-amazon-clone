export const initialState={
    basket: [],
};

//Selector
export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action)=>{
    console.log(action)
    switch(action.type){
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket: [...state.basket, action.item],
            };

        case 'REMOVE_FROM_BASKET':
            // return{                            //Dp not use this method as it will delete allthe item from thebasket with that particular id, irrespective of how many items are actually present in the basket 
            //     ...state,
            //     basket: state.basket.filter(item=>item.id !== action.id)
            // }
            
            const index = state.basket.findIndex(             //find the index (int the basket) at which our product is 
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];

            if(index>=0){                                     // if there exists index
                newBasket.splice(index, 1);                   // make a newBasket such that it doen't have the element with index
            }else{
                console.log(`Can't remove product (id: ${action.id}) as its not in basket!`)
            }

            return{
                ...state,
                basket: newBasket
            }
                
        default: 
            return state;    
    }
}

export default reducer ;