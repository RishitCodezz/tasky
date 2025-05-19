function openTab(tabId) {
  const tabs = document.querySelectorAll(".tab-content");
  tabs.forEach(tab => tab.classList.remove("active"));
  document.getElementById(tabId).classList.add("active");
}

function addTask() {
  const input = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  if (input.value.trim() !== "") {
    const li = createListItem(input.value);
    taskList.appendChild(li);
    input.value = "";
  }
}

function addComplaint() {
  const input = document.getElementById("complaintInput");
  const list = document.getElementById("complaintList");
  if (input.value.trim() !== "") {
    const li = createListItem(input.value);
    list.appendChild(li);
    input.value = "";
  }
}

function addWish() {
  const input = document.getElementById("wishInput");
  const list = document.getElementById("wishList");
  if (input.value.trim() !== "") {
    const li = createListItem(input.value);
    list.appendChild(li);
    input.value = "";
  }
}

// 🍭 Create list item with delete button
function createListItem(text) {
  const li = document.createElement("li");
  li.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.onclick = () => li.remove();

  li.appendChild(deleteBtn);
  return li;
}

// Image Upload
document.getElementById("imageUpload").addEventListener("change", function () {
  const preview = document.getElementById("galleryPreview");
  const files = this.files;
  preview.innerHTML = "";

  for (const file of files) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const img = document.createElement("img");
      img.src = e.target.result;
      preview.appendChild(img);
    };
    reader.readAsDataURL(file);
  }
});
