import React, { useState } from 'react';
import FlagQuestion from './FLagQuestion';

function Game() {
    let [correct, setCorrect] = useState(0);
    let [incorrect, setIncorrect] = useState(0);

    return(
        <div>
            <h3 className="Counter">
                <span className="CorrectCounter">Correct: {correct} </span> 
                 / <span className="IncorrectCounter"> Incorrect: {incorrect}</span>
            </h3>
            <FlagQuestion 
                setCorrect={setCorrect} correct={correct}
                setIncorrect={setIncorrect} incorrect={incorrect}
            />
        </div>
    );
};

export default Game;