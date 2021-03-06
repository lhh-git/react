import React, { Component } from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import store from '../store/'
import { View as CommonWrapper } from '../components/CommonWrapper/'
import { View as Home } from '../pages/Home/'
import { View as Detail } from '../pages/Detail/'
import { View as List } from '../pages/List/'
import 'whatwg-fetch'
import './reset.css'
import './style.css'
import 'antd/dist/antd.css'
import '../static/iconfont/iconfont.css'

const history = syncHistoryWithStore(browserHistory, store)

export default class App extends Component {
	render() {
		return (
			<div className='main'>
				<Provider store={store}>
					<Router history={history}>
						<Route path='/' component={CommonWrapper}>
							<IndexRoute component={Home}></IndexRoute>
							<Route path='detail/:id' component={Detail}></Route>
							<Route path='list/:id' component={List}></Route>
						</Route>
					</Router>
				</Provider>
			</div>
		)
	}
}





