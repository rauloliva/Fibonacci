import Navbar from './components/Navbar'
import React, {useState} from 'react'
import Exercise from './components/Exercise'

const App = () => {
  const [state, setState] = useState({
    selectedTab: 'home'
  })

  const changeTab = tab => {
    setState({
      selectedTab: tab
    })
  }

  const displayTab = () => {
    switch (state.selectedTab) {
      case 'home':
        return (
          <div className="home_container">
            <h1 align="center">Welcome!</h1>
          </div>
        )
    
      default:
        return <Exercise />
    }
  }

  return (
    <div>
      <Navbar selectedTab={state.selectedTab} changeTab={changeTab}/>
      {displayTab()}
    </div>
  )
}

export default App;
