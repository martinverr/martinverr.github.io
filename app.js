const darkButton = document.getElementById('dark');
const body = document.body;

document.getElementById('dark').onclick = () => {
  body.classList.toggle('dark');
  localStorage.setItem('theme', 'dark');
};

function changetheme(){
  body.classList.toggle("dark");
};
