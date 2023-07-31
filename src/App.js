import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Layout } from './styles/GlobalStyles';
import { HeaderContainer } from './components/HeaderContainer';
import { HomePage } from './pages/HomePage';
import { RotatePage } from './pages/RotatePage';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <HeaderContainer />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/rotate" element={<RotatePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
