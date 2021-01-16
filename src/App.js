import Search from "./components/Search"
import { useCookies } from 'react-cookie';


function App() {
  const [cookies, setCookie] = useCookies(['visitor']);

  function onChange(newName) {
    setCookie('name', newName, { path: '/' });
  }
  
  return (
    <Search name = {cookies.name}/>
  );
}

export default App;
