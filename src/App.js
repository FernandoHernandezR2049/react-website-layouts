//import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.scoped.css';
import ColumnsPreviewCard from './pages/ColumnsPreviewCard/ColumnsPreviewCard';
import Home from './pages/Home/Home';
import NavigationMenu from './shared-components/NavigationMenu/NavigationMenu';
import FourCardFeatureSection from './pages/FourCardFeatureSection/FourCardFeatureSection';
import SinglePriceGrid from './pages/SinglePriceGrid/SinglePriceGrid';

function App() {
  return (
    <div className="App">
      <NavigationMenu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/columns-preview-card' element={<ColumnsPreviewCard />} />
        <Route path='/four-card-feature-section' element={<FourCardFeatureSection />} />
        <Route path='/single-price-grid' element={<SinglePriceGrid />} />
      </Routes>
    </div>
  );
}

export default App;
