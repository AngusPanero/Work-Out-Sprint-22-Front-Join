import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import ItemDetailPage from "./ItemDetailPage";

const App = () => {
  const [ data, setData ] = useState([])
  const [ error, setError ] = useState(false)
  const [ loading, setLoading ] = useState(false)
  const url = "http://localhost:9875/"

  useEffect(() => {
    try {
      setLoading(true)
      const getData = async () => {
        const response = await fetch(url)
        const resData =  await response.json()
        setData(resData)
        console.log(data);
      }
      getData()

    } catch (error) {
      setError(error.message)

    } finally{
      setLoading(false)
    }
  }, [url])


  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
        </nav>

        {data === null ? (<div>Loaging</div>) : 
        <Routes>
          <Route path="/" element={<Home data={data}/>} />
          {data.map((item) => <Route key={item._id} path={`/${item._id}`} element={<ItemDetailPage item={item}/>} />)}
        </Routes>
        }

      </div>
    </Router>      
  )
};

export default App;
