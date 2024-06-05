// import React, { useState } from 'react';
// import Tesseract from 'tesseract.js';

// export const OCRComponent = () => {
//   const [text, setText] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleImageUpload = (event) => {
//     const file = event.target.files[0];
//     setLoading(true);

//     Tesseract.recognize(
//       file,
//       'tur', // Türkçe dil desteği
//       {
//         logger: (m) => console.log(m),
//       }
//     ).then(({ data: { text } }) => {
//       setText(text);
//       setLoading(false);
//     }).catch(err => {
//       console.error(err);
//       setLoading(false);
//     });
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleImageUpload} />
//       {loading ? <p>Yükleniyor...</p> : <p>{text}</p>}
//     </div>
//   );
// };

// export default OCRComponent;
