import { apiConfig } from "./api-config";

export async function scheduleNew ({id, name, when}) {
    try {
        // Faz a requisição para enviar os dados do agendamento
        await fetch(`${apiConfig.baseURL}/schedules`, {
            method: 'POST',
            headers: {
                "Content-Type" : "aplication/json"
            },
            body: JSON.stringify({id, name, when}),
        })

        // Exibe mensagem do agendamento realizado
        alert("Agendamento realizado com sucesso")
    } catch (error) {
        console.log(error)
        alert("Nao foi possivel agendar, tente novamente")
    }
}