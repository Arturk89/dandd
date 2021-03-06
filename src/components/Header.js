import React, { useEffect, useRef, useState } from 'react'


const Header = ({headerObj}) => {

    const [headerItem, setHeaderItem] = useState([]);
    const [displayItems, setDisplayItems] = useState([]);
    const headerRefElement = useRef(null);

    useEffect(() => {
        if (headerObj.length) {
            setHeaderItem(headerObj)
        }
    }, [])


    return (
        <div className="header">
            {
                headerItem?.map((item, index) => (
                    <div key={`${item}_${index}`} 
                         className="header__item" 
                         draggable 
                         data-name={item.title}>
                        {item.title}
                    </div>
                ))
            }
        </div>
    )
}

export default Header
