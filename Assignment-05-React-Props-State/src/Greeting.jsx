
function Greeting(props) {
    return (
        <div className="greeting">
            {props.userName
                ? `Hello, ${props.userName}! Welcome to our React app.`
                : "Please enter your name above."}
        </div>
    );
}

export default Greeting;
