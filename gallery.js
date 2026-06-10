
const artworks = [
 {image:'inspiration_1.jpeg', title:'The Fool'},
 {image:'inspiration_2.jpeg', title:'Perspective'},
 {image:'inspiration_3.jpeg', title:'Releasing Old Patterns'}
];

const grid = document.getElementById('gallery-grid');

artworks.forEach(a=>{
 const card=document.createElement('div');
 card.className='card';
 card.innerHTML=`<img src="${a.image}" alt=""><p>${a.title}</p>`;
 grid.appendChild(card);
});

/*
TO ADD NEW ART:
1. Drop image files into the folder.
2. Add a new line:
{image:'yourfile.jpg', title:'Artwork Title'}
3. Save and refresh.
You can add hundreds of images.
*/
