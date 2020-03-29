/**
 *buat fungsi yang bisa nambahin elemen.
 15 jam.


  ini adalah rancangannya
  div dengan class create
    ada sebuah input dengan tipe color, ada contohnya juga. example.
    button dengan fungsi untuk menambahkan warna, 
    dan button untuk menambahkan palet, 
    gak lupa juga input untuk ngasih judul paletnya.
    div dengan class color, ntar diatur di css.
  div dengan class palet
    ketika gaada isinya, tampilkan 'anda masih belum memiliki palet'
    result ini akan mengambil 'create' tadi, di appendChild.

  
  untuk workflownya, 
  class create, secara default.
    color input white.
    judul palet kosong.
    belum ada warna di palet.
  
  ketika tombol tambah warna diklik, dia akan menambahkan warna secara otomatis kedalam div dengan class color. 
  kalo gaada judul, alert: yakin tidak memberikan judul?
  button tambahkan palet ada dibawah class color, setelah button ditekan class palet akan diisi dan tampilan text akan hilang.



  tambahan, ada hexadesimalnya.
*/
//menampilkan contoh warna
var color = document.getElementsByName('color');
var colorContainer = document.querySelector('.color-container');
var title = document.querySelector('input');

//menambahkan warna kedalam palet
var button = document.getElementsByTagName('button');
button[0].addEventListener('click', addColor);

function addColor() {
  var box = document.createElement('div');
  box.setAttribute('class', 'color');
  box.style.backgroundColor = color[0].value;
  box.append(color[0].value);
  var remove = document.createElement('button');
  remove.setAttribute('class', 'remove-color');
  remove.appendChild(document.createTextNode('Hapus'));
  box.appendChild(remove);
  colorContainer.appendChild(box);
  
  remove.addEventListener('click', function() {
    remove.parentNode.remove();
  });
}
//mengatur lewat hexadesimal
var hexadesimal = document.querySelector('.hex');
hexadesimal.addEventListener('input', function() {
  color[0].value = hexadesimal.value;
});
color[0].addEventListener('input', function() {
  hexadesimal.value = color[0].value;
});

//menambahkan palet baru
button[1].addEventListener('click', check);

function addPalette() {
  var flex = document.querySelectorAll('.flex-container');
  var palette = document.createElement('div');
  palette.setAttribute('class', 'palette');
  var newTitle = document.createElement('h3');
  var theTitle = document.createTextNode(title.value);
  //hanya menyalin warna saja, button dihilangkan
  var newPalette = colorContainer.cloneNode(true);
  newPalette.setAttribute('id', 'create-color');
  newPalette.childNodes.forEach(e => e.childNodes[1].remove());
  //membuat tombol hapus
  var remove = document.createElement('button');
  remove.setAttribute('class', 'remove-palette');
  remove.appendChild(document.createTextNode('Hapus Palet'));

  console.log(flex);
  var box = document.createElement('div');
  newTitle.appendChild(theTitle);
  box.appendChild(newTitle);
  box.appendChild(newPalette);
  box.appendChild(remove);
  palette.appendChild(box);
  flex[1].appendChild(palette);
  //mengosongkan nilai di class create
  title.value = '';
  colorContainer.innerHTML = '';

  if (flex[1].children[0].children[0].tagName === 'P') {
    var reminder = document.querySelector('#reminder');
    reminder.parentElement.remove();
  }

  //perintah hapus
  remove.addEventListener('click', function() {
    if (confirm('Palet akan dihapus, yakin?')) {
      remove.parentElement.parentElement.remove();
    }
    if (!flex[1].children.length) {
      palette.innerHTML = '';
      var newReminder = document.createElement('p');
      newReminder.setAttribute('id', 'reminder');
      newReminder.appendChild(document.createTextNode('Anda belum memiliki palet, silahkan buat'));
      palette.appendChild(newReminder);
      flex[1].appendChild(palette);
    }
  })
}

//value tidak boleh kosong.

function check() {
  if (!title.value && colorContainer.children.length < 2) {
    alert('Harap isi judul dan warna');
  } else if (colorContainer.children.length < 2) {
    alert('Pilih minimal 2 warna');
  } else if (!title.value) {
    alert('Judul harus diisi');
  } else {
    addPalette();
  }
}


var changeBG = document.querySelector('.switch');
changeBG.addEventListener('input', function() {
  var bodyE = document.body;
  var val = document.querySelector('.switch');
  var check = val.children[0].value;
  console.log(check);
  if (check == 'on') {
    bodyE.style.backgroundColor = 'var(--color2)';
    bodyE.style.color = 'var(--color1)';
  } else if (check == 'off') {
    bodyE.style.backgroundColor = 'var(--color1)';
    bodyE.style.color = 'var(--color2)';
  }
  
})
