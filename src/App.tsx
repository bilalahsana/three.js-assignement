import './App.css'
import {createContext, useEffect, useState} from "react";
import Scene from "./components/Scene";
import Header from "./shared/Header";
import Footer from "./shared/Footer";

const typeAnyValue:any =()=>{};

export const AnimationContext = createContext({play:false,setPlay:typeAnyValue});
export const ModelNameContext = createContext({modelName:"",setModelName:typeAnyValue});

function App() {
    const [models,setModels] = useState([]);
    useEffect(() => {
        fetch("https://abxr-backend.s3.amazonaws.com/media/threejs_tests/threejs-scene.json")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                 setModels(data.models);
            })
            .catch(error => {
                console.error("Error fetching JSON data:", error);
            });
    }, []);

    const [play, setPlay] = useState(true);
    const [modelName, setModelName] = useState("");


  return (
      <>
      <AnimationContext.Provider value={{ play, setPlay}}>
          <ModelNameContext.Provider value={{modelName, setModelName }}>
          <Header />
          <main>
                  <Scene modelsArray={models}/>
          </main>
          </ModelNameContext.Provider>
          <Footer />
      </AnimationContext.Provider>

      </>
  )
}

export default App