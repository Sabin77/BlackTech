import React, { useState, useEffect } from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

export default function Todo() {
  const [task, setTask] = useState({ title: "", description: "" });
  const [list, setList] = useState(
    () => JSON.parse(localStorage.getItem("todolist")) || []
  );
  const [editedTask, setEditedTask] = useState({ title: "", description: "" });
  const [editingIndex, setEditingIndex] = useState(null);
  const [completedCount, setCompletedCount] = useState(0);
  console.log(list);
  console.log(localStorage.getItem("todolist"));

  // Load list from localStorage on component mount
  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("todolist"));
    console.log(storedList);
    if (storedList) {
      setList(storedList);
      updateCompletedCount(storedList);
    }
  }, []);

  // Save list to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("todolist", JSON.stringify(list));
    updateCompletedCount(list);
  }, [list]);

  const handleTitleChange = (e) => {
    setTask({ ...task, title: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    setTask({ ...task, description: e.target.value });
  };

  const addArrayOfTasks = () => {
    if (task.title && task.description) {
      setList((prevArray) => [...prevArray, { ...task, completed: false }]);
      setTask({ title: "", description: "" });
    }
  };

  //function to update task completion
  const updateCompletedCount = (tasks) => {
    const completedTasks = tasks.filter((task) => task.completed);
    setCompletedCount(completedTasks.length);
    console.log(completedCount);
  };

  //function to handle task completion
  const handleTaskCompletion = (index) => {
    const updatedList = [...list];
    updatedList[index].completed = !updatedList[index].completed;
    setList(updatedList);
  };

  const handleEditList = (index) => {
    setEditingIndex(index);
    setEditedTask(list[index]);
  };

  const handleSaveList = () => {
    const updatedList = [...list];
    updatedList[editingIndex] = editedTask;
    setList(updatedList);
    setEditingIndex(null);
    setEditedTask({ title: "", description: "" });
  };

  const deleteList = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  return (
    <>
      <div className="todoContainer flex flex-col bg-black border-4 rounded-lg h-1/2 container sm:w-3/5 sm:mx-auto ">
        <h1 className=" font-serif text-2xl font-bold my-4 text-center gradient-text gradient-text-blue ">
          Todo App
        </h1>
        <div className=" w-full flex flex-col items-center justify-center py-4">
          <div className="flex items-center ml-6 sm:mr-10">
            <h1 className=" font-bold text-xl mr-2">Title:</h1>
            <textarea
              className=" border-2 rounded-md  bg-gray-400"
              onChange={handleTitleChange}
              value={task.title}
              placeholder="Title"
              id="title"
              cols="25"
              rows="2"
            />
          </div>
          <div className="flex items-center mr-10 sm:mr-20">
            <h1 className=" font-bold text-xl mr-2">Description:</h1>
            <textarea
              className=" border-2 rounded-md my-2 bg-gray-400"
              onChange={handleDescriptionChange}
              value={task.description}
              placeholder="Description"
              id="description"
              cols="25"
              rows="2"
            />
          </div>
          <button
            className=" border-2 rounded-lg align-middle px-2 bg-gray-700 ml-12"
            onClick={addArrayOfTasks}
          >
            Add
          </button>
        </div>

        <p className=" text-xl text-center">
          Completed: {completedCount}/{list.length}
        </p>

        <div className=" list border-2 rounded-md my-4 mx-8 h-full px-2 ">
          {list && list.length > 0 && (
            <ol>
              {list?.map((tsk, index) => (
                <li
                  key={index}
                  className="flex flex-col border-b-2 py-2 my-2 items-center sm:flex-row"
                >
                  <input
                    type="checkbox"
                    checked={tsk.completed}
                    onChange={() => handleTaskCompletion(index)}
                  />
                  {editingIndex === index ? (
                    <>
                      <input
                        className="mx-2 text-black border-2 border-red-600"
                        type="text"
                        placeholder="Title"
                        value={editedTask.title}
                        onChange={(e) =>
                          setEditedTask({
                            ...editedTask,
                            title: e.target.value,
                          })
                        }
                      />
                      <input
                        className="mx-2 text-black border-2 border-red-600"
                        type="text"
                        value={editedTask.description}
                        onChange={(e) =>
                          setEditedTask({
                            ...editedTask,
                            description: e.target.value,
                          })
                        }
                      />

                      <button
                        className="taskButton bg-gray-600 mr-3 px-2 rounded-md hover:bg-slate-500"
                        onClick={handleSaveList}
                      >
                        Save
                      </button>
                    </>
                  ) : (
                    <>
                      <p className="font-bold text-lg mx-1 whitespace-nowrap">
                        {index + 1}. {tsk.title} :
                      </p>

                      <p className=" ml-2  text-left ">{` ${tsk.description}`}</p>

                      <div className=" sm:ml-auto flex flex-row justify-center  ">
                        <button
                          className=" border-2 rounded-lg px-2 py-1 hover:bg-slate-400"
                          onClick={() => handleEditList(index)}
                        >
                          <FaEdit />
                        </button>
                        <button
                          className=" border-2 rounded-lg px-2 py-1 ml-2 hover:bg-slate-400"
                          onClick={() => deleteList(index)}
                        >
                          <MdOutlineDeleteForever />
                        </button>
                      </div>
                    </>
                  )}
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </>
  );
}
