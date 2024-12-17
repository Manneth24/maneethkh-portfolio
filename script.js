function showContent(section) {
    // Hide all sections
    document.querySelectorAll('.content').forEach(function (content) {
        content.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(section).style.display = 'block';
}
