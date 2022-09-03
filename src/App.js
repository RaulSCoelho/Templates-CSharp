import { Route, Routes } from 'react-router-dom';

import GlobalStyle from './components/Global';
import { TemplateProvider } from './context/TemplateContext';
import Home from './routes/Home';

function App() {
  return (
    <TemplateProvider>
      <Routes>
        <Route path="/" element={<Home />} exact />
      </Routes>
      <GlobalStyle />
    </TemplateProvider>
  );
}

export default App;
