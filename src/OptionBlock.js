import React, { useState } from "react";
import Button from "./Button";

function getButton(iso, onClick, color) {
    const link = `https://flagcdn.com/160x120/${iso}.png`;
    return <Button link={link} onClick={onClick} />;
}

function OptionBlock({ options, increaseCorrect, increaseIncorrect, indexes }) {
    let [choice, setChoice] = useState(-1);
    let buttons = [];
    const trueButton = getButton(options[0], (event) => {
        event.target.style.backgroundColor = '#2cc956';
        setChoice(0);
        setTimeout(() => {
            event.target.style.backgroundColor = 'white';
            setChoice(-1);
            increaseCorrect();
        }, 1000);
    })
    buttons.push(trueButton);
    for (let i = 1; i < 4; i++) {
        buttons.push(getButton(options[i], (event) => {
            event.target.style.backgroundColor = '#f54251';
            setChoice(i); // TODO
            setTimeout(() => {
                event.target.style.backgroundColor = 'white';
                setChoice(-1);
                increaseIncorrect();
            }, 1000);
        }));
    }

    let after = [];
    for (let i = 0; i < 4; i++) {
        after.push(getButton(options[i], () => {}));
    }

    if (choice === -1) {
        return (
            <div className="Options">
                {buttons[indexes[0]]}
                {buttons[indexes[1]]}
                {buttons[indexes[2]]}
                {buttons[indexes[3]]}
            </div>
        );
    } else {
        return (
            <div className="Options">
                {after[indexes[0]]}
                {after[indexes[1]]}
                {after[indexes[2]]}
                {after[indexes[3]]}
            </div>
        );
    }
}

export default OptionBlock;