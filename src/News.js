import React, { Component } from 'react';

class News extends React.Component {

	state = {
		hadErrors: false,
		news: {}
	};

	componentDidMount() {
		fetch("http://arunjain.pythonanywhere.com/news/trending/")
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

export default News;