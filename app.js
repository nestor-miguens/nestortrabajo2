const express = require('express');
const path = require('path');
const app = express();

app.get('/', (req,res) =>{
   res.sendFile(path.join(__dirname, './views/index.html'));  // Permite enviar un archivo HTML
});

app.use(express.static(path.join(__dirname, './public')));
app.use(express.static(path.join(__dirname, './views')));

app.get('/login', (req,res) =>{
  res.sendFile(path.resolve(__dirname, './views/login.html'));
});

app.get('/Registro', (req,res) =>{
    res.sendFile(path.resolve(__dirname, './views/registro.html'));
  });



app.listen(process.env.PORT || 3000, function() {
  console.log("Servidor corriendo");
})

// app.listen(3000, () => {
//     console.log("Servidor corriendo");
// });







