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
}