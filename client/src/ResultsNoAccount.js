import React from 'react';
import { Link } from 'react-router-dom'
import Logo from './LOGO-Black-Scrumbags.png'
import ProfilePicture from './face.jpg'
import './Results.css'
import ResultImage from './foraging.webp'
import { Button } from 'semantic-ui-react'
import './green4lyfe.css'
import { getCookie } from './cookie.js'
import querystring from 'querystring'
import axios from 'axios'
import { getQuizValue } from './quiz/calculateResults.js'

class ResultsNoAccount extends React.Component {
	lifestyle = [];

	componentDidMount() {
		this.getResults();
	}

    getResults = () => {
		const data = getQuizValue(null);
		axios.post('http://localhost:5000/api/quizzes/results', data)
			.then(response => {
				this.lifestyle = response.data;
				console.log(this.lifestyle);
			})
    }

    render() {
	return (
	    <div>
	      <Link to='/'>
		<img src={Logo} alt='Green4Lyfe logo' style={{height: "200px", width: "300px", position: "absolute", top: "-50px", left: "-10px"}}/>
	      </Link>
	      <div className="ui segment" style={{position: "absolute", top: "5%", right: "5%"}}>
		<img src={ProfilePicture} style={{height: "75px", width: "75px"}}/>
		<br/>
		Profile Picture
	      </div>
	      <div style={{textAlign: "center", position: "absolute", height: "60%", width: "60%", left: "21%", top: "30%"}}>
		<div>
		  <img src={ResultImage} style={{height: "30%", width: "40%"}}/>
		  <br/>
		</div>
	      </div>
	      <Link to="/quiz/question1">
		<Button className="button" style={{position: "absolute", left: "46%", top: "60%"}}>
		  Retake quiz
		</Button>
	      </Link>
	      <div className="ui segment" style={{position: "absolute", top: "45%", right: "5%"}}>
		<Link to="/register">Create Account</Link><br/>
		<Link to="/">Exit</Link><br/>
	      </div>
	    </div>
	);
    }
}

export default ResultsNoAccount;
