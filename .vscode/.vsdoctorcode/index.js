document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('doctorForm');
    const doctorList = document.getElementById('doctorList');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const doctorId = document.getElementById('doctorId').value;
        const specialization = document.getElementById('specialization').value;
        const experience = parseInt(document.getElementById('experience').value);
        const email = document.getElementById('email').value;
        const mobile = document.getElementById('mobile').value;

        let role = '';
        if (experience > 5) {
            role = 'Senior';
        } else if (experience >= 2) {
            role = 'Junior';
        } else {
            role = 'Trainee';
        }

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${name}</td>
            <td>${doctorId}</td>
            <td>${specialization}</td>
            <td>${experience}</td>
            <td>${email}</td>
            <td>${mobile}</td>
            <td>${role}</td>
            <td><button class="delete">Delete</button></td>
        `;

        doctorList.appendChild(row);
        form.reset();
    });

    doctorList.addEventListener('click', function (event) {
        if (event.target.classList.contains('delete')) {
            const row = event.target.closest('tr');
            if (row) {
                row.remove();
            }
        }
    });
});
