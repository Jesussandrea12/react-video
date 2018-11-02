import React, { Component } from 'react'
import PropTypes from 'prop-types'

import 'bulma';
import './media.css';

class Media extends Component {
	// constructor(props) {
	// 	super(props)
	// 	this.state = {
	// 		author: props.author
	// 	}
	// 	this.handleClick = this.handleClick.bind(this)
	// }

	// state = {
	// 	author: 'Jesus Sandrea'
	// }

	// handleClick = (e) => {
	// 	// console.log(this.props.title)
	// 	this.setState({
	// 		author: 'Jesus Twin'
	// 	})
	// }

	render() {
		const { title, author, cover } = this.props;

		return (
			<div className="Media card">
				<div className="card-image">
					<figure className="image is-3by3">
						<img className="cover-image" src={cover} alt="Placeholder Pic" />
					</figure>
				</div>
				<div className="card-content">
					<div className="content">
						<h4>{title}</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						<p className="subtitle is-6">{author}</p>
					</div>
				</div>
			</div>
		)
	}
}

Media.propTypes = {
	cover: PropTypes.string,
	title: PropTypes.string.isRequired,
	author: PropTypes.string,
	type: PropTypes.oneOf(['video', 'audio'])
}

export default Media