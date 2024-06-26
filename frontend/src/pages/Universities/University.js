import React, { useEffect, useState } from 'react';
import axios from '../../api/axios'; // Axios konfigürasyonunuzu import edin
import './University.css';
import CommentsList from '../../components/commentsList';
import CommentForm from '../../components/commentForm';
import Modal from '../../components/Modal';

export const University = () => {
  const [universities, setUniversities] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUniversity, setSelectedUniversity] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios.get('/universities')
      .then(response => {
        console.log('Fetched universities:', response.data);
        setUniversities(response.data);
      })
      .catch(error => console.error('Error fetching university data:', error));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleOpenModal = (university) => {
    setSelectedUniversity(university);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUniversity(null);
  };

  const filteredUniversities = universities.filter(university =>
    university.name && university.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h2>Üniversitelerimiz</h2>
      <input
        type="text"
        placeholder="Üniversite ara..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
      <div className="universities-list" id="universitiesList">
        {filteredUniversities.map((university, index) => (
          <div key={index} className="university">
            <h2>{university.name}</h2>
            <p><strong>Üniversite Türü:</strong> {university.type}</p>
            <p><strong>Şehir:</strong> {university.city}</p>
            <p><strong>Web Sitesi:</strong> <a href={university.website} target="_blank" rel="noopener noreferrer">{university.website}</a></p>
            <p><strong>Adres:</strong> {university.address}</p>
            <button onClick={() => handleOpenModal(university)}>Yorumları Gör</button>
          </div>
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        {selectedUniversity && (
          <>
            <h2>{selectedUniversity.name} Yorumları</h2>
            <CommentsList universityId={selectedUniversity._id} />
            <CommentForm universityId={selectedUniversity._id} onNewComment={(comment) => {
              setSelectedUniversity({
                ...selectedUniversity,
                comments: [...(selectedUniversity.comments || []), comment]
              });
            }} />
          </>
        )}
      </Modal>
    </div>
  );
};

export default University;


// import React, { useEffect, useState } from 'react';
// import './University.css';
// import CommentsList from '../../components/commentsList';
// import CommentForm from '../../components/commentForm';
// import Modal from '../../components/Modal';

// export const University = () => {
//   const [universities, setUniversities] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedUniversity, setSelectedUniversity] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     fetch('/Universities.json')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log('Fetched universities:', data); // JSON verilerini kontrol etmek için
//         setUniversities(data);
//       })
//       .catch(error => console.error('Error fetching university data:', error));
//   }, []);

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const handleOpenModal = (university) => {
//     setSelectedUniversity(university);
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setSelectedUniversity(null);
//   };

//   const filteredUniversities = universities.filter(university =>
//     university.name && university.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   console.log('Search term:', searchTerm); // Arama terimini kontrol etmek için
//   console.log('Filtered universities:', filteredUniversities); // Filtrelenmiş üniversiteleri kontrol etmek için

//   return (
//     <div className="container">
//       <h2>Üniversitelerimiz</h2>
//       <input
//         type="text"
//         placeholder="Üniversite ara..."
//         value={searchTerm}
//         onChange={handleSearch}
//         className="search-input"
//       />
//       <div className="universities-list" id="universitiesList">
//         {filteredUniversities.map((university, index) => (
//           <div key={index} className="university">
//             <h2>{university.name}</h2>
//             <p><strong>Üniversite Türü:</strong> {university.type}</p>
//             <p><strong>Şehir:</strong> {university.city}</p>
//             <p><strong>Web Sitesi:</strong> <a href={university.website} target="_blank" rel="noopener noreferrer">{university.website}</a></p>
//             <p><strong>Adres:</strong> {university.address}</p>
//             <button onClick={() => handleOpenModal(university)}>Yorumları Gör</button>
//           </div>
//         ))}
//       </div>
//       <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
//         {selectedUniversity && (
//           <>
//             <h2>{selectedUniversity.name} Yorumları</h2>
//             <CommentsList universityId={selectedUniversity._id} /> {/* _id değerini geçirin */}
//             <CommentForm universityId={selectedUniversity._id} onNewComment={(comment) => {
//               setSelectedUniversity({
//                 ...selectedUniversity,
//                 comments: [...(selectedUniversity.comments || []), comment]
//               });
//             }} />
//           </>
//         )}
//       </Modal>
//     </div>
//   );
// };

// export default University;
