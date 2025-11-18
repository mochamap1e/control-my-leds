import { useState } from "react";

export default function() {
    const [state, setState] = useState("on");
    const [brightness, setBrightness] = useState(100)

    const wrapperClass = "flex flex-col items-center w-[40%] gap-4";
    return (
        <div className="bg-crust flex flex-col items-center justify-center gap-10">
            <h1>Controls</h1>
            
            <div className={wrapperClass}>
                <label>State: {state}</label>
                <button>Turn on</button>
                <button>Turn off</button>
            </div>

            <div className={wrapperClass}>
                <label>Brightness: {brightness}</label>
                <input type="range" min="1" value={brightness} onChange={ (e) => setBrightness(e.target.value) }></input>
            </div>
        </div>
    )
}