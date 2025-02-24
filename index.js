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

//cardEl.className = 'card active'; //kdyz menim class primo, ale classList.add je lepsi

//menit atributy prvku na strance napr.
const imgEl = document.querySelector('.card img');
imgEl.src = 'images/pes.jpg'; //vymenili jsme source fotky
imgEl.alt = 'Nejhezci pejsanek na svete';

const aEl = document.querySelector('a');
aEl.href = 'https://bing.com';

//const x = document.getElementById('bla'); //kdyby prvek mel id, tak alternativa query selectoru (query selector ale vybere vse)
//const x = document.getElementsByTagName();
//const x = document.querySelector('#odkaz');

/*
const card3El = document.querySelector('.card:nth-child(3)');
card3El.innerHTML = '<strong>Ahoj</strong>'; //pokud vlozit pouze text, pouzit textContent, pokud znacky tak innerHTML

card3El.innerHTML = `
<h2>Ahoj</h2>
<p>Kocky jsou lepsi</p>
<ul>
    <li>Maslo</li>
    <li>Mleko</li>
    <li>Rohliky</li>
</ul>
`;
*/

const card3El = document.querySelector('.card:nth-child(3)');
const product1 = {
    name: 'Lední brusle',
    price: 1259,
    description:
      'Lední brusle dámské vhodné pro rekreační bruslaře, nůž: klasická svařovaná brusle, nerezová ocel',
    color: 'white',
  };

card3El.innerHTML = `
<h2>${product1.name}</h2>
<p>${product1.description}</p>
<p><strong></strong>${product1.description}</p>
`
