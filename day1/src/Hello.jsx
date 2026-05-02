import React from 'react';
export const Hello = () => {
    return (
        <div id="container">
            <h1>Hello World</h1>
        </div>
    );
};
/*code showing element without jsx*/
export const HelloWithoutJsx = () => {
    return React.createElement(
        "div",{id:"container"}, 
        React.createElement("h1", null, "Hello world without jsx")
     );
};