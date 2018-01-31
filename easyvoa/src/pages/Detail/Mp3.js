import React, { Component } from 'react'
import './mp3.css'

export default class Mp3 extends Component {

	constructor(props) {
		super(props)
		this.handlePlayBtnClick = this.handlePlayBtnClick.bind(this)
	}

	render() {
		return (
			<div className='mp3' >
				<div className='toggle' onClick = {this.handlePlayBtnClick}>
					<span className='play iconfont' title='开始' 
						ref={(play) =>{this.play = play}} >&#xe613;
					</span>
					<span className='stop iconfont' title='暂停'
						ref={(pause) =>{this.pause = pause}}>&#xe669;
					</span>
				</div>
				<span className='download'>下载音频</span>
				<audio ref={(audio) =>{this.audio = audio}}>
					<source src={require('../../static/mp3/说散就散.mp3')}></source>
				</audio>
			</div>
		) 
	}

	componentDidMount() {
		this.init();
	}

	init() {
		this.playStatus = false;
		this.playBtn =  this.play;
		this.pauseBtn = this.pause;
		this.audio = this.audio;
	}

	handlePlayBtnClick() {
		if (this.playStatus) {
			this.audio.pause()
			this.playStatus = false
			this.playBtn.style.display = 'block'
			this.pauseBtn.style.display = 'none'
		}else {
			this.audio.play()
			this.playStatus = true
			this.pauseBtn.style.color = 'red'
			this.playBtn.style.display = 'none'
			this.pauseBtn.style.display = 'block'
		}
	}
}