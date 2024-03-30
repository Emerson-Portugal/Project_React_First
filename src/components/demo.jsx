import { useState } from "react";

const Demo = () => {
    const [clicked, setClicked] = useState(false);

    const elemento = () => {
        setClicked(true);
    };

    console.log(clicked ? "Falso" : "Verdadero");

    return (
        <>
            <button 
                className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded" 
                onClick={elemento}
            >
                Click me
            </button>
        </>
    );
};

export default Demo;
