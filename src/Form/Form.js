import './Form.css'
import { useState } from 'react' 

export const Form = ({handleAuthor}) => {
    const [selectedAuthor, setSelectedAuthor] = useState('')

    const handleChange = (event) => {
        const author = event.target.value
        handleAuthor(author)
        setSelectedAuthor('')
    }

    return (
        <>
        Filter By Author: 
        <select name="author" 
                value={selectedAuthor} 
                onChange={handleChange}
        >
            <option value="" disabled selected>Select Source</option>
            <option value="CNN">CNN</option>
            <option value="PBS NewsHour">PBS NewsHour</option>
            <option value="The Associated Press">The Associated Press</option>
            <option value="The New York Times">The New York Times</option>
            <option value="The Wall Street Journal">The Wall Street Journal</option>
            <option value="The Washington Post">The Washington Post</option>
        </select>
        </>
    )
}