const drop1 = document.querySelector('#drop1');
const drop2 = document.querySelector('#drop2');

const list1 = document.querySelector('#list1');
const list2 = document.querySelector('#list2');
var flag = 0;

drop1.addEventListener('click', () => {
  if (flag == 0) {
    list1.style.display = 'block';
    flag = 1;
  } else {
    list1.style.display = 'none';
    flag = 0;
  }
});
drop2.addEventListener('click', () => {
  if (flag == 0) {
    list2.style.display = 'block';
    flag = 1;
  } else {
    list2.style.display = 'none';
    flag = 0;
  }
});

const dropp1 = document.querySelector('#drop1');

const listp = document.querySelectorAll('#list1 p');

listp.forEach((div, index) => {
  div.addEventListener('click', () => {
    dropp1.innerHTML = `${listp[index].innerHTML}`;
    list1.style.display = 'none';
  });
});
const dropp2 = document.querySelector('#drop2');

const listp2 = document.querySelectorAll('#list2 p');

listp2.forEach((div, index) => {
  div.addEventListener('click', () => {
    dropp2.innerHTML = `${listp2[index].innerHTML}`;
    list2.style.display = 'none';
  });
});
