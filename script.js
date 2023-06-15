AOS.init();

const input = document.querySelector("#phone-input");
let iti = window.intlTelInput(input, {
  initialCountry: "auto",
  geoIpLookup: callback => {
    fetch("https://ipapi.co/json")
      .then(res => res.json())
      .then(data => callback(data.country_code))
      .catch(() => callback("us"));
    },
});

input.addEventListener("blur", () => {
  const valide = document.getElementById("not-valide");
  const patern = /^\+\d{10}$/;
  if (!patern.test(input.value)) {
    button.disabled = true;
    valide.style.display = "block"
  }
  if (patern.test(input.value)) {
    valide.style.display = "none"
    button.disabled = false;
  }
})

const button = document.querySelector("#btn");
