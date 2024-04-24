let total = 0
const studentdata = (e) => {
    e.preventDefault();


    let name = document.getElementById("name").value;
    let JobRole = document.getElementById("JobRole").value;
    let Department = document.getElementById("Department").value;
    let Salary = document.getElementById("Salary").value;
    let Email = document.getElementById("Email").value;
    let Experience = document.getElementById("Experience").value;

    total += Number(Salary)

    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerHTML = name;

    let td2 = document.createElement("td");
    td2.innerHTML = JobRole;

    let td3 = document.createElement("td");
    td3.innerHTML = Salary;


    let td4 = document.createElement("td");
    td4.innerHTML = Department;


    let td5 = document.createElement("td");
    td5.innerHTML = Email;

    let td6 = document.createElement("td");
    td6.innerHTML = Experience;

    let td7 = document.createElement("td");

    if (Experience <= 1 || Experience >= 5) {

        td7.innerHTML = "Senior";

        td7.style.color = "white"
        td7.style.backgroundColor = "#FFC5C5"

    } else if (Experience <= 6) {


        td7.innerHTML = "Junior";
        td7.style.color = "white"
        td7.style.backgroundColor = "#78C1F3"

    } else { td7.innerHTML = "undefined"; }



    let td8 = document.createElement("td");
    td8.innerHTML = "delete";
    td8.style.color = "red";
    td8.addEventListener("click", (e) => {
        e.target.parentNode.remove()
        total -= Number(Salary)
        document.getElementById("totals").innerHTML = total
    })



    document.getElementById("totals").innerHTML = total

    tr.append(td1, td2, td4, td3, td5, td6, td7, td8);
    document.getElementById("data").append(tr);
};





document.getElementById("student").addEventListener("submit", studentdata)