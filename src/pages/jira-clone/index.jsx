import React, { useEffect, useState } from "react";

const categoryOptions = [
  {
    label: "Todo",
    category: "todo",
  },
  {
    label: "Progress",
    category: "progress",
  },
  {
    label: "Completed",
    category: "completed",
  },
];

function AddEditForm({
  mode = "add",
  taskCategory,
  taskName,
  setTaskCategory,
  setTaskName,
  addTask,
  editData,
  editTask,
}) {
  return (
    <form
      onSubmit={mode === "add" ? addTask : editTask}
      className="flex gap-4 items-center"
    >
      <input
        onChange={(e) => setTaskName(e.target.value)}
        value={taskName}
        placeholder="Add Task"
        type="text"
        className="input"
      />
      <select
        onChange={(e) => setTaskCategory(e.target.value)}
        placeholder="Select Category"
        value={taskCategory}
        name=""
        id=""
        className="input"
      >
        {categoryOptions.map((item) => (
          <option key={item.label} value={item.category}>
            {item.label}
          </option>
        ))}
      </select>

      <button>{mode === "add" ? "Add" : "Edit"} Task</button>
    </form>
  );
}

function JiraClone() {
  const [taskList, setTaskList] = useState({
    todo: [],
    progress: [],
    completed: [],
  });

  console.log(taskList);

  const [taskName, setTaskName] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const [editData, setEditData] = useState(undefined);

  const categories = () => {
    return Object.keys(taskList);
  };

  const editTask = (e) => {
    e.preventDefault();
    const {
      taskCategory: editTaskCategory,
      taskName: editTaskName,
      id,
    } = editData;

    if (!editTaskName || !editTaskCategory) {
      alert("filled up the required fields");
      return;
    }

    const editCategoryTaskList = taskList[editTaskCategory];
    const newCategoryTaskList = taskList[taskCategory];

    const filterEditTask = editCategoryTaskList.filter(
      (item) => item.id !== id
    );

    const filterNewTask = newCategoryTaskList.filter((item) => item.id !== id);

    setTaskList((prevState) => ({
      ...prevState,
      [editTaskCategory]: [...filterEditTask],
      [taskCategory]: [...filterNewTask, { id, taskName, taskCategory }],
    }));

    setEditData(undefined);
    console.log(taskList[taskCategory], "ta");
  };

  const addTask = (e) => {
    e.preventDefault();

    if (!taskName || !taskCategory) {
      alert("filled up the required fields");
      return;
    }

    const tempCategoryData = taskList[taskCategory];

    tempCategoryData.push({
      id: self.crypto.randomUUID(),
      taskName,
      taskCategory,
    });

    setTaskList((prev) => ({ ...prev, [taskCategory]: [...tempCategoryData] }));

    setTaskName("");
    setTaskCategory("");
  };

  const handleDelete = (item) => {
    if (!item) return;

    const { id, taskCategory } = item;

    const categoryTask = taskList[taskCategory];

    setTaskList((prevState) => ({
      ...prevState,
      [taskCategory]: [...categoryTask.filter((item) => item.id !== id)],
    }));
  };

  useEffect(() => {
    if (!editData) return;

    const { taskName, taskCategory } = editData;

    setTaskName(taskName);
    setTaskCategory(taskCategory);
  }, [editData]);

  return (
    <div className="">
      <p className="text-center text-6xl font-bold mt-12">Jira</p>

      <div className="mt-4 container mx-auto">
        <AddEditForm
          mode={editData ? "edit" : "add"}
          editData={editData}
          addTask={addTask}
          taskName={taskName}
          taskCategory={taskCategory}
          setTaskName={setTaskName}
          setTaskCategory={setTaskCategory}
          editTask={editTask}
        />

        <div className="mt-12 flex gap-12 items-center">
          {categories().map((category) => (
            <div key={category} className="min-h-96 p-6 w-1/3 border">
              <p className="text-2xl font-semibold text-center capitalize">
                {category}
              </p>

              <ul className="mt-4 flex flex-col items-center gap-4">
                {taskList?.[category]?.map((item) => (
                  <div key={item.id} className="flex gap-2 ">
                    <li key={item?.id}>{item?.taskName}</li>
                    <button
                      onClick={() => {
                        setEditData(item);
                      }}
                    >
                      edit
                    </button>
                    <button
                      onClick={() => {
                        handleDelete(item);
                      }}
                    >
                      delete
                    </button>
                  </div>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default JiraClone;
