const url = "http://localhost:9800/";

//REGISTER AN ATTENDEE
const register = () => {
  const firstName = document.querySelector(".firstname").value;
  const lastName = document.querySelector(".lastname").value;
  const email = document.querySelector(".email").value;
  const phone = document.querySelector(".phone").value;

  const data = {
    firstName,
    lastName,
    email,
    phone,
  };
  axios
    .post(url, data, { headers: "application/json" })
    .then((attendee) => {
      console.log(attendee.data);
    })
    .catch((err) => console.log(err));
};

const regBtn = document.querySelector(".reg");

regBtn.addEventListener("click", () => {
  register();
});

