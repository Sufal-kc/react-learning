export const Greetings = ({name="Guest", message="Hello"}) => {
return(
    <h2>{message}, {name}! </h2>
);
};
/*the null and the default value are different.
the default value is used when when the prop is missng
whereas null or zero is used if it passed explicitly->thats how js works*/
