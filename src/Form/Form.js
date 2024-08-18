import './Form.css'
import { useState } from 'react' 

export const Form = ({handlePhrase}) => {
    const [selectedPhrase, setSelectedPhrase] = useState('')

    const handleChange = (event) => {
        const phrase = event.target.value
        handlePhrase(phrase)
        setSelectedPhrase('')
    }

    return (
        <>
        Filter By Author: 
        <select name="phrase" 
                value={selectedPhrase} 
                onChange={handleChange}
        >
            <option value="" disabled selected>Select Source</option>
            <option value="Harris">Harris</option>
            <option value="Trump">Trump</option>
            <option value="Walz">Walz</option>
            <option value="Vance">Vance</option>
            <option value="Musk">Musk</option>
            <option value="Crypto">Crypto</option>
        </select>
        </>
    )
}

// Filter By Author: 
// <select name="author" 
//         value={selectedAuthor} 
//         onChange={handleChange}
// >
//     <option value="" disabled selected>Select Source</option>
//     <option value="CNN">CNN</option>
//     <option value="PBS NewsHour">PBS NewsHour</option>
//     <option value="The Associated Press">The Associated Press</option>
//     <option value="The New York Times">The New York Times</option>
//     <option value="The Wall Street Journal">The Wall Street Journal</option>
//     <option value="The Washington Post">The Washington Post</option>
// </select>
// </>