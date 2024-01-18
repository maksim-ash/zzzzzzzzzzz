const openPopUp=document.getElementById('open_pop_up');
const openPopUp2=document.getElementById('open_pop_up2');
const openPopUp3=document.getElementById('open_pop_up3');
const openPopUp4=document.getElementById('open_pop_up4');
const openPopUp5=document.getElementById('open_pop_up5');
const openPopUp6=document.getElementById('open_pop_up6');
const openPopUp7=document.getElementById('open_pop_up7');

const popUp=document.getElementById('pop_up');
const popUp2=document.getElementById('pop_up2');
const popUp3=document.getElementById('pop_up3');
const popUp4=document.getElementById('pop_up4');
const popUp5=document.getElementById('pop_up5');
const popUp6=document.getElementById('pop_up6');
const popUp7=document.getElementById('pop_up7');

const closePopUp=document.getElementById('pop_up_close');
const closePopUp2=document.getElementById('pop_up_close2');
const closePopUp3=document.getElementById('pop_up_close3');
const closePopUp4=document.getElementById('pop_up_close4');
const closePopUp5=document.getElementById('pop_up_close5');
const closePopUp6=document.getElementById('pop_up_close6');
const closePopUp7=document.getElementById('pop_up_close7');

const popupArea = document.getElementById('popup__area');
const popupArea2 = document.getElementById('popup__area2');
const popupArea3 = document.getElementById('popup__area3');
const popupArea4 = document.getElementById('popup__area4');
const popupArea5 = document.getElementById('popup__area5');
const popupArea6 = document.getElementById('popup__area6');
const popupArea7 = document.getElementById('popup__area7');

const hb = document.querySelector('.header__burger');
const menu = document.querySelector('.header');
const body = document.querySelector('body');

hb.addEventListener('click', function() {
    menu.classList.toggle('active')
    body.classList.toggle('lock')
})

openPopUp.addEventListener('click',function(e){
    e.preventDefault();
    popUp.classList.add('active');
    body.classList.toggle('lock');
})
closePopUp.addEventListener('click',()=>{
    popUp.classList.remove('active');
    body.classList.remove('lock');
})
popupArea.addEventListener('click',()=>{
    popUp.classList.remove('active');
    body.classList.remove('lock');
})

openPopUp2.addEventListener('click',function(e){
    e.preventDefault();
    popUp2.classList.add('active');
    body.classList.toggle('lock');
})
closePopUp2.addEventListener('click',()=>{
    popUp2.classList.remove('active');
    body.classList.remove('lock');
})
popupArea2.addEventListener('click',()=>{
    popUp2.classList.remove('active');
    body.classList.remove('lock');
})

openPopUp3.addEventListener('click',function(e){
    e.preventDefault();
    popUp3.classList.add('active');
    body.classList.toggle('lock');
})
closePopUp3.addEventListener('click',()=>{
    popUp3.classList.remove('active');
    body.classList.remove('lock');
})
popupArea3.addEventListener('click',()=>{
    popUp3.classList.remove('active');
    body.classList.remove('lock');
})

openPopUp4.addEventListener('click',function(e){
    e.preventDefault();
    popUp4.classList.add('active');
    body.classList.toggle('lock');
})
closePopUp4.addEventListener('click',()=>{
    popUp4.classList.remove('active');
    body.classList.remove('lock');
})
popupArea4.addEventListener('click',()=>{
    popUp4.classList.remove('active');
    body.classList.remove('lock');
})

openPopUp5.addEventListener('click',function(e){
    e.preventDefault();
    popUp5.classList.add('active');
    body.classList.toggle('lock');
})
closePopUp5.addEventListener('click',()=>{
    popUp5.classList.remove('active');
    body.classList.remove('lock');
})
popupArea5.addEventListener('click',()=>{
    popUp5.classList.remove('active');
    body.classList.remove('lock');
})

openPopUp6.addEventListener('click',function(e){
    e.preventDefault();
    popUp6.classList.add('active');
    body.classList.toggle('lock');
})
closePopUp6.addEventListener('click',()=>{
    popUp6.classList.remove('active');
    body.classList.remove('lock');
})
popupArea6.addEventListener('click',()=>{
    popUp6.classList.remove('active');
    body.classList.remove('lock');
})

openPopUp7.addEventListener('click',function(e){
    e.preventDefault();
    popUp7.classList.add('active');
    body.classList.toggle('lock');
})
closePopUp7.addEventListener('click',()=>{
    popUp7.classList.remove('active');
    body.classList.remove('lock');
})
popupArea7.addEventListener('click',()=>{
    popUp7.classList.remove('active');
    body.classList.remove('lock');
})