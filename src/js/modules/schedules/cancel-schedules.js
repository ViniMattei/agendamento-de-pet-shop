import { scheduleDay } from "./load.js";
import { deleteSchedules } from "../../service/delete-schedule.js";

const periods = document.querySelectorAll(".period");

periods.forEach(period => {
  period.onclick = async (event) => {
    if(event.target.classList.contains("remove")){
      const item = event.target.closest("li");
      const id = item.id;

      if(id){
        const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento? ⚠️");

        if(isConfirm){
          await deleteSchedules(id);
          scheduleDay();
        }
      }
    }
  }
});
