console.log('main2');
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach((section)=>{
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}
function checkChanges(event) {
    event.preventDefault();
    const form = event.target;
    const inputs = form.querySelectorAll('input[required], select[required]');
    let allFilled = true;
    inputs.forEach((input)=>{
        if (!input.value.trim()) allFilled = false;
    });
    if (allFilled) alert('Data saved successfully');
    else alert('Please fill in all required fields');
}

//# sourceMappingURL=cabinet.878649a9.js.map
