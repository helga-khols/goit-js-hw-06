const input = document.getElementById("validation-input");

input.onblur = function () {
  if (Number(input.dataset.length) === input.value.length) {
    input.className = "valid";
  } else {
    input.className = "invalid";
  }
};
