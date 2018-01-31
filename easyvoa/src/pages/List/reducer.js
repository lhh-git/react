import { CHANGE_LIST } from './actionTypes'

const defaultState = {
	titleList : [],
	contentList: []
}

export default (state = defaultState, action) => {
	switch(action.type) {
		case CHANGE_LIST:
			return {
				titleList: action.value.titleList,
				contentList: action.value.contentList
			}
		default:
			return state
	}
}