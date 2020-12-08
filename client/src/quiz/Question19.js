import React from 'react';
import { Link } from 'react-router-dom'
import './Quiz.css'
import '../green4lyfe.css'
import Logo from '../LOGO-Black-Scrumbags.png'
import 'semantic-ui-css/semantic.min.css'
import { Button } from 'semantic-ui-react'
import { getCookie } from '../cookie.js'

const prevQuestion = "18";
const currQuestion = "19";
const nextQuestion = "20";

class QuizQuestion19 extends React.Component {
    answered = (answer) => {
	var date = new Date();
	date.setTime(date.getTime() + (60 * 60 * 1000));
	document.cookie = "q" + currQuestion + "=" + answer + "; expires=" + date.toUTCString() + ";";
	window.location.replace('http://localhost:3000/quiz/question' + nextQuestion)
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
		  { currQuestion }. How would you describe your current interactions with your neighbors?
		</b>
		<br/>
		<div className="answer-a" onClick={this.answeredA}>
		  <br/>
		  A. I have neighbors?
		</div>
		<div className="answer-b" onClick={this.answeredB}>
		  <br/>
		  B. They are like family!
		</div>
		<br/>
		<div className="answer-c" onClick={this.answeredC}>
		  <br/>
		  C. I know their name.
		</div>
		<div className="answer-d" onClick={this.answeredD}>
		  <br/>
		  D. We are casual friends.
		</div>
	      </div>
	      <div style={{position: "absolute", top: "90%", left: "42%"}}>
		<Link to={"/quiz/question" + prevQuestion}>
		  <Button className="button" style={{left: "26%"}}>prev</Button>
		</Link>
		<Link to={"/quiz/question" + nextQuestion}>
		  <Button className="button" style={{left: "26%"}}>next</Button>
		</Link>
	      </div>
	    </div>
	);
    }
}

export default QuizQuestion19;

