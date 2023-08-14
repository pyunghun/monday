import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import LogInPage from './pages/LogInPage';
import Main from './pages/Main';
import SearchPage from './pages/SearchPage';
import Map2 from './pages/Map2';
import Map from './pages/Map';


function App() {
  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout/>}>
          <Route index element={ <Main/>}/>
          <Route path="searchpage" element={ <SearchPage/> }/>
          <Route path="main" element={ <Main/> }/>
          <Route path="loginpage" element={ <LogInPage/> }/>
          <Route path="map" element={ <Map/> }/>
        </Route>
      </Routes>
    </BrowserRouter> 
    </>
  );
}

export default App;
