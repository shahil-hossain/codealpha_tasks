function addTask() {
  const titleInput = document.getElementById("task-title");
  const dateInput = document.getElementById("task-date");
  const timeInput = document.getElementById("task-time");

  const title = titleInput.value.trim();
  const date = dateInput.value;
  const time = timeInput.value;

  if (!title || !date || !time) {
    alert("Please enter task, date, and time.");
    return;
  }

  const li = document.createElement("li");

  const taskText = document.createElement("div");
  taskText.className = "task-text";
  taskText.textContent = title;
  taskText.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  const taskMeta = document.createElement("div");
  taskMeta.className = "task-meta";
  taskMeta.textContent = `📅 ${date} ⏰ ${time}`;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = () => li.remove();

  li.appendChild(taskText);
  li.appendChild(taskMeta);
  li.appendChild(deleteBtn);

  document.getElementById("task-list").appendChild(li);

  // Clear inputs
  titleInput.value = "";
  dateInput.value = "";
  timeInput.value = "";
}
