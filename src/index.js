// Component: Todo Class, App class(The whole app)
// Store todos into this.state
// Use global variable to count todos
// Functionalities to achieve:
// 		addTodo
// 		toggleTodo, unchecked to checked
// 		deleteTodo
// 		countTodo
// Now, the game is on!

import React from 'react';
import ReactDOM from 'react-dom';

let todo_num = 0;

class Todo extends React.Component{
	// Usage: <Todo onDelete=function() onToggle=function() todo={id: xx, text: yyyy, checked: false} />
	//constructor(props){
	//	super(props);
	//}
	render(){
		return (
			<li id={this.props.todo.id}>
				<input type='checkbox' checked={this.props.todo.checked} onChange={this.props.onToggle}/>
				<button onClick={this.props.onDelete}>Delete</button>
				<span>{this.props.todo.text}</span>
			</li>
		);
	}
}


class TodoList extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			'todos': [],
		};
	}

	addTodo(){
		const text = prompt("New Todo Here!");
		let new_todo = {id: todo_num ++, text: text, checked: false};
		this.setState({todos: [...this.state.todos, new_todo]});
	}
	
	toggleTodo(id){
		// set checked status of the todo with id to be true 
		this.setState({todos: this.state.todos.map(td => {
			if (td.id !== id) return td;
			return {
				id: td.id, text: td.text, checked: true,
			};
		})})
	}

	deleteTodo(id){
		this.setState({todos: this.state.todos.filter(td => td.id !== id)});
	}
	
	render(){
		return (
			<div>
				<div>Total Todo Count: {this.state.todos.length}</div>
				<div>Unchecked Todo Count: {this.state.todos.filter(td => !td.checked).length}</div>
				<button onClick={() => this.addTodo()}>New Todo</button>
				<ul>
					{this.state.todos.map(td => (
						<Todo 
							onDelete={() => this.deleteTodo(td.id)} 
							onToggle={() => this.toggleTodo(td.id)} 
							todo={td} 
						/>
					))}
				</ul>
			</div>);
	}
}


class Clock extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			datetime: new Date(),
		}
	}
	
	tick(){
		this.setState({datetime: new Date()});
	}

	componentDidMount(){
		this.timerID = setInterval(
			() => this.tick(),
			1000   // each second / 1000 milliseconds
		);
	}
	
	componentWillUnmount(){
		clearInterval(this.timerID);
	}

	render(){
		return (
			<div><h2>Now is {this.state.datetime.toLocaleString()} </h2></div>
		);
	}
}
	


class App extends React.Component{
	render() {
		return (
			<div>
				<Clock />
				<TodoList />
			</div>
		);
	}
}


ReactDOM.render(<App />, document.getElementById('root'));

