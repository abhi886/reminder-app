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
    <ul className='list-group'>
      {items.map((item) => (
        <li className='list-group-item' key={item.id}>
          {item.id}. {item.title}
          <div className='d-flex justify-content-end'>
            <button
              className='btn btn-outline-secondary'
              type='button'
              onClick={() => updateReminder(item)}
            >
              Update
            </button>
            <button
              className='btn btn-outline-danger ml-4'
              type='button'
              onClick={() => deleteReminder(item.id)}
            >
              {" "}
              Delete{" "}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ReminderList;
