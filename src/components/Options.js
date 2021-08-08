import React from 'react'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const Options = ({changeLeft, changeRight, active}) => {
    return (
        <div className="options">
            <div className="options__content">
                  <ArrowLeftIcon onClick={changeLeft} />
                    <div className="options__item">
                       {active}
                    </div>
                  <ArrowRightIcon onClick={changeRight} />
            </div>
        </div>
    )
}

export default Options
