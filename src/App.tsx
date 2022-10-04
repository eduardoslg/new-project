import { BrowserRouter } from "react-router-dom"
import { Header } from "./components/Header";
import Router from './routes/Router'
import Global from './styles/global';

function App() {

  return (
    <BrowserRouter>
      <Global />
      <Header />
      <Router />
    </BrowserRouter>
  )
}

export default App
