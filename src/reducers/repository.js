const repos = [];

export default (state = repos, action) => {
    switch (action.type) {
        case 'SET_REPOS':
            return action.repos;
        default:
            return state;
    }
}