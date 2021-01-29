import React from 'react'
import Game from './components/game/Game'
import images1 from './image/Deaglan.jpg'
import images2 from'./image/peninah.jpg'
 import images3 from'./image/Mets.jpg'
 import images4 from'./image/Woode.jpg'
function App(props) {
  const Deaglan = {
    name: 'Deaglan club',
    logoSrc:images1
  }

  const Peninah = {
    name: 'peninah fc',
    logoSrc:images2
  }

  const Didas = {
    name: 'Didas Mets',
    logoSrc:images3
  }

  const Devine = {
    name: 'Devine Woode',
    logoSrc:images4
  }

  return (
    <div className="App">
      <Game
        venue="Namboole stadium"
        homeTeam={Peninah}
        visitingTeam={Deaglan}
      />
      <Game
        venue="lugogo stadium"
        homeTeam={Didas}
        visitingTeam={Devine}
      />
    </div>
  )
}

export default App;
