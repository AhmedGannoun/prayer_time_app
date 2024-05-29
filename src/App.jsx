import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainComp from './components/mainComp';
import { Container } from '@mui/material';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{display: 'flex', justifyContent: "center" , width: "100vw"}}>
        <Container>
          <MainComp />
        </Container>
      </div>

    </>
  )
}

export default App
