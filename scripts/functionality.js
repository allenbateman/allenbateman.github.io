window.onload = function()
{
  changeTab('About');
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