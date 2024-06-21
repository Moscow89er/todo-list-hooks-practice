import { Middleware } from 'redux';

const logger: Middleware = storeAPI => next => action => {
    console.log('Dispatching action:', action);
    const result = next(action);
    console.log('Next state:', storeAPI.getState());
    return result;
}

export default logger;