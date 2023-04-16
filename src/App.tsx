import React, { useState } from "react";
import "./App.css";
import ReminderList from "./components/ReminderList";
import Reminder from "./models/reminder";

function App() {
  const [reminders] = useState<Reminder[]>([
    {
      id: 1,
      title: "first",
    },
    {
      id: 2,
      title: "second",
    },
  ]);
  return (
    <div className='App'>
      <ReminderList items={reminders} />
    </div>
  );
}

export default App;
