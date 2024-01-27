import './App.css'
import useStorage from './components/useStorage'

function App() {
  const [value, handleValue] = useStorage()

  return (
    <>
      <input type="text" onChange={(e)=> handleValue(e.target.value)} />
    </>
  )
}

export default App