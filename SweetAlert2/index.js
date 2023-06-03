const boton = document.getElementById('ponerAlerta');

boton.addEventListener('click', ()=>{
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1500
  })
})