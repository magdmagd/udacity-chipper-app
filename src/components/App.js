import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading-bar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Fragment from 'render-fragment';

import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import NewTweet from './NewTweet' 
import TweetPage from './TweetPage'
import Nav from './Nav'



class App extends Component {

  componentDidMount() 
  {
    this.props.dispatch(handleInitialData())
  }//end componentDidMount() 

  render() {
    return (
      
      <Router>
      <Fragment>
        <LoadingBar />
        <div className='container'>
          <Nav />
          {this.props.loading === true ? null  : 
              <div>
                <Route path='/' exact component={Dashboard} />
                <Route path='/tweet/:id' component={TweetPage} />
                <Route path='/new' component={NewTweet} />
              </div>}
        </div>
      </Fragment>
    </Router>
    )
  }//end render
}//end class 
/*
<div>
          <LoadingBar />
          {this.props.loading === true  ? null :
          <TweetPage match={{params: {id: '8xf0y6ziyjabvozdd253nd'}}}/>}               
      </div>
*/

function mapStateToProps ({ authedUser })
 {
  return 
  {    
     loading: authedUser === null
  }
}//end mapStateToProps

//export default App ;
//export default connect()(App)

export default connect(mapStateToProps)(App) 