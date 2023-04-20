import ReminderList from "../components/ReminderList";
import ReminderType from "../models/reminder";
import apiClient from "../services/api-client";
import todosService from "../services/todos-service";
import useTodos from "../hooks/useTodos";

const Reminder = () => {
  const { data, setData } = useTodos();
  function updateReminder(item: ReminderType): any {
    const originalReminders = [...data];
    const updatedReminders = { ...item, title: item.title + "!" };
    setData(
      data.map((remind) => (remind.id === item.id ? updatedReminders : remind))
    );
    apiClient.patch(`/todos/ ${item.id}`, updatedReminders).catch((err) => {
      console.log(err);
      setData(originalReminders);
    });
  }
  function createReminder() {
    const newTodos = {
      id: data.length + 1,
      title: "Added Title",
      userId: 1,
      completed: true,
    };
    todosService
      .create(newTodos)
      .then((res) => setData([newTodos, ...data]))
      .catch((err) => console.log(err));
  }
  function deleteReminder(id: number) {
    const originalReminders = [...data];
    setData(data.filter((d) => d.id !== id));
    apiClient.delete(`/todos/${id}`).catch((err) => {
      setData(originalReminders);
    });
  }
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
        items={data}
        updateReminder={updateReminder}
        deleteReminder={deleteReminder}
      />
    </div>
  );
};

export default Reminder;
