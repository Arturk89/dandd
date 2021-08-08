import React from 'react'
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import AddIcon from '@material-ui/icons/Add';

const Options = ({changeLeft, changeRight, active, addNew, allMonitors}) => {
    return (
        <div className="options">
            <div className="options__content">
                  <ArrowLeftIcon onClick={changeLeft} />
                    <div className="options__item">
                       {active} / {allMonitors}
                    </div>
                  <ArrowRightIcon onClick={changeRight} />
            </div>
            <div className="options__add">
                <AddIcon onClick={addNew} />
                Dodaj nowy pulpit
            </div>
        </div>
    )
}

export default Options
