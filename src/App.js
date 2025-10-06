import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ArticleMain from "./Pages/ArticlesMain";
import Credits from "./Pages/Credits";
import LetterFromEditor from "./Pages/LetterFromEditor";

function App() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <LetterFromEditor />
      <ArticleMain />
      <Credits />
    </>
  );
}


export default App;
