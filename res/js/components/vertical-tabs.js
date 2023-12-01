function changeTab(index)
{
  const tabs = document.querySelectorAll('.tab');
  const tabContents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => tab.classList.remove('active'));
  tabContents.forEach(content => content.classList.remove('active'));

  tabs[ index ].classList.add('active');
  tabContents[ index ].classList.add('active');
}