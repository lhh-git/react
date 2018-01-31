import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { List, Avatar } from 'antd'
import { connect } from 'react-redux'
import * as actions from './actionCreator'
import { Link } from 'react-router'

class Home extends Component {
	render() {
		return (
			<div>
				<List
					style={{marginTop: '20px'}}
				  bordered={true}
   			  itemLayout="horizontal"
    		  dataSource={this.props.list}
    		  renderItem={item => (
			      <List.Item>
			        <List.Item.Meta
			          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
			          title={<Link to={item.link}>{item.title}</Link>}
			          description={'[' + item.category + ']' + item.pubdata}
			        />
			      </List.Item>
    			)}
  			/>
  		</div>
		)
	}

	componentDidMount() {
		if (!this.props.list.length) { //如果长度等于0请求数据
			this.props.actions.getActionList()
		}
	}
}

const mapStateToProps = (state) => {
	return {
		list: state.home.list
	}
}

const mapDistpatchToProps = (dispatch) => {
	return {
		actions: bindActionCreators(actions, dispatch)
		// getList() {
		// 	var action = getActionList()
		// 	dispatch(action)
		// }
	}
}

export default connect(mapStateToProps, mapDistpatchToProps)(Home) 