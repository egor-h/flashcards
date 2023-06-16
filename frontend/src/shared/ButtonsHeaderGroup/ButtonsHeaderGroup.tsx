import React from 'react';
import './ButtonsHeaderGroup.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddIcon from '@mui/icons-material/Add';
function ButtonsHeaderGroup(): JSX.Element {
    return (
        <>
            <AddIcon style={{color: "white", width: "40px", height: "40px"}} className="plusSvg"/>
            <div className="notificationContainer">
                <NotificationsIcon />
            </div>
            <button className="userIcon">A</button>
            <button className="subscribeButton">Подписка бесплатна</button>
        </>
    );
}

export default ButtonsHeaderGroup;
