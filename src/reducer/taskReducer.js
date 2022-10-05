const initialData = {
    tasks: []
}

function taskReducer(state = initialData, action) {
    switch (action.type){
        // Actions
        case "ADD_TASK" : return{
            ...state,
            tasks: [...state.tasks, action.payload]
        }
        case "DELETE_TASK" : return{
            ...state,
            tasks: state.tasks.filter((delTask)=> delTask !== action.payload)
        }
        case "EDIT_TASK" : return{
            ...state,
            tasks: state.tasks.map((updateTask)=>{
                if(updateTask === action.payload.olditem)
                updateTask = action.payload.newitem

                return updateTask
            })
        }
        default : {
            return state
        }
    }
}

export default taskReducer