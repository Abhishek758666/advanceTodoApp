// get Container
const TaskFormCon = document.querySelector(".createTask-form");
const taskForm = document.querySelector("#taskForm");
const taskLists = document.querySelector(".taskLists ul");
const searchForm = document.querySelector("#searchForm");

// get Inputs
let titleElem = document.querySelector("#title");
let descElem = document.querySelector("#desc");
let categoryElem = document.querySelector("#category");
let priorityElem = document.querySelector("#priority");
let deadlineElem = document.querySelector("#deadline");
let searchTask = document.querySelector("#searchTask");

// get Button
let closeForm = document.querySelector("#closeForm");
let openForm = document.querySelector(".createTask-btn");

// -------------form logic--------------------------
openForm.addEventListener("click", () => {
  TaskFormCon.style.display = "block";
});
closeForm.addEventListener("click", () => {
  TaskFormCon.style.display = "none";
});

function loadTask() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  taskLists.innerHTML = "";

  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.innerHTML = `
      <div class="li-up">
          <div class="title">${task.title}</div>
          <div class="category">${task.category}</div>
          <div class="deadline">${task.deadline} days</div>
          <div class="priority">${task.priority}</div>
      </div>
      <div class="li-mid">
          <div class="desc">${task.desc}</div>
      </div>
    `;

    let div = document.createElement("div");
    div.classList.add("li-down");

    let editBtn = document.createElement("button");
    editBtn.innerHTML = `<i class="ri-file-edit-line"></i>`;
    editBtn.addEventListener("click", () => {
      editTask(index);
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = `<i class="ri-delete-bin-6-line"></i>`;
    deleteBtn.addEventListener("click", () => {
      deleteTask(index);
    });

    div.appendChild(editBtn);
    div.appendChild(deleteBtn);
    li.appendChild(div);

    taskLists.appendChild(li);
  });
}

function saveTask(tasks) {
  console.log("save task", tasks);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function deleteTask(index) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.splice(index, 1);
  saveTask(tasks);
  loadTask();
  console.log("deleted");
}

function editTask(index) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const task = tasks[index];

  titleElem.value = task.title;
  descElem.value = task.desc;
  categoryElem.value = task.category;
  priorityElem.value = task.priority;
  deadlineElem.value = task.deadline;

  TaskFormCon.style.display = "block";

  tasks.splice(index, 1);

  saveTask(tasks);

  loadTask();
  console.log("edited");
}
function searchTasks() {
  taskLists.innerHTML = "";
  const searchVal = searchTask.value.trim().toLowerCase();
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const filteredTasks = tasks.filter((value, index) => {
    return value.title.toLowerCase().includes(searchVal);
  });

  filteredTasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.innerHTML = `
      <div class="li-up">
          <div class="title">${task.title}</div>
          <div class="category">${task.category}</div>
          <div class="deadline">${task.deadline}</div>
          <div class="priority">${task.priority}</div>
      </div>
      <div class="li-mid">
          <div class="desc">${task.desc}</div>
      </div>
    `;

    let div = document.createElement("div");
    div.classList.add("li-down");

    let editBtn = document.createElement("button");
    editBtn.innerHTML = `<i class="ri-file-edit-line"></i>`;
    editBtn.addEventListener("click", () => {
      editTask(index);
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = `<i class="ri-delete-bin-6-line"></i>`;
    deleteBtn.addEventListener("click", () => {
      deleteTask(index);
    });

    div.appendChild(editBtn);
    div.appendChild(deleteBtn);
    li.appendChild(div);

    taskLists.appendChild(li);
  });
}

