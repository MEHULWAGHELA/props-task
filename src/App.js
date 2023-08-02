import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FormComponent from './components/FormComponent';
import { createContext, useEffect, useState } from 'react';
import CardComponent from './components/CardComponent';
function App() {
  let [array, setarray] = useState(JSON.parse(localStorage.getItem("array")) || [])
  let [count, setcount] = useState(JSON.parse(localStorage.getItem("count")) || 0)
  let [obj, setobj] = useState({ title: '', subtitle: '', image: '', information: '', button: '' })
  let [editobj, seteditobj] = useState({})
  let [editid, seteditid] = useState(0)

  useEffect(() => {
    localStorage.setItem("array", JSON.stringify(array || []));
    localStorage.setItem("count", JSON.stringify(count || 0));
  }, [array, count])


  useEffect(() => {
    setarray(JSON.parse(localStorage.getItem("array")))
    setcount(JSON.parse(localStorage.getItem("count")))
  }, [])
  return (
    <div>
      <div className='container'>
        <FormComponent data={{
          array: array,
          setarray: setarray,
          count: count,
          setcount: setcount,
          obj: obj,
          setobj: setobj,
          editobj: editobj,
          seteditobj: seteditobj,
          editid: editid,
          seteditid: seteditid
        }} />
        <CardComponent
          data={{
            array: array,
            setarray: setarray,
            count: count,
            setcount: setcount,
            obj: obj,
            setobj: setobj,
            editobj: editobj,
            seteditobj: seteditobj,
            editid: editid,
            seteditid: seteditid
          }} />
      </div>
    </div >
  );
}

export default App;
