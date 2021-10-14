import React, { useState } from 'react'
import { LibraryEmptyStyled } from './LibraryEmptyStyled';

const initialState = {
       title: "",
       author: "",
       year: "",
       page: 0,     
}

const LibraryEmpty = () => {
    const [state, setState] = useState(initialState);

    const onHandleChange = (e) => {
        const { name, value } = e.target;
        setState((prev) => ({ ...prev, [name]: value }));
    }

    const onHandleSubmit = (e) => {
       e.preventDefault();
       setState({ ...initialState });
    }

    return (
        
        <LibraryEmptyStyled  onClick={onHandleSubmit}>
            <div className="bookContainer">
            <label className="aboutBook aboutBook-title">
            Назва книги
            <input 
            type="text"
            name="title"
            value={state.title}
            placeholder="..."
            className="aboutBookInput aboutBookInput-title"
            onChange={onHandleChange}
            />
            </label>
            <div className="aboutBookContainer">
            <label className="aboutBook aboutBook-author">
            Автор книги
            <input 
            type="text"
            name="title"
            placeholder="..."
            className="aboutBookInput aboutBookInput-author"
            onChange={onHandleChange}
            />
            </label>
            <label className="aboutBook aboutBook-year">
            Рік випуску
            <input 
            type="text"
            name="title"
            placeholder="..."
            className="aboutBookInput aboutBookInput-year"
            onChange={onHandleChange}
            />
            </label>
            <label className="aboutBook aboutBook-page">
            Кількість сторінок
            <input 
            type="text"
            name="title"
            placeholder="..."
            className="aboutBookInput aboutBookInput-page"
            onChange={onHandleChange}
            />
            </label>
            </div>
            <button type="submit" className="addButton">Додати</button>
            </div>

        </LibraryEmptyStyled>
        
    );
}

export default LibraryEmpty;