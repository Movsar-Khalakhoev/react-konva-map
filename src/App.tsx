import React from "react"
import {Redirect, Route, Switch} from "react-router-dom"
import MnemonicScheme from "./pages/MnemonicScheme/MnemonicScheme"
import AdminPanel from "./pages/AdminPanel/AdminPanel"
import Online from "./pages/Online/Online"

function App() {
  return (
    <Switch>
      <Route path='/mnemonic-scheme' component={MnemonicScheme} />
      <Route path='/admin-panel' component={AdminPanel} />
      <Route path='/online' component={Online} />
      <Redirect to='/admin-panel' />
    </Switch>
  )
}

export default App
