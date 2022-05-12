
export const taskReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return [...state, action.payload]
        case "CHANGE_TASK_STATE":
            return state.filter((task) => task.title !== action.payload.title)

        case "DELETE_TASK":
            return state.filter((task) => task.title !== action.payload.title)
    }
}