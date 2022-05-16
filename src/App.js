import { Routes, Route } from 'react-router-dom'

import Home from './components/Home.js'
import CheckboxWithCircle from './components/CheckboxWithCircle/CheckboxWithCircle.js'
import LegendButton from './components/LegendButton/LegendButton.js'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="checkbox-with-circle" element={<CheckboxWithCircle />} />
        <Route path="legend-button" element={<LegendButton />} />
      </Route>
    </Routes>
  )
}

export default App
