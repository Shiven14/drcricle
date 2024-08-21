document.getElementById('doctor-signup').addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('doc-first-name').value;
    const lastName = document.getElementById('doc-last-name').value;
    const email = document.getElementById('doc-email').value;
    const message = document.getElementById('doc-message').value;
    alert(`Thank you, Dr. ${firstName} ${lastName}, for signing up! We will contact you at ${email}. Your message: "${message}"`);
    // Add further processing logic here
});

document.getElementById('nondoctor-signup').addEventListener('submit', function(event) {
    event.preventDefault();
    const firstName = document.getElementById('nondoc-first-name').value;
    const lastName = document.getElementById('nondoc-last-name').value;
    const email = document.getElementById('nondoc-email').value;
    const message = document.getElementById('nondoc-message').value;
    alert(`Thank you, ${firstName} ${lastName}, for signing up! We will contact you at ${email}. Your message: "${message}"`);
    // Add further processing logic here
});
