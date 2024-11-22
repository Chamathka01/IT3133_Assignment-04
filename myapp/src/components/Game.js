import { useState } from "react";
import animals from "../data/AnimalsDb";

export default function Game(){
    const [targetAnimal, setTargetAnimal]=useState(null);
    const [result, setResult] = useState(null);

    function getRandomAnimal(){
        const randomIndex=Math.floor(Math.random()*animals.length);
        return animals[randomIndex];
    }
    const handleClick=(id)=>{
        if(id==targetAnimal.id){
            setResult("Win");
        }else{
            setResult("Lose");
        }
    }

    const restartGame=()=>{
        setTargetAnimal(getRandomAnimal());
        setResult(null);
    };

    return(
        <>
        <div className="game-page">
            <div>
                <h1>Animal Matching Game</h1>
            </div>
            <div>
                <div>
                    {result && (
                        <div className="result">
                            <h2>Result</h2>
                            <h2>{result}</h2>
                            <button onClick={restartGame}>Play Again</button>
                        </div>
                    )}
                </div>
        </>
    )
}