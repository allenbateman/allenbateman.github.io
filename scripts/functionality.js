window.onload = function()
{
  //changeTab('About');
}

function changeTab(tabName) {
  // Hide all sections
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => section.style.display = 'none');
  
  sections.forEach(section => section.classList.remove('active'));
  const activeSection = document.getElementById(tabName);
  activeSection.classList.add('active');
  
  // Show the selected section
  document.getElementById(tabName).style.display = 'block';

  // Remove 'active' class from all buttons
  const buttons = document.querySelectorAll('.tabButton');
  buttons.forEach(button => button.classList.remove('active'));

  // Add 'active' class to the clicked button
  const activeButton = document.querySelector(`button[onclick="changeTab('${tabName}')"]`);
  activeButton.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
  // Get all buttons with data-target attributes
  document.querySelectorAll('.nav-link').forEach(button => {
    button.addEventListener('click', function() {
      // Get the target section's id from the data-target attribute
      const targetId = this.getAttribute('data-target');
      const targetSection = document.getElementById(targetId);

      // Scroll to the section smoothly if the target exists
      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});