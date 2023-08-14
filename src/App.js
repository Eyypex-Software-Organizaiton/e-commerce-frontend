import AppRouter from './router/AppRouter'
import { AuthProvider } from './context/UserContext'

function App() {
  return (
    <>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </>
  )
}

export default App
