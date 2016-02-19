import React from 'react';
import Column from './column';
import Row from './row';

export default React.createClass({
    render() {
	    return (
	    	<div>
			    <ul className="list-group">
			      	{this.props.tasks.map(function(task, i){
			      		return <Row><li className="list-group-item" key={i}>{task}</li></Row>;
			      	})}
			    </ul>
		    </div>
	    )
    }
})