import './App.css';
import ImageTitleOne from './components/ImageTitleOne';
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

    </div>
  );
}

export default App;
