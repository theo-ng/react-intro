import React from 'react';

export default React.createClass({
	render() {
		let size = `col-md-${this.props.size}`
	    return (
	      <div className={size}>
	      	{this.props.children}
	      </div>
	    )
	}
})