import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getChangeListAction } from './actionCreator'
import './style.css';

class List extends Component {
	render() {
		return (
			<div className="listMain">
				<div className="title">
					<p className="span_box">
						{
							this.props.titleList.map((value) => {
								return (
										<span key={value.id}>{value.title + ' ' + '>' + ' '}</span>
								)
							})
						}
					</p>
				</div>
				<div className='content'>
					{
						this.props.contentList.map((value) => {
							return (
								<li className="news" key={value.id}>
									{value.title}
									<span className="pubdate">{'(' + value.pubdate + ')'}</span>
									<span className="describe">{value.describe}</span>
								</li>
							)
						})
					}
				</div>
			</div>
		)
	}

	componentDidMount() {
		this.getListInfo()
	}

	getListInfo() {
		fetch('/api/list.json')
			.then((res) => res.json())
			.then(this.props.changeList)
	}
}

const mapStateToProps = (state) => {
	return {
		titleList: state.list.titleList,
		contentList: state.list.contentList
	}
}

const mapDistpatchToProps = (dispatch) => {
	return {
		changeList(res) {
			const action = getChangeListAction(res.data)
			dispatch(action)
		}
	}
}

export default connect(mapStateToProps, mapDistpatchToProps)(List)