import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as commonReducer } from '../components/CommonWrapper/'  //引入小遗书
import { reducer as commonNavReducer } from '../components/CommonWrapper/Nav/'
import { reducer as HomeReducer } from '../pages/Home'
import { reducer as DetailReducer } from '../pages/Detail'
import { reducer as ListReducer } from '../pages/List'

export default combineReducers({
	common: commonReducer,
	commonNav: commonNavReducer,
	home: HomeReducer,
	detail: DetailReducer,
	list : ListReducer,
	routing: routerReducer
})


