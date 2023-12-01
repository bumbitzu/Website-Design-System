function openTab(tabName, element, color)
{
  let i, tabcontent;

  tabcontent = document.getElementsByClassName("tabcontent");
  tab = document.getElementsByClassName('tablink')
  for (i = 0; i < tabcontent.length; i++)
  {
    tabcontent[ i ].style.display = "none";
    tab[ i ].style.backgroundColor = '#555'
  }
  document.getElementById(tabName).style.display = "block";
  element.style.backgroundColor = color;
}