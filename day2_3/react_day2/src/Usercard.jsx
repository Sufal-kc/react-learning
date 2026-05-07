import { UserInfo } from "./UserInfo";

export const UserCard = (props)=>{
    return(
        <div>
            <h2>User Details</h2>
            <UserInfo {...props} />
        </div>
    )
}
/*spread operator is used to pass all the props at once if the props are same
making code more cleaner and readable*/
export const UserCard = ({id, ...rest})=>{
    return(
        <div>
            <h2>User Details {id}</h2>
            <UserInfo {...rest} />
        </div>
    )
}
/*using both operator with the rest operator and normal operator*/