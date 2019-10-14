import React, { Component } from 'react';

class App extends React.Component {

	state = {
		hadErrors: false,
		news: {}
	};

	componentDidMount() {
		fetch("http://127.0.0.1:8000/news/")
		.then(res => res.json())
		.then(res => this.setState({ news: res }))
		.catch(() => this.setState({ hadErrors: true }));
	}

	render() {
		return (
			<div>{JSON.stringify(this.state.news)}</div>
		)
	}
}

export default App;