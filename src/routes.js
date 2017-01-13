import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';

const Greeting = () => {
	return <div>Hey there!</div>;
};

export default (
	<Route path="/" component={App}>
		<IndexRoute component={PostsIndex} />
		<Route path="posts/new" component={PostsNew} />
	</Route>
);

// /				App
// /greet 	App, Greeting
// /greet2 	App, Greeting
// /greet3 	App, Greeting