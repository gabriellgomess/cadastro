import './App.css';
import ResponsiveAppBar from './components/appBar/appBar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pessoas from './pages/Pessoas';
import Mensagens from './pages/Mensagens';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const App = () => {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  
  return (
    <ThemeProvider theme={darkTheme}>
    <div className="App">
        <ResponsiveAppBar />
        <div className='main'>
            <Routes>
                <Route exact path='/cadastro/' element={<Home />} />
                <Route path='/cadastro/Pessoas' element={<Pessoas />} />
                <Route path='/cadastro/Mensagens' element={<Mensagens />} />
            </Routes>     
        
        </div>

    </div>
    </ThemeProvider>
  );
}

export default App;
