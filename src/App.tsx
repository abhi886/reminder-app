import React, { useEffect, useState } from "react";
import "./App.css";
import ReminderList from "./components/ReminderList";
import Reminder from "./models/reminder";
import apiClient from "./services/api-client";
import todosService from "./services/todos-service";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);
  function updateReminder(item: Reminder): any {
    const originalReminders = [...reminders];
    const updatedReminders = { ...item, title: item.title + "!" };
    setReminders(
      reminders.map((reminder) =>
        reminder.id === item.id ? updatedReminders : reminder
      )
    );
    apiClient.patch(`/todos/ ${item.id}`, updatedReminders).catch((err) => {
      console.log(err);
      setReminders(originalReminders);
    });
  }
  function createReminder() {
    const newTodos = {
      id: reminders.length + 1,
      title: "Added Title",
      userId: 1,
      completed: true,
    };
    todosService
      .create(newTodos)
      .then((res) => setReminders([newTodos, ...reminders]))
      .catch((err) => console.log(err));
  }
  function deleteReminder(id: number) {
    const originalReminders = [...reminders];
    setReminders(reminders.filter((reminder) => reminder.id !== id));
    apiClient.delete(`/todos/${id}`).catch((err) => {
      setReminders(originalReminders);
    });
  }
  useEffect(() => {
    const { request, cancel } = todosService.getAll<Reminder>();
    request
      .then((res) => {
        setReminders(res.data);
      })
      .catch((e) => console.log({ error: e }));
    return () => cancel();
  }, []);
  return (
    <div className='App'>
      <button
        className='btn btn-primary outline'
        onClick={() => {
          createReminder();
        }}
      >
        Add
      </button>
      <ReminderList
        items={reminders}
        updateReminder={updateReminder}
        deleteReminder={deleteReminder}
      />
    </div>
  );
}

export default App;
