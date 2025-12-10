function showSection(sectionId) {
    document.querySelectorAll('.section').forEach((section)=>{
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}

//# sourceMappingURL=cabinet.84175dca.js.map
