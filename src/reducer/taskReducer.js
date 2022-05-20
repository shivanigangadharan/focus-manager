
export const taskReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return [...state, action.payload]
        case "CHANGE_TASK_STATE":
            //state : [
            //     {
            //         title: "task one",
            //         _id: _783592,
            //         status: false
            //     }
            // ]
            const ele = state.find((e) => e._id === action.payload._id);
            const taskIndex = state.indexOf(ele);
            console.log(taskIndex);
            if (action.payload.status === true) {
                return [...state, state[taskIndex] = { ...state[taskIndex], status: false }]
            } else {
                return [...state, state[taskIndex] = { ...state[taskIndex], status: true }]
            }
        case "DELETE_TASK":
            return state.filter((task) => task._id !== action.payload._id)
    }
}