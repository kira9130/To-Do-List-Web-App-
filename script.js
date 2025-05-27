let totalTasks = 0;

// Initialize app
window.addEventListener('DOMContentLoaded', () => {
  updateRemainingTasks();
  setupEventListeners();
});

// Count unchecked tasks
function updateRemainingTasks() {
  const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
  const remaining = Array.from(allCheckboxes).filter(box => !box.checked).length;

  const taskNotice = document.getElementById('no-task');
  if (allCheckboxes.length === 0) {
    taskNotice.style.display = 'block';
  } else {
    taskNotice.style.display = 'none';
  }

  const countDisplay = document.getElementById('task-count');
  if (countDisplay) {
    countDisplay.textContent = `${remaining} task(s) remaining`;
  }
}

// Assign event listeners to delete buttons and checkboxes
function setupEventListeners() {
  document.querySelectorAll('.delete-task').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.target.closest('li').remove();
      updateRemainingTasks();
    });
  });

  document.querySelectorAll('input[type="checkbox"]').forEach(box => {
    box.addEventListener('change', () => {
      updateRemainingTasks();
    });
  });
}
