import React from 'react';
import TodoForm from './todo_form'
import TodoList from './todo_list'
import Column from './column'
import Row from './row'

export default React.createClass({
    render() {
	    return (
			<div className="container">
				<h1>{this.props.name}'s todo list</h1>
				<Row>
					<TodoForm />
				</Row>
				<Row>
					<Column size='12'>
						<TodoList tasks={["Clean Room", "Buy Milk", "Pay Phone Bills"]} />
					</Column>
				</Row>
			</div>
	    )
    }
})