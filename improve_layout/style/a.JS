const addButton = document.querySelector('.btn');
const searchInput = document.querySelector('.search input');
const tableBody = document.querySelector('tbody');

if (addButton) {
  addButton.addEventListener('click', function (event) {
    event.preventDefault();
    const name = prompt('Enter student name:');
    const age = prompt('Enter student age:');
    const grade = prompt('Enter grade:');

    if (!name || !age || !grade) return;

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${name}</td>
      <td>${age}</td>
      <td>${grade}</td>
    `;

    tableBody.appendChild(row);
  });
}

if (searchInput) {
  searchInput.addEventListener('input', function () {
    const value = this.value.toLowerCase();
    const rows = tableBody.querySelectorAll('tr');

    rows.forEach((row) => {
      const text = row.textContent.toLowerCase();
      row.style.display = text.includes(value) ? '' : 'none';
    });
  });
}
