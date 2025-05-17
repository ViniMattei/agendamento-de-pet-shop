import { scheduleDay } from "../schedules/load";

const dateModal = document.querySelector("#date-modal");
const dateFilter = document.querySelector("#date");

dateFilter.onchange = (event) => {
 dateModal.value = event.target.value;
  scheduleDay();
}

dateModal.onchange = (event) => {
  dateFilter.value = event.target.value;
  scheduleDay();
}