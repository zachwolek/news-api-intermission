import { Link } from 'react-router-dom'

export const ErrorPage = () => {
    return (
        <>
            <h2>Article info is not found!</h2>
            <Link to={`/`} className='button-container'>
                <h3>Please Return Home</h3>
            </Link>
        </>
    )
}