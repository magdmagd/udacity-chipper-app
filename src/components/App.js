import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'


class App extends Component {

  componentDidMount() 
  {
    this.props.dispatch(handleInitialData())
  }//end componentDidMount() 

  render() {
    return (
      <div>
        Starter Code
      </div>
    )
  }//end render
}//end class 

//export default App ;
export default connect()(App)