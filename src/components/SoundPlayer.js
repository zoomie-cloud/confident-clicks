import React, { useEffect } from "react";
import Audio from "../assets/audio";
import { GlobalContext } from "../hooks/provider";
import { changeAudio } from "../hooks/actions";


function SoundPlayer() {

    const [state, dispatch] = React.useContext(GlobalContext)
    const {audio} = state

    useEffect(()=> {}, [audio])
   
    let file = `Aud${audio}`;
  
    return <audio autoPlay="autoPlay" src={Audio[file]} ></audio>;
}

export default SoundPlayer