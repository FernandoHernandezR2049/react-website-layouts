//import logo from './logo.svg';
import { Link, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import ColumnsPreviewCard from './pages/ColumnsPreviewCard/ColumnsPreviewCard';
import Home from './pages/Home/Home';
import NavigationMenu from './shared-components/NavigationMenu/NavigationMenu';

function App() {
  return (
    <div className="App">
      <NavigationMenu />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/columns-preview-card' element={<ColumnsPreviewCard />} />
      </Routes>
    </div>
  );
}

export default App;
