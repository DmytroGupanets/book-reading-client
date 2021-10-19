import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewBookOperation } from '../../redux/books/booksOperations';
import { LibraryEmptyStyled } from './LibraryEmptyStyled';

const initialState = {
       title: "",
       author: "",
       year: "",
       pages: "",
       book: {}     
}

const LibraryEmpty = () => {
    const [state, setState] = useState(initialState);
    const dispatch = useDispatch()

    const onHandleChange = (e) => {
        const { name, value } = e.target;
        setState((prev) => ({ ...prev, [name]: value }));
    }

    const onHandleSubmit = (e) => {
       e.preventDefault();

       dispatch(addNewBookOperation(state))
       setState({ ...initialState });
    }

    return (
        
        <LibraryEmptyStyled  onSubmit={onHandleSubmit}>
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
            name="author"
            value={state.author}
            placeholder="..."
            className="aboutBookInput aboutBookInput-author"
            onChange={onHandleChange}
            />
            </label>
            <label className="aboutBook aboutBook-year">
            Рік випуску
            <input 
            type="text"
            name="year"
            value={state.year}
            placeholder="..."
            className="aboutBookInput aboutBookInput-year"
            onChange={onHandleChange}
            />
            </label>
            <label className="aboutBook aboutBook-page">
            Кількість сторінок
            <input 
            type="text"
            name="pages"
            value={state.pages}
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