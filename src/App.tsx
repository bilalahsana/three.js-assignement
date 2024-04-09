import './App.css'
import React, {useEffect} from "react";
import Scene from "./components/Scene";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import axios from "axios";


function App() {
    useEffect(() => {
        fetch(`https://firebasestorage.googleapis.com/v0/b/threejs-be120.appspot.com/o/threejs-scene.json?alt=media&token=5681d972-4741-4a44-a069-4dcb74e41dd8`, {

            headers: {
                'Accept': '*/*' // Specify desired content type
            },
            mode: 'no-cors',
            referrerPolicy: 'strict-origin-when-cross-origin'
        })
            .then(res => {
                console.log(res)
            }).catch(error=>{
            console.log(error)
        })

    }, []);
  return (
      <>
          {/*<Header />*/}
          <main>
              <Scene />
          </main>
          {/*<Footer />*/}
      </>
  )
}

export default App
