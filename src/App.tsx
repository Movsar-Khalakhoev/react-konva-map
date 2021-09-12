import React from "react"
import {Redirect, Route, Switch} from "react-router-dom"
import MnemonicScheme from "./pages/MnemonicScheme/MnemonicScheme"
import AdminPanel from "./pages/AdminPanel/AdminPanel"
import Online from "./pages/Online/Online"
import OnlineCamera from "./pages/OnlineCamera/OnlineCamera"

function App() {
  return (
    <Switch>
      <Route path='/mnemonic-scheme' component={MnemonicScheme} />
      <Route path='/admin-panel' component={AdminPanel} />
      <Route path='/online' component={Online} exact />
      <Route path='/online/camera' component={OnlineCamera} />
      <Redirect to='/admin-panel' />
    </Switch>
  )
}

export default App
