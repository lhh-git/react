import React, { Component } from 'react'
import Canvas from './Canvas'
import Mp3 from './Mp3'
import { connect } from 'react-redux'
import { getChangeDetatilAction } from './actionCreator'
import './style.css'

class Detail extends Component {

	render() {
		return (
			<div className='content'>
				<div className='content_title'>
					<h1>{this.props.title}</h1>
					<div className="head_info">
						<span>时间：{this.props.pubdate}</span>
						<span>来源：<a href="http://www.easyvoa.com" target="_block">{this.props.source}</a></span>
						<span>收听下载次数：{this.props.count}</span>
					</div>
				</div>
				<div className="content_main">
					<div className="content_main_horologium">
						<Canvas/>
					</div>
					<div className="content_main_mp3">
						<Mp3/>
					</div>
					<div className="content_main_info" dangerouslySetInnerHTML={{__html:this.props.content}}></div>
				</div>
			</div>
		)
	}

	componentDidMount() {
		this.getDetailInfo()
	}

	getDetailInfo() {
		fetch('/api/detail.json?id=' + this.props.params.id)
			.then((res) => res.json())
			.then(this.props.changeDetailInfo)
	}
}

const mapState = (state) => ({...state.detail})

const mapDispatch = (dispatch) => {
		return {	
		changeDetailInfo(res) {
			const action = getChangeDetatilAction(res.data)
			dispatch(action)
		}	
	}
}

export default connect(mapState, mapDispatch)(Detail)