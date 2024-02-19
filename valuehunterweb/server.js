const express = require('express');
const path = require('path');
const app = express();

// Sunucu tarafı dosyaları için bir static middleware kullanılır
app.use(express.static(path.join(__dirname, 'build')));

// Tüm istekler için React uygulamasının ana sayfasını gönderir
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Sunucuyu belirli bir portta başlatır
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Express çalışıyor, port: ${PORT}`);
});
