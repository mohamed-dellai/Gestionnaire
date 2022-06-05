

import {Info} from './components/Info.jsx'
import {Welcome} from './components/welcome.jsx'
import {Modifier} from './components/modifier.jsx'
import { Facture } from './components/facture.jsx'
import { Bordereau } from './components/bordereau.jsx'
import {BrowserRouter as Router , Routes ,Route} from 'react-router-dom'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome/>}></Route>
        <Route path="/info" element={<Info/>}></Route>
        <Route path="/modifier" element={<Modifier/>}></Route>
        <Route path="modifier/facture/:id" element={<Facture/>}></Route>
        <Route path="modifier/bordereau/:id" element={<Bordereau/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
