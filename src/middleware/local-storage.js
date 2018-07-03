export default store => next => action => {
    let result = next(action);

    try {
        let json = JSON.stringify(store.getState());
        localStorage.setItem('state', json);
    } catch (error) {
        console.log(error);
    }

    return result;
}