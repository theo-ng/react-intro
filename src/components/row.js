import React from 'react';

export default React.createClass({
	render() {
	    return (
			<div className="row">
				{this.props.children}
			</div>
	    )
	}
})