const form = document.getElementById("resultForm");
const marksSection = document.getElementById("marksSection");
const output = document.getElementById("output");

document.getElementById("subjects").addEventListener("change", function () {
    marksSection.innerHTML = "";
    let count = this.value;

    for (let i = 1; i <= count; i++) {
        marksSection.innerHTML += `
            <label>Marks for Subject ${i}</label>
            <input type="number" class="marks" min="0" max="100" required>
        `;
    }
});

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const marks = document.querySelectorAll(".marks");

    let total = 0;
    marks.forEach(m => total += Number(m.value));

    const maxMarks = marks.length * 100;
    const percentage = (total / maxMarks) * 100;

    let grade = "Fail";
    if (percentage >= 90) grade = "A+";
    else if (percentage >= 75) grade = "A";
    else if (percentage >= 60) grade = "B";
    else if (percentage >= 50) grade = "C";

    output.innerHTML = `
        <h3>Student Result</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Total:</strong> ${total}</p>
        <p><strong>Percentage:</strong> ${percentage.toFixed(2)}%</p>
        <p><strong>Grade:</strong> ${grade}</p>
    `;
});
