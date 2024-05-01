
# UniRehber

Süleyman Demirel Üniversitesi Bilgisayar Mühendisliği bölümünde Tasarım dersi için yapmış olduğumuz bir web uygulamasıdır. 

Uygulamanın sağladığı imkanlar :  

- Ürünleri ve ürün detaylarını görüntüleme,
- Kayıt olabilme,
- Giriş yapabilme,
- Kullanıcı için :
    - Tercih robotunu kullanma,
    - Üniversiteleri taban puanlarına göre sıralayabilme,
    - Sipariş verebilme,
    - Bilgilerini ekleyebilme,
    - Bilgilerini silebilme,
    - Bilgilerini güncelleyebilme,
    - Siparişlerini yönetebilme,
    - Favorilere ekleyebilme,
    - Favorilerini yönetebilme ve filtreleyebilme imkanları
- Admin için :  (Admin, kullanıcının imkanlarına da sahiptir. Aşağıda yazanlar ek özellikleridir.)
    - Yeni üniversite, bölüm ekleyebilme,
    - İstenilen üniversite ve bölümlerin silinmesi,
    - İstenilen alanları güncelleyebilme,
    - Kullanıcıları görüntüleyebilme, filtreleyebilme,
    - Kulllanıcıları silebilme,


## Uygulama Özellikleri

Bu uygulama `npx create-react-app` komutu ile oluşturulmuş bir React.js projesidir.

- Uygulama front-end ve back-end olmak üzere iki kısımdan oluşmaktadır.
- Front-End çatısı olarak [React](https://react.dev/) kullanılmıştır.
- Back-End Çatısı olarak [Express.Js](https://expressjs.com/) kullanılmıştır.
- Front-End ve back-end arasındaki iletişim Rest Api ile sağlanmıştır.

## **Kullanılan Teknolojiler ve Araçlar**

- Front-end: React
- Back-end: ExpressJS
- Veritabanı: MongoDB
- Veri Modelleme: Mongoose
- Kimlik Doğrulama, Güvenlik: PassportJS, JWT
- Validasyon İşlemleri : YupJs
- Component Kütüphanesi : Mui, Antd
- Haberleşme: REST API, Axios, React Query
- Sayfa Yönlendirme: React Router Dom
- Form Yönetim Aracı : Formik
- Test: Postman
- IDE: Visual Studio Code
- REST API Client: Postman
- Versiyonlama: Git

## Uygulamanın Kişisel Bilgisayarınıza İndirilmesi

- **Uygulamayı İndirmek İçin :**

```bash
git clone https://github.com/SDU-Bilgisayar-Muhendisligi/PieCentralPizza.git
```

## **Kütüphanelerin Yüklenmesi**

Çalıştırmadan önce gerekli kütüphanelerin yüklenmesi gerekir. 

- Uygulama içindeki Back-End klasörü içindeyken terminalde aşağıdaki komutu kullanarak bu kütüphaneleri yükleyin.

```bash
npm install
```

- Uygulama içindeki Front-End klasörü içindeyken terminalde aşağıdaki komutu kullanarak bu kütüphaneleri yükleyin.

```bash
npm install
```

## Uygulamanın Çalıştırılması

- Uygulama içindeki Back-End klasörü içindeyken terminalde aşağıdaki komutu kullanarak Back-End’i çalıştırın.

```bash
npm start 
```

Back-End çalışınca terminal şöyle görünecek : 

![backend](./photos/Readme/backend.png)

- Şimdi de uygulama içindeki Front-End klasörü içindeyken terminalde aşağıdaki komutu kullanarak Front-End’i çalıştırın.

```bash
npm start
```

Front-End çalışınca terminal şöyle görünecek : 

![frontend](./photos/Readme/frontend.png)

Uygulama artık local’inizde çalışır halde.

#
