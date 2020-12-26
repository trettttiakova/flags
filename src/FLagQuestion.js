import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import OptionBlock from "./OptionBlock";

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function FlagQuestion({ setCorrect, correct, setIncorrect, incorrect }) {
    const { data } = useContext(AppContext);

    const increaseCorrect = () => {
        setCorrect(correct + 1);
    };
    const increaseIncorrect = () => {
        setIncorrect(incorrect + 1);
    };

    const random = getRandomInt(data.length);
    const country = data[random].name;
    let options = [];
    options.push(data[random].alpha2Code.toLowerCase());
    for (let i = 0; i < 3; i++) {
        let fakeRandom = getRandomInt(data.length);
        while (fakeRandom === random) {
            fakeRandom = getRandomInt(data.length);
        }
        options.push(data[fakeRandom].alpha2Code.toLowerCase());
    }
    let indexes = [0, 1, 2, 3].sort(() => .5 - Math.random());

    return(
        <div className="Question">
            <h2 className="QuestionTitle">{country}</h2>
            <OptionBlock 
                options={options} 
                increaseCorrect={increaseCorrect} 
                increaseIncorrect={increaseIncorrect}
                indexes={indexes}
            />
        </div>
    );
}

export default FlagQuestion;