import './App.css'
import  {createContext, useState} from "react";
import Scene from "./components/Scene";
import Header from "./shared/Header";
import Footer from "./shared/Footer";

const typeAnyValue:any =()=>{};

export const AnimationContext = createContext({play:false,setPlay:typeAnyValue});
export const ModelNameContext = createContext({modelName:"",setModelName:typeAnyValue});

function App() {

    const [play, setPlay] = useState(true);
    const [modelName, setModelName] = useState("");


  return (
      <>
      <AnimationContext.Provider value={{ play, setPlay}}>
          <ModelNameContext.Provider value={{modelName, setModelName }}>
          <Header />
          <main>

                  <Scene />
          </main>
          </ModelNameContext.Provider>
          <Footer />
      </AnimationContext.Provider>

      </>
  )
}

export default App