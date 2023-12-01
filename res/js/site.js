
var mySidebar = document.getElementById("side-bar");
console.log(mySidebar)
var myNavbtn = document.getElementsByClassName("nav-button");
function openSide()  
{
  if (mySidebar.style.display === 'block')
  {
    mySidebar.style.display = 'none';
  } else
  {
    mySidebar.style.display = 'block';
  }
  console.log('ok');
}
function navBtn()
{
  if (myNavbtn[ 0 ].style.display === 'none')
  {
    for (let i = 0; i < myNavbtn.length; i++)
    {
      myNavbtn[ i ].style.display = 'block';
    }
  }
  else 
  {
    for (let i = 0; i < myNavbtn.length; i++)
    {
      myNavbtn[ i ].style.display = 'none';
    }
  }
  console.log('ok');
}
function closeSide()
{
  mySidebar.style.display = "none";
}
window.addEventListener('resize', function ()
{
  if (window.innerWidth > 933)
  {
    mySidebar.style.display = 'block';
    for (let i = 0; i < myNavbtn.length; i++)
    {
      myNavbtn[ i ].style.display = 'block';
    }
  }
  else
  {
    mySidebar.style.display = 'none';
    for (let i = 0; i < myNavbtn.length; i++)
    {
      myNavbtn[ i ].style.display = 'none';
    }
  }
});


let currentButtonId = null;

function changeColor(buttonId)
{
  const button = document.getElementById(buttonId);

  if (currentButtonId !== null)
  {
    const prevButton = document.getElementById(currentButtonId);
    prevButton.style.backgroundColor = ''; 
    prevButton.style.color = '';
  }

  button.style.backgroundColor = '#FB4848';
  button.style.color="white"

  currentButtonId = buttonId;
}

function changeIframe(link)
{
  let iframe1 = document.getElementById('iframe1');
  let iframe2 = document.getElementById('iframe2');
  iframe1.onload = function ()
  {
    let iframeHeight = iframe1.contentWindow.document.body.scrollHeight + 'px';
    iframe1.style.height = iframeHeight;
  }
  iframe2.onload = function ()
  {
    let iframeHeight = iframe2.contentWindow.document.body.scrollHeight + 'px';
    iframe2.style.height = iframeHeight;
  }

  
  iframe1.style.opacity = 0;
  iframe2.style.opacity = 0;

  let link2 = link.slice(0, -5) + "-code.html";
  setTimeout(function ()
  {
    iframe1.src = link;
    iframe1.style.opacity = 1;
    iframe2.src = link2;
    iframe2.style.opacity = 1;
  }, 400);
}
function init(link,buttonId)
{
  changeColor(buttonId)
  changeIframe(link);

}

function initInfo()
{
  let info = document.getElementById('info');
  info.style.display = 'flex';
}
function closeInfo()
{
  let info = document.getElementById('info');
  info.style.display = 'none';
}

