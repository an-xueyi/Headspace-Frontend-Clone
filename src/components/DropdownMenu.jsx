import { Link } from "react-router-dom";

const DropdownMenu = () => {
    return (
        <div>
            <div>
                <Link to='/'>Articles & Resources</Link>
                <Link to='/'>Meditation</Link>
                <Link to='/'>Sleep</Link>
                <Link to='/'>Mindfulness</Link>
                <Link to='/'>Mental Health</Link>
            </div>
            <div>
                <Link to='/'>Plans</Link>
                <Link to='/'>For business</Link>
                <Link to='/'>About</Link>
                <Link to='/'>Help</Link>
                <Link to='/'>Log in</Link>
            </div>
        </div>
    )
}

export default DropdownMenu