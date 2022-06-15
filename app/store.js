const { configureStore } = require('@reduxjs/toolkit');
const { createLogger } = require('redux-logger');
const cakeReducer = require('../features/cake/cakeSlice');

const logger = createLogger();

const store = configureStore({
	reducer: {
		cake: cakeReducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

module.exports = store;
