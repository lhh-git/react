import { CHANGE_COMMONNAV } from "./actionTypes"

const defaultState = {
	listLeft: [],
	listMiddle: [],
	listRight: []
}

export default (state = defaultState, action) => {
	switch(action.type) {
		case CHANGE_COMMONNAV:
			return {
				listLeft: action.value.listLeft,
				listMiddle: action.value.listMiddle,
				listRight: action.value.listRight
			}
		default:
			return state
	}
}