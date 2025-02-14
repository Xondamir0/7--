const student = JSON.parse(localStorage.getItem("user"))
const infoStudentBox = document.querySelector(".student__wrapper")
if (student){
    infoStudentBox.innerHTML =
        `
        <h2>${student.name} ${student.surname}</h2>
        <p>ID: ${student.id}</p>
        <p>Group: ${student.group}</p>
        <p>HP: ${student.hp}</p>
        <p>Teacher: ${student.teacher}</p>
        <p>Coin: ${student.coin}</p>
        `
}