import React from "react";

function Button({ link, onClick }) {
    console.log("button rendered");
    return (
        <div 
            className="Button" 
            style={{ 
                backgroundImage: `url(${link})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundColor: "white",
            }}
            onClick={onClick}
        >
        </div>
    );
}

export default Button;