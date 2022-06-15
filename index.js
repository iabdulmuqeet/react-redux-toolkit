const store = require('./app/store');
const { ordered, restocked } = require('./features/cake/cakeSlice').cakeActions;

console.log('Initial State => ', store.getState());
const unsubscribe = store.subscribe(() => {
	console.log('Updated State => ', store.getState());
});

store.dispatch(ordered());
store.dispatch(ordered());
store.dispatch(ordered());
store.dispatch(restocked(3));

unsubscribe();
