import React, { useState, useEffect } from 'react';
import Clock from './Clock';
function App() {
  const [saatGoster, saatGosterGuncelle] = useState(true)

  return (
    <div>
       {saatGoster ? <Clock /> : ""}
    </div>
  )
}

export default App;
