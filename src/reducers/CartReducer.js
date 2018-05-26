import { CART_CHANGED, CART_DELETE, SEARCH } from '../actions/types';

let index;
const INITIAL_STATE = {
	items: [],
	search: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CART_CHANGED:
			return { ...state, items: [...state.items, action.payload] };
		case CART_DELETE:
			index = state.items.indexOf(action.payload);
			state.items.splice(index, 1);
			return { ...state, items: [...state.items] };
		case SEARCH:
			return { ...state, search: !state.search };
		default:
			return state;
	}
};
