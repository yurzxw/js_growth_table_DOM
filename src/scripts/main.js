'use strict';

const appendRowButton = document.querySelector('.append-row');
const removeRowButton = document.querySelector('.remove-row');
const appendColumnButton = document.querySelector('.append-column');
const removeColumnButton = document.querySelector('.remove-column');
const max = 10;
const min = 2;

appendRowButton.addEventListener('click', (e) => {
  let counter = [...document.querySelectorAll('tr')].length;

  counter++;

  if (counter >= min && counter <= max) {
    const table = document.querySelector('tbody');
    const newRow = table.firstChild.cloneNode(true);

    table.appendChild(newRow);
  }
});

removeRowButton.addEventListener('click', (e) => {
  let counter = [...document.querySelectorAll('tr')].length;

  counter--;

  if (counter >= min && counter <= max) {
    const table = document.querySelector('tbody');
    const deletedRow = table.lastChild;

    table.removeChild(deletedRow);
  }
});

appendColumnButton.addEventListener('click', (e) => {
  let counter = document.querySelector('tr').children.length;

  counter++;

  if (counter >= min && counter <= max) {
    const rows = [...document.getElementsByTagName('tr')];

    rows.forEach((row) => {
      const td = document.querySelector('td').cloneNode(true);

      row.appendChild(td);
    });
  }
});

removeColumnButton.addEventListener('click', (e) => {
  let counter = document.querySelector('tr').children.length;

  counter--;

  if (counter >= min && counter <= max) {
    const rows = [...document.getElementsByTagName('tr')];

    rows.forEach((row) => {
      const lastChild = row.lastChild;

      row.removeChild(lastChild);
    });
  }
});
