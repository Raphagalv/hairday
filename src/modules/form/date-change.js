import {scheduleDays} from "../schedules/load"
// Seleciona o input date

const selectedDate = document.getElementById("date")

// recarrega a lista de horario quando o input de data mudar

selectedDate.onchange = () => scheduleDays()