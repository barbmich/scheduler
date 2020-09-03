import { useState } from 'react';

export default function useVisualMode(initialMode) {

  const [mode, setMode] = useState(initialMode)
  const [history, setHistory] = useState([])
  const transition = (newMode) => {
    setMode(newMode);
    setHistory([...history, mode]);
  }

  const back = () => {
    setMode(history[history.length-1]);
    const newHistory = [...history];
    newHistory.pop();
    setHistory(newHistory);
  }

  return { mode, transition, back }
}