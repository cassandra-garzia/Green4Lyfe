import { withRouter } from 'react-router'
import React from 'react';
import { Link } from 'react-router-dom'
import './Quiz.css'
import '../green4lyfe.css'
import Logo from '../LOGO-Black-Scrumbags.png'
import 'semantic-ui-css/semantic.min.css'
import { Button } from 'semantic-ui-react'
import { getCookie } from '../cookie.js'

const prevQuestion = "25";
const currQuestion = "26";
const nextQuestion = null;

class QuizQuestion26 extends React.Component {
    answered = (answer) => {
	var date = new Date();
	date.setTime(date.getTime() + (60 * 60 * 1000));
	document.cookie = "q" + currQuestion + "=" + answer + "; expires=" + date.toUTCString() + ";";
	this.props.history.push('resultsnoaccount')
    }
    answeredA = () => {
	this.answered("A");
    }
    answeredB = () => {
	this.answered("B");
    }
    answeredC = () => {
	this.answered("C");
    }
    answeredD = () => {
	this.answered("D");
    }

    render() {
	return (
	    <div>
	      <Link to='/'>
		<img src={Logo} alt='Green4Lyfe logo' style={{height: "200px", width: "300px", position: "absolute", top: "-50px", left: "-10px"}}/>
	      </Link>
	      <div className="question-box">
		<b>
		  { currQuestion }. Are you interested in vacationing to an eco-friendly location before making a commitment?
		</b>
		<br/>
		<div className="answer-a" onClick={this.answeredA}>
		  <br/>
		  A. Definitely!
		</div>
		<div className="answer-b" onClick={this.answeredB}>
		  <br/>
		  B. Nope, thanks though.
		</div>
		<br/>
		<div className="answer-c" onClick={this.answeredC}>
		  <br/>
		  C. I am confident that I want a major lifestyle change.
		</div>
		<div className="answer-d" onClick={this.answeredD}>
		  <br/>
		  D. Depends on the cost.
		</div>
	      </div>
	      <div style={{position: "absolute", top: "90%", left: "42%"}}>
		<Link to={"/quiz/question" + prevQuestion}>
		  <Button className="button" style={{left: "26%"}}>prev</Button>
		</Link>
	      </div>
	    </div>
	);
    }
}

export default QuizQuestion26;

