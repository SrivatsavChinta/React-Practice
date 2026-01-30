const commentText = document.querySelector(".input");
const commentButton = document.querySelector(".btn-comment");
const commentsContainer = document.querySelector(".comments");

// creating a comment
const addNewComment = (value, parentContainer = commentsContainer) => {
  const comment = document.createElement("div");
  comment.setAttribute("class", "comment");

  const text = document.createElement("p");
  text.innerText = value;

  // action buttons
  const replyButton = document.createElement("button");
  replyButton.setAttribute("class", "btn-reply");
  replyButton.innerText = "Reply";

  const editButton = document.createElement("button");
  editButton.setAttribute("class", "btn-edit");
  editButton.innerText = "Edit";

  const deleteButton = document.createElement("button");
  deleteButton.setAttribute("class", "btn-delete");
  deleteButton.innerText = "Delete";

  const repliesContainer = document.createElement("div");
  repliesContainer.classList.add("replies");

  comment.append(text, replyButton, editButton, deleteButton, repliesContainer);
  parentContainer.appendChild(comment);
};

// button actions
const handleComment = () => {
  if (commentText.value.trim().length === 0) return;
  addNewComment(commentText.value);
  console.log(commentText.value);
  commentText.value = "";
};

// event listeners
commentButton.addEventListener("click", handleComment);

commentsContainer.addEventListener("click", (e) => {
  const comment = e.target.closest(".comment");

  if (e.target.classList.contains("btn-delete")) {
    console.log("delete clicked");
    comment.remove();
  }

  if (e.target.classList.contains("btn-reply")) {
    if (comment.querySelector(".reply-box")) return;
    console.log("reply clicked");

    const replyBox = document.createElement("div");
    replyBox.classList.add("comment-box", "reply-box");

    const input = document.createElement("input");
    input.classList.add("input", "reply-input");
    input.placeholder = "Reply something...";

    const button = document.createElement("button");
    button.classList.add("btn-comment", "reply-comment");
    button.innerText = "Reply";

    replyBox.append(input, button);
    comment.appendChild(replyBox);
  }

  if (e.target.classList.contains("reply-comment")) {
    const replyBox = e.target.closest(".reply-box");
    const replyText = replyBox.querySelector(".reply-input");
    const value = replyText.value.trim();
    if (!value) return;
    const parentContainer = e.target.closest(".comment");
    const repliesContainer = parentContainer.querySelector(".replies");

    replyBox.remove();
    addNewComment(value, repliesContainer);
  }

  if (e.target.classList.contains("btn-edit")) {
    if (comment.querySelector(".edit-box")) return;
    console.log("edit clicked");

    const text = comment.querySelector("p");

    const commentBox = document.createElement("div");
    commentBox.classList.add("comment-box", "edit-box");

    const input = document.createElement("input");
    input.classList.add("input", "edit-input");
    input.value = text.innerText;

    const saveButton = document.createElement("button");
    saveButton.classList.add("btn-comment", "save-comment");
    saveButton.innerText = "Save";

    const cancelButton = document.createElement("button");
    cancelButton.classList.add("btn-comment", "cancel-comment");
    cancelButton.innerText = "Cancel";

    commentBox.append(input, saveButton, cancelButton);
    comment.appendChild(commentBox);
  }

  if (e.target.classList.contains("save-comment")) {
    const editBox = e.target.closest(".edit-box");
    const input = editBox.querySelector(".edit-input");
    const comment = e.target.closest(".comment");
    const text = comment.querySelector("p");
    text.innerText = input.value;
    editBox.remove();
  }

  if (e.target.classList.contains("cancel-comment")) {
    const editBox = e.target.closest(".edit-box");
    editBox.remove();
  }
});
