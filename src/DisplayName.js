import UserContext from "./UserContext";

function DisplayName() {
    return (
        <UserContext.Consumer>
            {
                function({ user }) {
                    console.log(user);
                    
                }
            }
        </UserContext.Consumer>
    )
    
}

export default DisplayName;