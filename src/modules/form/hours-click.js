export function hoursClick() {
    const hours = document.querySelectorAll(".hour-available")

    hours.forEach((available) => {
        available.addEventListener("click", (selected) => {

            // remove a classe de todas LI nao selecionadas
            hours.forEach((hour) => {
                hour.classList.remove("hour-selected")
            })

            // adiciono a classe na LI clicada
            selected.target.classList.add("hour-selected")
        })
    })


}