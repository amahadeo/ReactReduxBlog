import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';

class PostsNew extends Component {
	render() {
		const { fields: {title, categories, content }, handleSubmit } = this.props;

		// same as const title = this.props.fields.title;
		// same as const handleSubmit = this.props.handleSubmit;
		// handlesubmit handles validation on submit, can block submit or send to action creator with form data as argument
		return (
			<form onSubmit={handleSubmit(this.props.createPost)}>
				<h3>Create A New Post</h3>
				<div className="form-group">
					<label>Title</label>
					<input type="text" className="form-control" {...title} />
				</div>

				<div className="form-group">
					<label>Title</label>
					<input type="text" className="form-control" {...categories} />
				</div>

				<div className="form-group">
					<label>Title</label>
					<textarea type="text" className="form-control" {...content} />
				</div>

				<button type="submit" className="btn btn-primary">Submit</button>
			</form>
		);
	}
}

// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is from config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

export default reduxForm({
	form: 'PostsNewForm',
	fields: ['title', 'categories', 'content']
}, null, { createPost })(PostsNew);

// reduxForm is looking out for values to inputs and mapping it to our props like 'connect'

// user types something in....record it on application state
// state === {
// 	form: {
// 		PostsNewForm: {
// 			title: '....',
// 			categories: '....',
// 			content: '.....'
// 		}
// 	}
// }
// compare to searchbar when we added input value to state