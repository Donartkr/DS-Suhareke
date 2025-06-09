document.getElementById('submitBtn').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    alert("Hello" + name + ", you are" + age + "years old");
});

