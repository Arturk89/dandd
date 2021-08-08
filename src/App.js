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
        item: 'blank'
      },
      {
        id: 2,
        item: 'blank'
      },
      {
        id: 3,
        item: 'blank'
      },
      {
        id: 4,
        item: 'blank'
      },
      {
        id: 5,
        item: 'blank'
      },
      {
        id: 6,
        item: 'blank'
      },
    ]
  }
]

function App() {
  const [allMonitors, setAllMonitors] = useState([])
  const [gridMonitor, setGridMonitor] = useState([])
  const [activeMonitor, setActiveMonitor] = useState(1);

  const changeLeft = () => setActiveMonitor(activeMonitor - 1)
  const changeRight = () => setActiveMonitor(activeMonitor + 1)

  useEffect(() => {
    if (monitorGrid) {
      setAllMonitors(monitorGrid)
    }
  }, [])

  useEffect(() => {
    const active = allMonitors.filter(monitor => monitor.id === activeMonitor)
    if (active.length) {
      setGridMonitor(active[0])
    }
  }, [activeMonitor])

  return (
    <div className="app">
      <Header headerObj={headerObj} />
      <Options changeLeft={changeLeft} changeRight={changeRight} active={activeMonitor} />
      <Monitor gridMonitor={gridMonitor} />
    </div>
  );
}

export default App