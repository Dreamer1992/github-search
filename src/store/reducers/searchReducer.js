const SET_PROJECTS = 'SET_PROJECTS'

let initialState = {
    projects: []
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROJECTS:
            return {...state, projects: [...action.projects]}
        default:
            return state
    }
}

export const setProjects = (projects) => ({type: SET_PROJECTS, projects})

export default searchReducer