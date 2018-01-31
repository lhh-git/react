import React, { Component } from 'react'
import { Row, Col, Menu, Icon} from 'antd'
import { getChangeListAction } from './actionCreator'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { Link } from 'react-router'
import Footer from './components/Footer'
import { View as Nav } from './Nav'
import './style.css'

class CommonWrapper extends Component {

	// constructor(props) {
	// 	super(props)
	// 	this.state = store.getState();
	// 	store.subscribe(this.handleStoreChange.bind(this))
	// }

	// handleStoreChange() {
	// 	this.setState(store.getState())
	// }

	render() {
		return (
			<div className='common'>
				<Row>
		      <Col span={6}>
		      	<img alt='' onClick={()=>{browserHistory.push('/')}} className='common-logo' src={require('../../static/imgs/newlogo.png')} />
		      </Col>
		      <Col span={18}>
		      	<Menu mode="horizontal">
			        {
			        	this.props.list.map((value) => {
			        		return (
			        			<Menu.Item key={value.id}>
						          <Icon type="appstore"/>{<Link className='goUrl' to={value.link}>{value.title}</Link>}
						        </Menu.Item>
			        		)
			        	})
			        }
     				</Menu>
		      </Col>
    		</Row>
    		<Nav/>
    		<div>{this.props.children}</div>
    		<Footer/>	
			</div>
		)
	} 

	componentDidMount() {
		this.getCommonInfo()
	}

	getCommonInfo() {
		fetch('/api/common.json')
			.then((res) => res.json())
			.then(this.props.changeList)
			// .catch(this.handleGetInfoErr.bind(this))
	}

	// handleGetInfoErr() {
	// 	alert('err')
	// }

}


const mapStateToProps = (state) => {  //把store中的state映射到props中
	return {
		list: state.common.list
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		changeList: (res) => {
			var action = getChangeListAction(res.data.list)
			dispatch(action)
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CommonWrapper)  //让CommonWrapper和store连接,会返回一个新的组件,把这个组件暴露出去