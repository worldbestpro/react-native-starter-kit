import * as React from 'react'
import { Provider } from 'react-redux'
import codePush from 'react-native-code-push'
import { PersistGate } from 'redux-persist/integration/react'
import RootContainer from './root-container'
import { store, persistor } from '../reducers'

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <RootContainer />
        </PersistGate>
      </Provider>
    )
  }
}

export default App
