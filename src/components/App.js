import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'



class App extends Component {

  componentDidMount() 
  {
    this.props.dispatch(handleInitialData())
  }//end componentDidMount() 

  render() {
    return (
      <div>
       {this.props.loading === true  ? null : <Dashboard />}
      </div>
    )
  }//end render
}//end class 


function mapStateToProps ({ authedUser })
 {
  return {
    loading: authedUser === null
  }
}//end mapStateToProps

//export default App ;
//export default connect()(App)

export default connect(mapStateToProps)(App) 