# TaskFlow API

Görev ve proje yönetim sistemi için geliştirilmiş basit bir REST API. Node.js ve Express.js kullanılarak yazılmıştır.

## Özellikler

- Görev ekleme, listeleme, detay görüntüleme, güncelleme ve silme (CRUD)
- Tüm isteklerin loglanması (method, endpoint, zaman damgası)
- JSON dosyası ile veri kalıcılığı

## Kurulum

1. Projeyi indirin / klonlayın.
2. Proje klasörüne girin:
```
   cd taskflow
```
3. Bağımlılıkları kurun:
```
   npm install
```
4. Sunucuyu başlatın:
```
   npm start
```
5. Sunucu `http://localhost:3000` adresinde çalışmaya başlayacaktır.

## Klasör Yapısı

```
taskflow/
├── data/
│   └── tasks.json          # Görev verilerinin tutulduğu dosya
├── routes/
│   └── taskRoutes.js       # Endpoint tanımları
├── controllers/
│   └── taskController.js   # CRUD iş mantığı
├── middleware/
│   └── logger.js           # İstek loglama middleware'i
├── server.js                # Uygulamanın giriş noktası
└── package.json
```

## API Endpoint'leri

| Metod  | Endpoint       | Açıklama                     |
|--------|----------------|-------------------------------|
| GET    | /tasks         | Tüm görevleri listeler        |
| GET    | /tasks/:id     | Belirli bir görevin detayını getirir |
| POST   | /tasks         | Yeni görev oluşturur          |
| PUT    | /tasks/:id     | Var olan görevi günceller     |
| DELETE | /tasks/:id     | Görevi siler                  |

### Örnek İstek Gövdesi (POST / PUT)

```json
{
  "title": "Görev başlığı",
  "description": "Görev açıklaması",
  "priority": "high",
  "assignee": "ozgur"
}
```

## Test

Tüm CRUD endpoint'leri Postman ile test edilmiştir.

### POST /tasks — Görev Ekleme
![POST](<Postman Test Ekran Görüntüleri/POST Tasks Görev Ekleme.png>)

### GET /tasks — Tüm Görevleri Listeleme
![GET all](<Postman Test Ekran Görüntüleri/GET Tasks Tüm Görevleri Listele.png>)

### GET /tasks/:id — Görev Detayı
![GET one](<Postman Test Ekran Görüntüleri/GET Tasks id Görev Detayı.png>)

### PUT /tasks/:id — Görev Güncelleme
![PUT](<Postman Test Ekran Görüntüleri/PUT Tasks id Görev Güncelleme.png>)

### DELETE /tasks/:id — Görev Silme
![DELETE](<Postman Test Ekran Görüntüleri/DELETE Tasks id Görev Silme.png>)

## Kullanılan Teknolojiler

- Node.js
- Express.js