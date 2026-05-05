export const CardWrapper = ({title, children})=>{
    return(
        <div className="card">
            <h2>{title}</h2>
            <div className="card-content">
                
                {children}
            </div>
        </div>
    );
}
/*children is a special prop that is used to pass the content,
it can be anything html tag component or even function
also comment is render?->*/
/*simply it can be taken as placeholder that can be filled*/