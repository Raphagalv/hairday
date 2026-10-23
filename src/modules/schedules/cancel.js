import { scheduleDays } from "./load.js"
import { scheduleCancel } from "../../services/schedule-cancel.js"

const periods = document.querySelectorAll(".period")

// gera evento click para cada lista
periods.forEach((period) => {
    // captura o evento click na lista
    period.addEventListener("click", async (event) => {
        if (event.target.classList.contains("cancel-icon")) {
            // Obtem a LI pai do elemento clicado
            const item = event.target.closest("li")

            // Pega o ID do agendamento para remover
            const {id} = item.dataset

            // Confirma que o ID foi selecionado
            if (id) {
                // Confirma que o usuario deseja remover
                const isConfirm = confirm(
                    "tem certeza que deseja cancelar o agendamento?"
                )

                if (isConfirm) {
                    // Faz a requisição na API para cancelar
                    await scheduleCancel({ id })

                    // Recarrega os agendamentos
                    scheduleDays()
                }
            }
        }
    })

} )
