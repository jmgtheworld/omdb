import Search from "./components/Search"
import { useCookies } from 'react-cookie';


function App() {
  const [cookies, setCookie] = useCookies(['visitor']);

  return (
    <Search name = {cookies.name}/>
  );
}

export default App;
