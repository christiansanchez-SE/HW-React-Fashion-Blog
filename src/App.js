import './App.css';
import Footer from './components/Footer';
import ImageTitleOne from './components/ImageTitleOne';
import ImageTitleTwo from './components/ImageTitleTwo';
import Slogan from './components/Slogan';
import TitlePage from './components/TitlePage';
import Categories from './components/categories';

function App() {
  return (
    <div className="App">
      <TitlePage/>
      <Slogan/>
      <Categories/>
      <ImageTitleOne/>
      <ImageTitleTwo/>
      <Footer/>
    </div>
  );
}

export default App;
