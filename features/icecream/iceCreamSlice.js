const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
	noOfIceCreams: 20,
};

const iceCreamSlice = createSlice({
	name: 'iceCream',
	initialState,
	reducers: {
		ordered: state => {
			state.noOfIceCreams--;
		},
		restocked: (state, action) => {
			state.noOfIceCreams += action.payload;
		},
	},
	extraReducers: {
		['cake/ordered']: state => {
			state.noOfIceCreams--;
		},
	},
});

module.exports = iceCreamSlice.reducer;
module.exports.iceCreamActions = iceCreamSlice.actions;
