export const UserDetails = ({name, isOnline, hideOffline, isPremium, isNewUser, role}) => {
    if (hideOffline && !isOnline){
        return null;/*react way of saying not showing anything*/
    }
    let roleBatch = null;
    if (role === 'admin'){
        roleBatch = <span style={{color: 'red'}}>Admin</span>
    }else if (role === 'moderator'){
        roleBatch = <span style={{color: 'blue'}}>Moderator</span>
    } else { roleBatch = <span style={{color: 'blue'}}> UH ARE NORMAL USER</span>}
        if (isOnline){
        return (
            <div>
                <h3>{name}
                    {isPremium && <span style={{ color: 'red' }}> ❤️</span>}
                    {isNewUser && <span style={{ color: 'blue' }}> (New User)</span>}
                </h3>
                <p>{isOnline ? "Online" : "Offline"}</p>
                <p>Available for talking</p>
                <button>Send Message</button>
            </div>
        )
    }
    return ( <div>
        <h1>{name}</h1>
        <p>{isOnline? 'Online': 'Offline'}</p>
        <p>Not available for talking</p>
    </div>)
}