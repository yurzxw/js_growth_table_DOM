'use strict';

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const max = 10;
const min = 2;
let counterR = [...document.querySelectorAll('tr')].length;
let counterC = document.querySelector('tr').children.length;

function updateButtonStates() {
  appendRowButton.disabled = counterR >= max;
  removeRowButton.disabled = counterR <= min;
  appendColumnButton.disabled = counterC >= max;
  removeColumnButton.disabled = counterC <= min;
}

appendRowButton.addEventListener('click', (e) => {
  if (counterR < max) {
    const table = document.querySelector('tbody');
    const newRow = table.firstChild.cloneNode(true);

    table.appendChild(newRow);
    counterR++;
    updateButtonStates();
  }
});

removeRowButton.addEventListener('click', (e) => {
  if (counterR > min) {
    const table = document.querySelector('tbody');
    const deletedRow = table.lastChild;

    table.removeChild(deletedRow);
    counterR--;
    updateButtonStates();
  }
});

appendColumnButton.addEventListener('click', (e) => {
  if (counterC < max) {
    appendColumnButton.disabled = false;

    const rows = [...document.getElementsByTagName('tr')];

    rows.forEach((row) => {
      const td = document.querySelector('td').cloneNode(true);

      row.appendChild(td);
    });
    counterC++;
    updateButtonStates();
  }
});

removeColumnButton.addEventListener('click', (e) => {
  if (counterC > min) {
    removeColumnButton.disabled = false;

    const rows = [...document.getElementsByTagName('tr')];

    rows.forEach((row) => {
      const lastChild = row.lastChild;

      row.removeChild(lastChild);
    });
    counterC--;
    updateButtonStates();
  }
});
