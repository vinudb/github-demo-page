let url = `https://api.github.com/users/supreetsingh247/repos`;
// SET_REPOS
export const setRepos = (repos) => ({
    type: 'SET_REPOS',
    repos
});

//Fetch all repo info and store in redux store
export const startSetRepos = () => {
    return (dispatch) => {
        return fetch(url)
            .then(resp => resp.json())
            .then(data => {
                dispatch(setRepos(data));
            })
    }
}
