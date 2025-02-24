const headerEl = document.querySelector('.header');
//const originalContent = headerEl.textContent;

headerEl.textContent = 'HAHAHA, byl jsem tu'

headerEl.style.color = 'yellow';
headerEl.style.fontSize = '50px';
headerEl.style.textAlign = 'center';

const cardEl = document.querySelector('.card'); //pomoci css selektoru vybiram .card

cardEl.classList.add('active'); //nazev tridy nema tecku
cardEl.classList.remove('active');
cardEl.classList.toggle('active'); //pouzivam treba pokud chci pri kliknuti menit styl

//menit atributy prvku na strance napr.
const imgEl = document.querySelector('.card img');
imgEl.src = 'images/pes.jpg'; //vymenili jsme source fotky
imgEl.alt = 'Nejhezci pejsanek na svete';

const aEl = document.querySelector('a');
aEl.href = 'https://bing.com';

const x = document.getElementById('bla'); //kdyby prvek mel id, tak alternativa query selectoru (query selector ale vybere vse)
const x = document.getElementsByTagName();
