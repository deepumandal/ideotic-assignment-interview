import React, { useState } from "react";
// import Allroute from './components/Allroute'
// import Navbar from './components/Navbar'

const Navbar = React.lazy(() => import("./components/Navbar"));
const Allroute = React.lazy(() => import("./components/Allroute"));
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Allroute />
    </>
  );
}

export default App;
