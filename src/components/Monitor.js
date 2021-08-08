import React, { useState, useEffect} from 'react'

const Monitor = ({gridMonitor, dragOver, dragDrop}) => {

    const returnValue = (item) => {
        if (item === 'empty') {
            return item
        }else {
            return <div className="dropItem">{item}</div>
        }
    }
    return (
        <div className="monitor">
            <div className="monitor__content">
                {
                    gridMonitor.content && gridMonitor.content.map((item, index) => (
                        <div 
                            key={`${item}_${index}`} 
                            className="monitor__item"
                            data-id={item.id}
                            onDragOver={dragOver}
                            onDrop={dragDrop}
                            onDragEnd={dragDrop}
                        >
                        {returnValue(item.item)}
                        {/* {item.item} */}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Monitor