function showDeadline() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  let sort = tasks.sort((a, b) => a.deadline - b.deadline);
  taskLists.innerHTML = "";

  sort.forEach((task, index) => {
    let li = document.createElement("li");
    li.innerHTML = `
      <div class="li-up">
          <div class="title">${task.title}</div>
          <div class="category">${task.category}</div>
          <div class="deadline">${task.deadline} days</div>
          <div class="priority">${task.priority}</div>
      </div>
      <div class="li-mid">
          <div class="desc">${task.desc}</div>
      </div>
    `;

    let div = document.createElement("div");
    div.classList.add("li-down");

    let editBtn = document.createElement("button");
    editBtn.innerHTML = `<i class="ri-file-edit-line"></i>`;
    editBtn.addEventListener("click", () => {
      editTask(index);
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = `<i class="ri-delete-bin-6-line"></i>`;
    deleteBtn.addEventListener("click", () => {
      deleteTask(index);
    });

    div.appendChild(editBtn);
    div.appendChild(deleteBtn);
    li.appendChild(div);

    taskLists.appendChild(li);
  });
}

function showPriority() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  function priorityValue(priority) {
    switch (priority) {
      case "low":
        return 1;
      case "medium":
        return 2;
      case "high":
        return 3;
      default:
        return 0;
    }
  }

  let sort = tasks.sort(
    (a, b) => priorityValue(b.priority) - priorityValue(a.priority)
  );
  taskLists.innerHTML = "";

  sort.forEach((task, index) => {
    let li = document.createElement("li");
    li.innerHTML = `
      <div class="li-up">
          <div class="title">${task.title}</div>
          <div class="category">${task.category}</div>
          <div class="deadline">${task.deadline} days</div>
          <div class="priority">${task.priority}</div>
      </div>
      <div class="li-mid">
          <div class="desc">${task.desc}</div>
      </div>
    `;

    let div = document.createElement("div");
    div.classList.add("li-down");

    let editBtn = document.createElement("button");
    editBtn.innerHTML = `<i class="ri-file-edit-line"></i>`;
    editBtn.addEventListener("click", () => {
      editTask(index);
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = `<i class="ri-delete-bin-6-line"></i>`;
    deleteBtn.addEventListener("click", () => {
      deleteTask(index);
    });

    div.appendChild(editBtn);
    div.appendChild(deleteBtn);
    li.appendChild(div);

    taskLists.appendChild(li);
  });
}
function showCategory() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  function categoryValue(category) {
    switch (category) {
      case "personal":
        return 1;
      case "work":
        return 2;
      case "school":
        return 3;
      default:
        return 0;
    }
  }

  let sort = tasks.sort(
    (a, b) => categoryValue(a.category) - categoryValue(b.category)
  );
  taskLists.innerHTML = "";

  sort.forEach((task, index) => {
    let li = document.createElement("li");
    li.innerHTML = `
      <div class="li-up">
          <div class="title">${task.title}</div>
          <div class="category">${task.category}</div>
          <div class="deadline">${task.deadline} days</div>
          <div class="priority">${task.priority}</div>
      </div>
      <div class="li-mid">
          <div class="desc">${task.desc}</div>
      </div>
    `;

    let div = document.createElement("div");
    div.classList.add("li-down");

    let editBtn = document.createElement("button");
    editBtn.innerHTML = `<i class="ri-file-edit-line"></i>`;
    editBtn.addEventListener("click", () => {
      editTask(index);
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = `<i class="ri-delete-bin-6-line"></i>`;
    deleteBtn.addEventListener("click", () => {
      deleteTask(index);
    });

    div.appendChild(editBtn);
    div.appendChild(deleteBtn);
    li.appendChild(div);

    taskLists.appendChild(li);
  });
}

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = {
    title: titleElem.value.trim(),
    desc: descElem.value.trim(),
    category: categoryElem.value.trim(),
    priority: priorityElem.value.trim(),
    deadline: deadlineElem.value.trim(),
  };
  console.log(task);
  if (task.title !== "") {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    console.log("form submit", tasks);
    tasks.push(task);
    saveTask(tasks);
    loadTask();
  }

  titleElem.value = "";
  descElem.value = "";
  deadlineElem.value = "";
});

searchForm.addEventListener("input", (e) => {
  e.preventDefault();
  searchTasks();
});

window.addEventListener("DOMContentLoaded", loadTask);

//-------------time logic-------------------
let dayElem = document.querySelector(".day");
let monthElem = document.querySelector(".month");
let yearElem = document.querySelector(".year");
let weekElem = document.querySelector(".week");
let timeElem = document.querySelector(".time");

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();
let week = date.getDay();
let minute = date.getMinutes();
let hour = date.getHours();

let monthWord = [
  "JAN",
  "FEB",
  "MAR",
  "APR",
  "MAY",
  "JUN",
  "JLY",
  "AUG",
  "SEP",
  "OCT",
  "NOV",
  "DEC",
];

let weekWord = [
  "SUNDAY",
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THRUSDAY",
  "FRIDAY",
  "SATURDAY",
];

dayElem.innerHTML = day;
monthElem.innerHTML = monthWord[month];
yearElem.innerHTML = year;
weekElem.innerHTML = weekWord[week];
timeElem.innerHTML = `${hour}:${minute}`;
