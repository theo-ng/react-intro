import React from 'react';
import Column from './column';
import Row from './row';

export default React.createClass({
	getInitialState() {
		return {
			inputValue: ''
		}
	},
	handleChange() {
		const {value} = event.target
		this.setState({
			inputValue: value
		})
	},
	handleClick() {
		console.log('Button clicked');
	},
    render() {
    	const { inputValue } = this.state
	    return (
	    	<div>
		    	<Row>
					<Column size='11'>
						<div className= "form-group">
							<input className="form-control" value={'new task'} onChange={this.handleChange}></input>
						</div>
					</Column>
					<Column size='1'>
						<div className= "form-group">
							<button className="btn btn-default" onClick={this.handleClick}>Add</button>
						</div>
					</Column>
				</Row>
			</div>
	    )
    }
})