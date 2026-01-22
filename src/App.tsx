import './App.css'
import Header from './components/Header'
import { ThemeProvider } from './components/ThemeProvider'


function App() {


  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  )
}

export default App
