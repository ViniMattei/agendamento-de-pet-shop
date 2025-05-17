import { api } from "./api";

export async function deleteSchedules(id) {
  try {
    await fetch(`${api.baseURL}/schedules/${id}`, {
      method: "DELETE",
    });

    alert("Agendamento cancelado 🔴");

  } catch (error) {
    console.log(error);
    alert("Não foi possível cancelar o agendamento! Tente novamente!");
  }
}
