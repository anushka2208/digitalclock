setInterval( function Timeset(){
d=new Date();
hr=d.getHours();
min=d.getMinutes();
sec=d.getSeconds();
if(hr<10)
hr="0"+hr;
if(min<10)
min="0"+min;
if(sec<10)
sec="0"+sec;
str=hr+":"+min+":"+sec;
if(hr<12)
str=str+"AM";
else
str=str+"PM";
digiclock.innerHTML=str;
},1000);

function changetheme()
{
  if(container.className=="dark")
  {
    document.getElementById('container').classList.remove('dark');
    document.getElementById('container').classList.add('light');
    document.getElementById('digiclock').classList.remove('dark');
    document.getElementById('digiclock').classList.add('light');
    document.getElementById('togle').classList.remove('dark');
    document.getElementById('togle').classList.add('light');
    document.getElementById('btn').classList.remove('dark');
    document.getElementById('btn').classList.add('light');
  }
  else {
    document.getElementById('container').classList.remove('light');
    document.getElementById('container').classList.add('dark');
    document.getElementById('digiclock').classList.remove('light');
    document.getElementById('digiclock').classList.add('dark');
    document.getElementById('togle').classList.remove('light');
    document.getElementById('togle').classList.add('dark');
    document.getElementById('btn').classList.remove('light');
    document.getElementById('btn').classList.add('dark');
  }
}
