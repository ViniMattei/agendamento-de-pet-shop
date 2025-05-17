import dayjs from "dayjs";
import { scheduleDay } from "../schedules/load";
import { scheduleNew } from "../../service/new-schedule.js";

const dateFilter = document.querySelector("#date");

const form = document.querySelector("#form");
const modal = document.querySelector("#modal");
const footer = document.querySelector(".footer");


const tutorName = document.getElementById("tutor-name");
const petName = document.getElementById("pet-name");
const phone = document.getElementById("phone");
const description = document.getElementById("description");
const dateModal = document.getElementById("date-modal");
const hours = document.getElementById("hours");

const Today = dayjs(new Date()).format("YYYY-MM-DD");

dateFilter.value = Today;
dateFilter.min = Today;
dateModal.value = Today;
dateModal.min = Today;

form.onsubmit = async (event) => {
  event.preventDefault();

  try {
    const tutor = tutorName.value.trim();
    const pet = petName.value.trim();
    const desc = description.value.trim();

    if(tutor === "" || pet === "" || desc === "") {
      alert("Preencha todos os campos!");
      return;
    }

    const hourSelected = hours.value;

    if(hourSelected === "00:00" || !hourSelected) return alert("Selecione a hora!");

    const [hour] = hourSelected.split(":");
    const when = dayjs(dateModal.value).add(hour, "hour");
    const id = new Date().getTime().toString();

    await scheduleNew({
      id,
      tutor,
      pet,
      desc,
      when,
    })

    await scheduleDay();

    tutorName.value = "";
    petName.value = "";
    phone.value = "";
    description.value = "";

    modal.style.display = "none";
    footer.style.display = "initial";

  } catch(error) {
    console.error("Erro ao enviar o formulário:", error);
  }
}