
const defaultState = {

    login:"未登录",

    size:""
}

//2.通过reducer提供数据源，reducer是一个纯函数
//参数1：表示提供的数据源，通过state定义，需要给定一个初始值
//参数2：表示要执行的动作，通过dispatch(action)触发，action被传递到reducer内部来处理
//action中必须有一个type字段
const reducer = (state = defaultState, action)=> {

    switch(action.type) {
        case "REDUCE": 
        // return Object.assign({}, state, {
        //     visibilityFilter: action.data
        //   })
            state.login=action.data
            state.login=state.login
            console.log(state.login)
            break;
        case "ADD": 
           
            break;
        case "ADD_STU": 
            
            break;
        case "DEL_STU": 
            
            break;
        case "INSERT_STU": 
           
            break;
        case "CHANGE": 
            
        case "mysizeS": 
           state.size = "S"

            break;
        case "mysizeM": 
            state.size = "M"
             break;
        case "mysizeL": 
             state.size = "L"
              break;
        case "mysizeXL": 
            state.size = "XL"
             break;

            default: break;
    }
    
    return state; //必须返回state
}

export default reducer;