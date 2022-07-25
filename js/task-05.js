const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

input.oninput = function () {

    output.innerHTML = input.value;

      if (input.value === "") {
    output.textContent = "Anonymous";
  }
};

