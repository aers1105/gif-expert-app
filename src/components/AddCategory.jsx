import PropTypes from 'prop-types';
import { useState } from "react"

export default function AddCategory({ onNewCategory }) {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        setInputValue(target.value);
    }
    
    const onSubmit = (event) => {
        event.preventDefault();

        if (inputValue.trim().length <= 1) return;

        onNewCategory(inputValue.trim());

        setInputValue('');
    }

    return (

        <form onSubmit={onSubmit} aria-label="form">
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={(event) => onInputChange(event)}
            />
        </form>


    )
}

AddCategory.protoTypes = {
    onNewCategory: PropTypes.func.isRequired,
}
