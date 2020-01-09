const profile = {};

export default (state = profile, action) => {
    switch (action.type) {
        case 'SET_PROFILE':
            return action.profile;
        default:
            return state;
    }
}