

export const UserProfile = () => {
    const name = "Apple";
    const author = "Around the world";
    return (
        <>
            <h2>Hellooooooo worldey, {name}</h2>
            <p>Author: {author}</p>
        </>);
};
/* 1. EACH PARENT MUST HAVE ONE PARENT: So React fragment is used to group list of childrens
 children wrapping using frament requires importing everytime
 so shortcut synta will be using empty tag <> </> */
 /*2. each tag must be closed; even the one selfclosing like img and br*/
 /*3. use camel casing for defining component and html attributes
    class-> className , for-> htmlFor, index= tabIndex ; class and form exception
    Shortcut for this will be ctrl + D */