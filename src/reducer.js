export const initialState ={
    basket:[],
};

/*export const getBasketTotal = (basket) =>
basket.reducer((amount,item) =>item.price + amount , 0)*/
   export const getBasketTotal = (basket) => {
    const total = basket.reduce((amount, item) => item.price + amount, 0);
    return total;
  };

export const reducer = (state,action)=>{
console.log(action);
switch(action.type){
    case 'ADD_TO_BASKET':
        return{
            ...state,
            basket:[...state.basket,action.item],
        };


     case "REMOVE_FROM_BASKET": 
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
          

        let newBasket = [...state.basket];

        if (index >=0){
            newBasket.splice(index,1);

        } else{
            console.worn(
                `cant remove product (id: ${action.id}) as its not in baster!`
            )
        }
        return{
            ...state,
            basket:newBasket
        
        }

    default:
        return state;
    }
};
export default reducer;

/*export const initialState = {
  basket: [],
};

/*export const getBasketTotal = (basket) =>
  basket.reducer((amount, item) => item.price + amount, 0)*/

/*export const getBasketTotal = (basket) => {
    const total = basket.reduce((amount, item) => item.price + amount, 0);
    return total;
  };
  
  export const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case 'ADD_TO_BASKET':
        return {
          ...state,
          basket: [...state.basket, action.item],
        };
  
      case 'REMOVE_FROM_BASKET': {
        const newBasket = [...state.basket].filter((basketItem) => basketItem.id !== action.id);
        return {
          ...state,
          basket: newBasket,
        };
      }
  
      default:
        return state;
    }
  };
  
  export default reducer;*/