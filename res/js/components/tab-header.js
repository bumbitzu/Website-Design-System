function openTab(tabName, elmnt)
{
  var i, tabcontent, tabs;

  // Hide all tab contents by default
  tabcontent = document.querySelectorAll('.tabcontent');
  tabcontent.forEach(tab => tab.style.display = 'none');

  // Remove the active class from all tabs
  tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => tab.classList.remove('active'));

  // Show the specific tab content
  document.getElementById(tabName).style.display = 'block';

  // Add the active class to the clicked tab
  elmnt.classList.add('active');
}

// Get the first tab and click on it by default
document.querySelector('.tab').click();