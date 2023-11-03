document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("employee-form");
    const table = document.getElementById("employee-table").getElementsByTagName('tbody')[0];

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = form.name.value;
        const employeeId = form['employee-id'].value;
        const department = form.department.value;
        const experience = parseInt(form.experience.value);
        const email = form.email.value;
        const mobile = form.mobile.value;
        const role = getRole(experience);

        const row = table.insertRow();
        row.innerHTML = `
            <td>${name}</td>
            <td>${employeeId}</td>
            <td>${department}</td>
            <td>${experience}</td>
            <td>${email}</td>
            <td>${mobile}</td>
            <td>${role}</td>
            <td><button onclick="deleteRow(this)">Delete</button></td>
        `;

        form.reset();
    });
});

function getRole(experience) {
    if (experience > 5) {
        return "Senior";
    } else if (experience >= 2 && experience <= 5) {
        return "Junior";
    } else {
        return "Fresher";
    }
}

function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.remove();
}
