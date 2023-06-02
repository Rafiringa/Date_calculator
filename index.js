//Convertir la date d'aujourd'hui en input
const today = new Date().toISOString().split("T")[0];
start_date.value = today;
start_date.min = today;

//Calcul la date de demain
let tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

//Convertir la date de demain en input
let tomorrowFormat = tomorrow.toISOString().split("T")[0];
end_date.value = tomorrowFormat;
end_date.min = tomorrowFormat;

start_date.addEventListener("change", (e) => {
  let day = new Date(e.target.value);

  if (end_date.value < start_date.value) {
    day.setDate(day.getDate() + 1);
    end_date.value = day.toISOString().split("T")[0];
  }
});

end_date.addEventListener("change", (e) => {
  let jour = new Date(e.target.value);

  if (end_date.value < start_date.value) {
    jour.setDate(jour.getDate() - 1);
    start_date.value = jour.toISOString().split("T")[0];
  }
});

const bookingCalc = () => {
  let diffTime = Math.abs(
    new Date(end_date.value) - new Date(start_date.value)
  );
  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  total.textContent = diffDays * nightPrice.textContent;
};

start_date.addEventListener("change", bookingCalc);
end_date.addEventListener("change", bookingCalc);

bookingCalc();
