document.getElementById('doctor-signup').addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('doc-first-name').value;
    alert(`Thank you, Dr. ${firstName}, for signing up!`);
    // Add further processing logic here
});

document.getElementById('nondoctor-signup').addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('nondoc-first-name').value;
    alert(`Thank you, ${firstName}, for signing up!`);
    // Add further processing logic here
});
