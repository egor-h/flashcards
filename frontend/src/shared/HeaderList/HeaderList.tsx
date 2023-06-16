import React from 'react';
import './HeaderList.css';
import {Link} from "react-router-dom";
function HeaderList(): JSX.Element {
    return (
        <>
            <div>
                <Link to="/main">
                    <label>Главная</label>
                </Link>
            </div>
            <div>
                <Link to="/library">
                    <label>Ваша библиотека</label>
                </Link>
            </div>
            <div>
                <Link to="/experts">
                    <label>Решения от экспертов</label>
                </Link>
            </div>
        </>
    );
}

export default HeaderList;
