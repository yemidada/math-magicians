import { Suspense } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Calculator from './components/Calculator/Calculator';
import Quote from './components/Quote/Quote';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div />}>
        <Navigation />
        <div className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
