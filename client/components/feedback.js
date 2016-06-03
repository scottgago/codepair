import React, { Component } from 'react';
import { connect } from 'react-redux';
import MenuItem from 'material-ui/MenuItem';
import SelectField from 'material-ui/SelectField';
import RaisedButton from 'material-ui/RaisedButton';
import Modal from 'react-modal';
import * as actions from '../actions';

console.log(actions)




const modalStyles = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(255, 255, 255, 0.75)'
  },
  content : {
    position                   : 'absolute',
    left                       : '40px',
    right                      : '40px',
    bottom                     : '40px',
    border                     : '1px solid #ccc',
    background                 : '#fff',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '4px',
    outline                    : 'none',
    padding                    : '20px'

  }
}

Modal.defaultStyles = modalStyles

console.log(Modal.defaultStyles)

const style = {
	feedbackForm:{
		height: '100%',
		width: '100%',
		marginTop: 25,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		backgroundColor:'#D8D8D8',
	},
	optionSelector: {
		display: 'flex',
    	flexDirection: 'row',
    	color: 'black',
    	alignItems: 'center',
	},
	optionSelectorBar: {
		marginRight: 20,
		alignItems: 'center',
	},
	button : {
		width: '100%',

	}
}

export default class Feedback extends Component {
	constructor(props){
		super(props)
		console.log(props)
		this.state = {
			'question1': '',
			'question2': '',
			'question3': '',
			'question4': '',
			'question5': '',
			partnerID : props.props.pairId,
			modalIsOpen: props.partnerName.modalIsOpen,
			submitted: false
		}
	}

	componentWillReceiveProps(newProps){
		console.log(newProps)
		this.setState({
			modalIsOpen: newProps.partnerName.modalIsOpen,
			partnerID: newProps.props.pairID
		})
	}
  	
	afterOpenModal() {
    // references are now sync'd and can be accessed.
    	this.refs.subtitle.style.color = '#f00';
  	}
	closeModal() {

		var payload = {
			responseItems : {
				q1: this.state.question1,
				q2: this.state.question2,
				q3: this.state.question3,
				q4: this.state.question4,
				q5: this.state.question5,
				pairID: this.state.partnerID
			}
		}



		actions.sendFeedback({toID: this.state.partnerID, answers: payload})

    	this.setState({modalIsOpen: false});
    	this.setState({submitted: true});
    	this.setState({
    		'question1': '',
			'question2': '',
			'question3': '',
			'question4': '',
			'question5': '',
			submitted : true
    	}) 
  	}
	handleChangeDropdown(event, index, value, param){
		if(param === 'question1'){
			this.setState({
				question1 : value
			})
		}
		if(param === 'question2'){
			this.setState({
				question2 : value
			})
		}
		if(param === 'question3'){
			this.setState({
				question3 : value
			})
		}
		if(param === 'question4'){
			this.setState({
				question4 : value
			})
		}
		if(param === 'question5'){
			this.setState({
				question5 : value
			})
		}
	}
	render(){
		return(
		<div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={modalStyles} >
          <div style={style.feedbackForm}>
          <div style = {style.optionSelector}>
		<p style={style.optionSelectorBar} >How well did your partner explain their thought process?</p><SelectField style={style.optionSelectorBar} value={this.state.question1} 
		onChange={(event, index, value) => this.handleChangeDropdown(event, index, value, 'question1')}>
          	<MenuItem value={5} primaryText="Excellect" />
          	<MenuItem value={4} primaryText="Great" />
          	<MenuItem value={3} primaryText="Good" />
          	<MenuItem value={2} primaryText="Fair" />
          	<MenuItem value={1} primaryText="Poor" />
		</SelectField>
		</div>
		<div style = {style.optionSelector}>
        <p style={style.optionSelectorBar}>How well did your partner navigate getting 'stuck'?</p><SelectField style={style.optionSelectorBar} value={this.state.question2} 
		onChange={(event, index, value) => this.handleChangeDropdown(event, index, value, 'question2')}>
          	<MenuItem value={5} primaryText="Excellect" />
          	<MenuItem value={4} primaryText="Great" />
          	<MenuItem value={3} primaryText="Good" />
          	<MenuItem value={2} primaryText="Fair" />
          	<MenuItem value={1} primaryText="Poor" />
		</SelectField>
		</div>
		<div style = {style.optionSelector}>
		<p style={style.optionSelectorBar}>How responsive was your parter to criticism?</p><SelectField style={style.optionSelectorBar} value={this.state.question3} 
		onChange={(event, index, value) => this.handleChangeDropdown(event, index, value, 'question3')}>
          	<MenuItem value={5} primaryText="Excellect" />
          	<MenuItem value={4} primaryText="Great" />
          	<MenuItem value={3} primaryText="Good" />
          	<MenuItem value={2} primaryText="Fair" />
          	<MenuItem value={1} primaryText="Poor" />
		</SelectField>
		</div>
		<div style = {style.optionSelector}>
		<p style={style.optionSelectorBar}>How well did your parter accept driving/navigating roles?</p><SelectField style={style.optionSelectorBar} value={this.state.question4} 
		onChange={(event, index, value) => this.handleChangeDropdown(event, index, value, 'question4')}>
          	<MenuItem value={5} primaryText="Excellect" />
          	<MenuItem value={4} primaryText="Great" />
          	<MenuItem value={3} primaryText="Good" />
          	<MenuItem value={2} primaryText="Fair" />
          	<MenuItem value={1} primaryText="Poor" />
		</SelectField>
		</div>
		<div style = {style.optionSelector}>
		<p style={style.optionSelectorBar}>How would you rate your partner's overall pair programming ability?</p><SelectField style={style.optionSelectorBar} value={this.state.question5}
		onChange={(event, index, value) => this.handleChangeDropdown(event, index, value, 'question5')}>
          	<MenuItem value={5} primaryText="Excellect" />
          	<MenuItem value={4} primaryText="Great" />
          	<MenuItem value={3} primaryText="Good" />
          	<MenuItem value={2} primaryText="Fair" />
          	<MenuItem value={1} primaryText="Poor" />
		</SelectField>
		</div>
		</div>
		<RaisedButton label="submit feedback" onClick ={() => this.closeModal()} style = {style.button}/>
        </Modal>
		</div>)}
}