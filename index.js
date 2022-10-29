const squarean=document.getElementById("square");
const ballen=document.getElementById("ball");
const hearten=document.getElementById("heart");
const texten=document.getElementById("text");
const boxen=document.getElementById("box");
const bouncen=document.getElementById("bounce");
squarean.addEventListener("mouseover",function()
{
    document.getElementById("animation1").style.display="block";
})
squarean.addEventListener("mouseout",function()
{
    document.getElementById("animation1").style.display="none";
})
ballen.addEventListener("mouseover",function()
{
    document.getElementById("animation2").style.display="block";
})
ballen.addEventListener("mouseout",function()
{
    document.getElementById("animation2").style.display="none";
})
hearten.addEventListener("mouseover",function()
{
    document.getElementById("animation3").style.display="block";
})
hearten.addEventListener("mouseout",function()
{
    document.getElementById("animation3").style.display="none";
})
texten.addEventListener("mouseover",function()
{
    document.getElementById("animation4").style.display="block";
})
texten.addEventListener("mouseout",function()
{
    document.getElementById("animation4").style.display="none";
})
boxen.addEventListener("mouseover",function()
{
    document.getElementById("animation5").style.display="block";
})
boxen.addEventListener("mouseout",function()
{
    document.getElementById("animation5").style.display="none";
})
bouncen.addEventListener("mouseover",function()
{
    document.getElementById("animation6").style.display="block";
})
bouncen.addEventListener("mouseout",function()
{
    document.getElementById("animation6").style.display="none";
})