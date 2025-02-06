import React from 'react';

const Movies = [
  {
    id: 'm1',
    title: "Pushpa-2 The Rule",
    description: "Top-1 highest grosser movie",
    image: 'https://static.toiimg.com/photo/115989021.cms?imgsize=433878',
    collection: "1831-2000 cr",
  },
  {
    id: 'm2',
    title: "Bahubali-2 The Conclusion",
    description: "Top-2 highest grosser movie",
    image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSwAZddfdsmgj84MRQyRDfNxl-swkZRxt2IQX3gnLkzHl3EEzyD3dduWibKdNCCqOTyaL3WIw',
    collection: "1789-2000 cr",
  },{
    id:'m3',
    title:"RRR",
    description:"Top-3 highest grosser movie",
    image:"",
    collection:"1387 cr"
  }
];

// ✅ Corrected Component Name and Props Handling
const BoxofficeItem = ({ title, description, image, collection }) => {
  return (
    <div className="movie-card">
      <img src={image} alt={`Poster of ${title}`} className="movie-image" loading="lazy" />
      <h2>{title}</h2>
      <p>{description}</p>
      <p><strong>Box Office Collection:</strong> {collection}</p>
    </div>
  );
};

const Boxoffice = () => {
  return (
    <div className="movie-list">
      {Movies.map((movie) => (
        <BoxofficeItem key={movie.id} {...movie} />
      ))}
    </div>
  );
};

export default Boxoffice;
