console.log("hello");

const input = document.getElementById("input-box");
const result = document.getElementById("input-box2");
// const result = document.getElementById('result');
const ans = document.getElementById("result1");
// const submit = document.getElementById('submit-button');

// // console.log(result);
// // console.log(submit);
// // console.log(input);

// // input.addEventListener('change', (e) => {
// //  console.log(e.change.value);
// //  result.innerText = e.target.value;
// // });

// submit.addEventListener('submit',function () {
//   alert("hi");

//  console.log(input.value);
// })

document
  .getElementById("submit-button")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    // result.innerText = input.value;
    const titleInput = document.getElementById("title");
    const contentInput = document.getElementById("content");

    ans.titleInput = titleInput.value;
    ans.innerText = contentInput.value;

    console.log(result.value);

    console.log(input.value);
  });
