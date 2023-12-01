
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
  if (window.innerWidth >= 933)
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

  // Verificăm dacă butonul curent este același cu cel apăsat anterior
  if (currentButtonId !== null)
  {
    const prevButton = document.getElementById(currentButtonId);
    prevButton.style.backgroundColor = '';  // Resetăm culoarea butonului anterior
    prevButton.style.color = '';
  }

  // Setăm culoarea pentru butonul curent
  button.style.backgroundColor = '#FB4848';
  button.style.color="white"

  // Actualizăm id-ul butonului curent
  currentButtonId = buttonId;
}
function changeIframe(link)
{
  let iframe = document.getElementById('iframe');
  iframe.onload = function ()
  {
    // Obține înălțimea conținutului încărcat în iframe
    let iframeHeight = iframe.contentWindow.document.body.scrollHeight + 200 + 'px';
    // Setează înălțimea iframe-ului
    iframe.style.height = iframeHeight;

  }
  // Setează opacitatea la 0 înainte de a schimba sursa

  iframe.style.opacity = 0;

  // Setează opacitatea la 1 după ce sursa a fost schimbată
  setTimeout(function ()
  {
    iframe.src = link;
    iframe.style.opacity = 1;
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

