import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router';

class PostsNew extends Component {
	static contextTypes = {
		router: PropTypes.object
	};

	onSubmit(props) {
		this.props.createPost(props)
			.then(() => {
				// blog post has been created, navigate the user to the index
				// We navigate by calling this.context.router.push with the new path to nagivate to.
				this.context.router.push('/');
			});
	}

	render() {
		const { fields: {title, categories, content }, handleSubmit } = this.props;

		// same as const title = this.props.fields.title;
		// same as const handleSubmit = this.props.handleSubmit;
		// handlesubmit handles validation on submit, can block submit or send to action creator with form data as argument
		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<h3>Create A New Post</h3>
				<div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
					<label>Title</label>
					<input type="text" className="form-control" {...title} />
					<div className="text-help">
						{title.touched ? title.error : ''}
					</div>
				</div>	

				<div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
					<label>Categories</label>
					<input type="text" className="form-control" {...categories} />
					<div className="text-help">
						{categories.touched ? categories.error : ''}
					</div>
				</div>

				<div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
					<label>Content</label>
					<textarea type="text" className="form-control" {...content} />
					<div className="text-help">
						{content.touched ? content.error : ''}
					</div>
				</div>

				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>
			</form>
		);
	}
}

function validate(values) {
	const errors = {};

	if (!values.title) {
		errors.title = 'Enter a username';
	}
	if (!values.categories) {
		errors.categories = 'Enter categories';
	}
	if (!values.content) {
		errors.content = 'Enter some content';
	}

	return errors;
}

// connect: first argument is mapStateToProps, 2nd is mapDispatchToProps
// reduxForm: 1st is from config, 2nd is mapStateToProps, 3rd is mapDispatchToProps

export default reduxForm({
	form: 'PostsNewForm',
	fields: ['title', 'categories', 'content'],
	validate
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