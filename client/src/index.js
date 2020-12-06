import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './App';
import Login from './Login';
import Register from './Register';
import Wiki from './Wiki';
import Quiz from './Quiz';
import UserHome from './UserHome';
import UserBlog from './UserBlog';
import Blog from './Blog';
import Posts from './Posts/Posts';
import CreatePost from './Posts/CreatePost/CreatePost';
import SinglePost from './Posts/SinglePost/SinglePost';
import ShowPost from './Posts/ShowPost/ShowPost';
import Calculator from './Calculator';
import Results from './Results';
import ResultsNoAccount from './ResultsNoAccount';

const rootElement = document.getElementById('root')
ReactDOM.render(
      <BrowserRouter>
	<Switch>
	  <Route exact path='/' component={App} />
	  <Route path='/login' component={Login} />
	  <Route path='/register' component={Register} />
	  <Route path='/wiki' component={Wiki} />
	  <Route path='/quiz' component={Quiz} />
	  <Route path='/userhome' component={UserHome} />
	  <Route path='/Posts/Posts' component={Posts} />
	  <Route path='/Posts/CreatePost/CreatePost' component={CreatePost} />
	  <Route path='/Posts/SinglePost/SinglePost' component={SinglePost} />
	  <Route path='/Posts/ShowPost/ShowPost' component={ShowPost} />
	  <Route path='/blog' component={Blog} />
	  <Route path='/userblog' component={UserBlog} />
	  <Route path='/calculator' component={Calculator} />
	  <Route path='/results' component={Results} />
	  <Route path='/resultsnoaccount' component={ResultsNoAccount} />
	</Switch>
      </BrowserRouter>,
    rootElement
    
);
