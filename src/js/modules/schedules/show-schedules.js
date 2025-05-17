import dayjs from "dayjs";

const morning = document.querySelector("#morning");
const afternoon = document.querySelector("#afternoon");
const night = document.querySelector("#night");

export function showSchedules(dailySchedules){
  try {
    morning.innerHTML = "";
    afternoon.innerHTML = "";
    night.innerHTML = "";
  
    dailySchedules.forEach(schedule => {
      const item = document.createElement("li");
      item.id = schedule.id;
  
      item.innerHTML = `
        <div>
          <strong class="hour">${dayjs(schedule.when).format("HH:mm")}</strong>
          <strong>${schedule.pet}</strong>
          <span>/ ${schedule.tutor}</span>
        </div>
      
        <span class="service-desc">${schedule.desc}</span>
  
        <button class="remove">Remover agendamento</button>
      `;
  
      const hour = dayjs(schedule.when).hour();
  
      if(hour <= 12){
        morning.appendChild(item);
      } else if(hour > 12 && hour <= 17){
        afternoon.appendChild(item);
      } else {
        night.appendChild(item);
      }
    });

  } catch (error) {
    alert("Não foi possível exibir os agendamentos");
    console.log(error);
  }
}