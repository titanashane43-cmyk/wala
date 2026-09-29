const periodSelect = document.querySelector('#period-select');
const periodLabel = document.querySelector('#period-label');
const grades = document.querySelectorAll('.grade');

const periodData = {
    first: { label: 'First Semester', grades: ['80%', '88%', '81%', '80%'] },
    midterm: { label: 'Midterm', grades: ['84%', '91%', '86%', '83%'] },
    final: { label: 'Final Term', grades: ['87%', '94%', '89%', '90%'] }
};

periodSelect.addEventListener('change', () => {
    const selectedPeriod = periodData[periodSelect.value];
    periodLabel.textContent = selectedPeriod.label;
    grades.forEach((grade, index) => {
        grade.textContent = selectedPeriod.grades[index];
    });
});
