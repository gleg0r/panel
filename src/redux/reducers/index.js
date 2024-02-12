import { combineReducers } from 'redux';
import Auth from './Auth';
import Theme from './Theme';
import { users } from './Users';

const reducers = combineReducers({
    theme: Theme,
    auth: Auth,
    users: users,
});

export default reducers;