import { useState } from 'react';

import './App.css';

function App() {
  const [count] = useState(0);

  return <div>test {count}</div>;
}

export default App;
