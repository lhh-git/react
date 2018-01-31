import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { List } from 'antd';
import * as actions from './actionCreator'
import './style.css'


class Nav extends Component {
	render() {
		return (
			<div className='nav'>
				<div className='navblock navblock-left'>
					<h2>
						{
							this.props.listLeft.map((value) => {
								return (
									<a key={value.id}>{value.h2}</a>
								)
							})
						}
					</h2>
					<ul>
						{
							this.props.listLeft.map((value) => {
								return (
									<li key={value.id}><a>{value.title}</a></li>
								)
							})
						}
					</ul>
				</div>
				<div className='navblock navblock-middle'>
					<h2>
						{
							this.props.listMiddle.map((value) => {
								return (
									<a key={value.id}>{value.h2}</a>
								)
							})
						}
					</h2>
					<ul>
						{
							this.props.listMiddle.map((value) => {
								return (
									<li key={value.id}><a>{value.title}</a></li>
								)
							})
						}
					</ul>
				</div>
				<div className='navblock navblock-right'>
					<h2>
						{
							this.props.listRight.map((value) => {
								return (
									<a key={value.id}>{value.h2}</a>
								)
							})
						}
					</h2>
					<ul>
						{
							this.props.listRight.map((value) => {
								return (
									<li key={value.id}><a>{value.title}</a></li>
								)
							})
						}
					</ul>
				</div>
			</div>
		)
	}

	componentDidMount() {
		// this.getCommonNavInfo()

		// this.props.getList()
		this.props.actions.getActionList()
	}

	// getCommonNavInfo() {
	// 	fetch('/api/commonNav.json')
	// 		.then((res) => res.json())
	// 		.then(this.props.changeCommonNavInfo)
	// 		// .catch(this.handleGetInfoErr.bind(this))
	// }
}

const mapStateToProps = (state) => {
	return {
		listLeft: state.commonNav.listLeft,
		listMiddle: state.commonNav.listMiddle,
		listRight: state.commonNav.listRight
	}
}


const mapDispatchToProps = (dispatch) => {
	return {
		// changeCommonNavInfo(res) {
		// 	const action = getChangeCommonNavAction(res.data)
		// 	dispatch(action)
		// }

		// getList() {
		// 	var action = getActionList()
		// 	dispatch(action)
		// }

		actions: bindActionCreators(actions, dispatch)
	}
} 


export default connect(mapStateToProps, mapDispatchToProps)(Nav)