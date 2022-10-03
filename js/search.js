const url = "http://localhost:9800/";

//SEARCH T CONFIRM

function confirm() {
  const search = document.querySelector(".search").value;

  const data = {
    search,
  };

  axios
    .post(url + "search", data, { headers: "application/json" })
    .then((data) => {
      const attendee = data.data;

      console.log(attendee);
    })
    .catch((err) => console.log(err));
  //   console.log(data);
}

// const confirmBtn = document.querySelector(".search");
// const input = document.querySelector(".search");

// confirmBtn.addEventListener("click", () => {
//   confirm();
// });

// input.onblur = confirm();
