export function reducerFunction(state,action){
  switch (action.type) {



    case "CLEAR":
      return {Price:100,
        Search:null,
        color:"",
        Category :"",
        IdealFor:"",
        Discounts:"",
        Ratings:""
      };


      case "SORT_BY":
          return{...state,sortBy:action.payload} 

    // ***********    ByColor         ************************
      case "COLOR":
          return{...state,color:action.payload} 


    // ***********    BySearch        ************************


          case "SEARCH":
            return{...state,Search:action.payload}


    // ***********    ByPrice        ************************


            case "PRICE" :
              return {...state,Price: action.price_value}


    // ***********    ByCategory        ************************



              case "CATEGORY":

          return{...state,Category:action.payload}


    // ***********    ByIdealfor or  gender        ************************


          case "MEN":
            return {...state , IdealFor :{  ...state["IdealFor"], Men : !state.IdealFor.Men }}
            case "WOMEN":
            return {...state , IdealFor :{  ...state["IdealFor"], Women : !state.IdealFor.Women }}


    // ***********    ByDiscounts         ************************


            case "TEN":
            return {...state , Discounts :{  ...state["Discounts"], Ten : !state.Discounts.Ten }}
            case "TWENTY":
            return {...state , Discounts :{  ...state["Discounts"], Twenty: !state.Discounts.Twenty}}
            case "THIRTY":
            return {...state , Discounts :{  ...state["Discounts"], Thirty : !state.Discounts.Thirty }}
            case "FOURTY":
            return {...state , Discounts :{  ...state["Discounts"], Fourty : !state.Discounts.Fourty }}
            case "FIFTY":
            return {...state , Discounts :{  ...state["Discounts"], Fifty : !state.Discounts.Fifty }}



    // ***********    ByRatings       ************************


    case "ONE":
      return {...state , Ratings :{  ...state["Ratings"], One : !state.Ratings.One }}
      case "TWO":
      return {...state , Ratings :{  ...state["Ratings"], Two: !state.Ratings.Two}}
      case "THREE":
      return {...state , Ratings :{  ...state["Ratings"], Three : !state.Ratings.Three }}
      case "FOUR":
      return {...state , Ratings :{  ...state["Ratings"], Four : !state.Ratings.Four }}
      case "FIVE":
      return {...state , Ratings :{  ...state["Ratings"], Five : !state.Ratings.Five }}
           

      
  
      default:
        return state
  }
}






