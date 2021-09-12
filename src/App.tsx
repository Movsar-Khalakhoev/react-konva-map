import React from "react"
import {Redirect, Route, Switch} from "react-router-dom"
import MnemonicScheme from "./pages/MnemonicScheme"
import AdminPanel from "./pages/AdminPanel/AdminPanel"

function App() {
  return (
    <Switch>
      <Route path='/mnemonic-scheme' component={MnemonicScheme} />
      <Route path='/admin-panel' component={AdminPanel} />
      <Redirect to='/admin-panel' />
    </Switch>
  )
}

export default App
