function Header(props) {
    return (
        <>
            <h1>{props.title}</h1>
            <p className="instructions">{props.instructions}</p>
        </>
    )
}

export default Header