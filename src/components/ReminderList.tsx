import React from "react";
import Reminder from "../models/reminder";

interface ReminderListProps {
  items: Reminder[];
  updateReminder: (reminder: Reminder) => void;
  deleteReminder: (id: number) => void;
}

const ReminderList = ({
  items,
  deleteReminder,
  updateReminder,
}: ReminderListProps) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.id}. {item.title}
          <button
            className='btn btn-outline-secondary'
            type='button'
            onClick={() => updateReminder(item)}
          >
            Update
          </button>
          <button
            className='btn btn-outline-danger'
            type='button'
            onClick={() => deleteReminder(item.id)}
          >
            {" "}
            Delete{" "}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ReminderList;
