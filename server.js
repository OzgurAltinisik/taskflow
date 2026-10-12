const express = require('express');
const logger=require('./middleware/logger');
const taskRoutes=require('./routes/taskRoutes');

const app=express();
const PORT=3000;
//Gelen istekleri body'sini okumak için
app.use(express.json());
//Logger middleware - her istekte çalışır
app.use(logger);
//Task routes yönlendirme
app.use('/tasks',taskRoutes);
//Ana sayfa
app.get('/',(req,res)=>{
    res.send('TaskFlow API Çalışıyor!');
});
app.listen(PORT, () => {
  console.log(`TaskFlow API http://localhost:${PORT} adresinde çalışıyor`);
});
