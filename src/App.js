import { useEffect ,useRef , useState} from "react";
import Button from "./Button";
import Title from "./Title";
/**
 * you should use useRef, useCallback, memo, useState.
 * don't remove console logs,
 * check console before and after your chnages
 */
 export default function App() {
  console.log("App is rendering...");
  useEffect(() => console.log("== App rendered =="));

  /**
   * create two states called value1 and value 2
   */
  const [value1,setvalue1]=useState()
  const [value2,setvalue2]=useState()


  /**
   * create ref for each input (ref1, ref2) and pass them to input elements
   */
  const ref1 = useRef(null)
  const ref2 = useRef(null)

  const changeValue1 = () => {
    /**
     * get value of input from ref and set first state
     */
     setvalue1( ref1.current.value)
  };
  const changeValue2 = () => {
    /**
     * get value of input from ref and set second state
     */
    
     setvalue2( ref2.current.value)
  };
  return (
    <div className="App">
      <div className="value-1">
        first value: <Title>{/**pass first state */value1}</Title>
        <br />
        change first value:
        <input ref={ref1}/>
        <Button onClick={changeValue1}> change </Button>
      </div>
      <div className="value-2">
        second value: <Title>{/**pass second state */value2}</Title>
        <br />
        change second value:
        <input ref={ref2}/>
        <Button onChange={changeValue2}> change </Button>
      </div>
    </div>
  );
}

