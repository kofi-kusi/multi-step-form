function Header(props) {
    return (
        <header>
            <h1>{props.title}</h1>
            <p className="instructions">{props.instructions}</p>
        </header>
    )
}

export default Header