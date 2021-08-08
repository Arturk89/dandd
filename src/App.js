import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Monitor from './components/Monitor';
import Options from './components/Options';
import './App.css';

const headerObj =
[
    {
        id: 1,
        title: 'menu',
    },
    {
        id: 2,
        title: 'clock',
    },
    {
        id: 3,
        title: 'itinerary',
    },
    {
        id: 4,
        title: 'messages',
    },
    {
        id: 5,
        title: 'crew',
    }
]

const monitorGrid = [
  {
    id: 1,
    content: [
      {
        id: 1,
        item: 'empty'
      },
      {
        id: 2,
        item: 'empty'
      },
      {
        id: 3,
        item: 'empty'
      },
      {
        id: 4,
        item: 'empty'
      },
      {
        id: 5,
        item: 'empty'
      },
      {
        id: 6,
        item: 'empty'
      },
    ]
  },
  {
    id: 2,
    content: [
      {
        id: 1,
        item: 'empty'
      },
      {
        id: 2,
        item: 'empty'
      },
      {
        id: 3,
        item: 'empty'
      },
      {
        id: 4,
        item: 'empty'
      },
      {
        id: 5,
        item: 'empty'
      },
      {
        id: 6,
        item: 'empty'
      },
    ]
  }
]

function App() {

  //Wszystkie desktopy
  const [allMonitors, setAllMonitors] = useState([])
  //Wybrany desktop
  const [gridMonitor, setGridMonitor] = useState([])
  //aktywny desktop
  const [activeMonitor, setActiveMonitor] = useState(1);
  //Uchwycony item
  const [dragItem, setDragItem] = useState(null);

  const changeLeft = () => {
    if (activeMonitor === 1) return
    setActiveMonitor(activeMonitor - 1)
  }
    
  const changeRight = () => {
    if(activeMonitor === allMonitors.length) return
    setActiveMonitor(activeMonitor + 1)
  }

  const addNewDesktop = (e) => {
    const nextId = allMonitors.length + 1;
    if (nextId) {
      addDesktop(nextId)
    }
  }

  useEffect(() => {
    if (monitorGrid) {
      setAllMonitors(monitorGrid)
    }
  }, [monitorGrid])

  useEffect(() => {
    const active = allMonitors.filter(monitor => monitor.id === activeMonitor)
    if (active.length) {
      setGridMonitor(active[0])
    }else{
      setGridMonitor([])
    }
  }, [activeMonitor])

  function onDragStart(e) {
   const name = e.target.dataset.name
   setDragItem(name)
  }

  function onDragEnd(e) {
    const name = e.target.dataset.name;
    if (name) setDragItem(null)
  }

  function onDragOver(e) {
    e.preventDefault()
    const monitorId = e.target.dataset.id
    console.log(monitorId)
  }

  function onDragDrop(e) {
    e.preventDefault()
    const place = e.target.dataset.id

    
    gridMonitor.content.map(item => {
      if (item.id === Number(place)) {
        item.item = dragItem
      }
    })

    // console.log(gridMonitor)
    // setAllMonitors(allMonitors[gridMonitor.id] = gridMonitor)
  }

  function addDesktop(id) {

    const newDesktop = {
      id: id,
      content: [
        {
          id: 1,
          item: 'empty'
        },
        {
          id: 2,
          item: 'empty'
        },
        {
          id: 3,
          item: 'empty'
        },
        {
          id: 4,
          item: 'empty'
        },
        {
          id: 5,
          item: 'empty'
        },
        {
          id: 6,
          item: 'empty'
        },
      ]
      }

    if (newDesktop) {
      setAllMonitors([...allMonitors, newDesktop])
      alert('Dodano nowy pulpit')
    }
  }
  
  return (
    <div className="app">
      <Header headerObj={headerObj} dragStart={onDragStart} dragEnd={onDragEnd} />
      <Options changeLeft={changeLeft} changeRight={changeRight} active={activeMonitor} addNew={addNewDesktop} allMonitors={allMonitors.length} />
      <Monitor gridMonitor={gridMonitor} dragOver={onDragOver} dragDrop={onDragDrop} />
    </div>
  );
}

export default App