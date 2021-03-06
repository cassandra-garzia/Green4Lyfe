import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from './App';
import Login from './Login';
import Register from './Register';
import Wiki from './Wiki';
import WikiCommunityGarden from './WikiCommunityGarden';
import WikiEarthships from './WikiEarthships';
import WikiEcoVillage from './WikiEcoVillage';
import WikiFutureCity from './WikiFutureCity';
import WikiGardening from './WikiGardening';
import WikiGreenGetaway from './WikiGreenGetaway';
import WikiMinimalism from './WikiMinimalism';
import WikiPlastics from './WikiPlastics';
import WikiSustainability from './WikiSustainability';
import WikiTinyHouse from './WikiTinyHouse';
import WikiVeganism from './WikiVeganism';
import UserHome from './UserHome';
import UserBlog from './UserBlog';
import Blog from './Blog';
import BlogTemplate from './BlogTemplate';
import PostList from './PostList';
import Calculator from './Calculator';
import Results from './Results';
import ResultsNoAccount from './ResultsNoAccount';
import QuizQuestion1 from './quiz/Question1';
import QuizQuestion2 from './quiz/Question2';
import QuizQuestion3 from './quiz/Question3';
import QuizQuestion4 from './quiz/Question4';
import QuizQuestion5 from './quiz/Question5';
import QuizQuestion6 from './quiz/Question6';
import QuizQuestion7 from './quiz/Question7';
import QuizQuestion8 from './quiz/Question8';
import QuizQuestion9 from './quiz/Question9';
import QuizQuestion10 from './quiz/Question10';
import QuizQuestion11 from './quiz/Question11';
import QuizQuestion12 from './quiz/Question12';
import QuizQuestion13 from './quiz/Question13';
import QuizQuestion14 from './quiz/Question14';
import QuizQuestion15 from './quiz/Question15';
import QuizQuestion16 from './quiz/Question16';
import QuizQuestion17 from './quiz/Question17';
import QuizQuestion18 from './quiz/Question18';
import QuizQuestion19 from './quiz/Question19';
import QuizQuestion20 from './quiz/Question20';
import QuizQuestion21 from './quiz/Question21';
import QuizQuestion22 from './quiz/Question22';
import QuizQuestion23 from './quiz/Question23';
import QuizQuestion24 from './quiz/Question24';
import QuizQuestion25 from './quiz/Question25';
import QuizQuestion26 from './quiz/Question26';

const rootElement = document.getElementById('root')
ReactDOM.render(
      <BrowserRouter>
	<Switch>
	  <Route exact path='/' component={App} />
	  <Route path='/posts' component={PostList} />
	  <Route path='/login' component={Login} />
	  <Route path='/register' component={Register} />
	  <Route path='/wiki' component={Wiki} />
	  <Route path='/wikicommunitygarden' component={WikiCommunityGarden} />
	  <Route path='/wikiearthship' component={WikiEarthships} />
	  <Route path='/wikiecovillage' component={WikiEcoVillage} />
	  <Route path='/wikifuturecity' component={WikiFutureCity} />	  
	  <Route path='/wikigardening' component={WikiGardening} />
	  <Route path='/wikigreengetaway' component={WikiGreenGetaway} />
	  <Route path='/wikiminimalism' component={WikiMinimalism} />	  
	  <Route path='/wikiplastics' component={WikiPlastics} />
	  <Route path='/wikisustainability' component={WikiSustainability} />
	  <Route path='/wikitinyhouse' component={WikiTinyHouse} />
	  <Route path='/wikiveganism' component={WikiVeganism} />
	  <Route path='/userhome' component={UserHome} />
	  <Route path='/blog' component={Blog} />
	  <Route path='/blogtemplate' component={BlogTemplate} />
	  <Route path='/userblog' component={UserBlog} />
	  <Route path='/calculator' component={Calculator} />
	  <Route path='/results' component={Results} />
	  <Route path='/quiz/resultsnoaccount' component={ResultsNoAccount} />
	  <Route path='/quiz/question1' component={QuizQuestion1} />
	  <Route path='/quiz/question2' component={QuizQuestion2} />
	  <Route path='/quiz/question3' component={QuizQuestion3} />
	  <Route path='/quiz/question4' component={QuizQuestion4} />
	  <Route path='/quiz/question5' component={QuizQuestion5} />
	  <Route path='/quiz/question6' component={QuizQuestion6} />
	  <Route path='/quiz/question7' component={QuizQuestion7} />
	  <Route path='/quiz/question8' component={QuizQuestion8} />
	  <Route path='/quiz/question9' component={QuizQuestion9} />
	  <Route path='/quiz/question10' component={QuizQuestion10} />
	  <Route path='/quiz/question11' component={QuizQuestion11} />
	  <Route path='/quiz/question12' component={QuizQuestion12} />
	  <Route path='/quiz/question13' component={QuizQuestion13} />
	  <Route path='/quiz/question14' component={QuizQuestion14} />
	  <Route path='/quiz/question15' component={QuizQuestion15} />
	  <Route path='/quiz/question16' component={QuizQuestion16} />
	  <Route path='/quiz/question17' component={QuizQuestion17} />
	  <Route path='/quiz/question18' component={QuizQuestion18} />
	  <Route path='/quiz/question19' component={QuizQuestion19} />
	  <Route path='/quiz/question20' component={QuizQuestion20} />
	  <Route path='/quiz/question21' component={QuizQuestion21} />
	  <Route path='/quiz/question22' component={QuizQuestion22} />
	  <Route path='/quiz/question23' component={QuizQuestion23} />
	  <Route path='/quiz/question24' component={QuizQuestion24} />
	  <Route path='/quiz/question25' component={QuizQuestion25} />
	  <Route path='/quiz/question26' component={QuizQuestion26} />
	</Switch>
      </BrowserRouter>,
    rootElement
);
