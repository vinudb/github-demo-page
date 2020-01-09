let url = `https://api.github.com/users/supreetsingh247`;
// SET_PROFILE
export const setProfile = (profile) => ({
    type: 'SET_PROFILE',
    profile
});

//Fetch all profile info and store in redux store
export const startSetProfile = () => {
    return (dispatch) => {
        return fetch(url)
            .then(resp => resp.json())
            .then(data => {
                dispatch(setProfile(data));
            })
    }
}
