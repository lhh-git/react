import { CHANGE_COMMONNAV } from "./actionTypes"

export const getChangeCommonNavAction = (value) => ({
	type: CHANGE_COMMONNAV,
	value: value
})

export const getActionList = () => {
	return (dispatch) => {
		fetch('/api/commonNav.json')
			.then((res) => res.json())
			.then((res) => {
				dispatch(getChangeCommonNavAction(res.data))
			})
	}
}