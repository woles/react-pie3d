import * as React from 'react'
import { Pie3D } from 'react-pie3d'

function App() {
  return (
    <div className="App" style={{ width: '100vh', height: '100vh' }}>
      <Pie3D data={[20, 30, 40, 60, 10, 20, 30, 40, 60, 10, 20, 30, 40, 60, 10]}/>
    </div>
  );
}

export default App
