import dayjs from "dayjs"

import {scheduleNew} from "../../services/schedule-new.js"
import {scheduleDays} from "../schedules/load.js"

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById("date")


// Data atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Carrega a data atual
selectedDate.value = inputToday

// Define a data minima como sendo a data atual
selectedDate.min = inputToday

form.onsubmit = async (event) => {

    // previne o comportamento padrao de carregar a page
    event.preventDefault()

    try {
        // recuperando o nome do cliente

        const name = clientName.value.trim()

        if(!name) {
            return alert("Informe o nome do cliente!")
        }

        // recuperando o horario selecionado

        const hourSelected = document.querySelector(".hour-selected")
        
        if(!hourSelected) {
            return alert("Selecione um horário disponivel")
        }

        // Recuperar somente a hora

        const [hour] = hourSelected.innerText.split(":")
        

        // Inserir a hora na data

        const when = dayjs(selectedDate.value).add(hour, "hour")

        const id = new Date().getTime()

        // FAZ O AGENDAMENTO
        await scheduleNew ({
            id,
            name,
            when,
        })

        // RECARREGA OS AGENDAMENTOS

        await scheduleDays()

        // LIMPA O INPUT DE NOME DO CLIENTE

        clientName.value = ""
    } catch (error) {
        alert("Não foi possivel realizar o agendamento.")
        console.log(error)
    }
}