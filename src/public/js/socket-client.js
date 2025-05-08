const socket = io();

socket.on('productAdded', product => {
  alert(`Nuevo producto agregado: ${product.title}`);
});
