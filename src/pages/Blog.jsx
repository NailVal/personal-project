import { NavLink } from "react-router"

function Blog() {

    return (
        <>
        <div>Blog page!</div>
        <button><NavLink to="/personal-project">Go back</NavLink></button>
        </>
    )
}

export default Blog