import React from 'react';
import './Home.css';

const movies = [

  {
    title: "Avengers: Endgame",
    description: 'The epic conclusion of the Avengers saga.',
    image: "https://th.bing.com/th/id/OIP.WVWesbet0E70HmkG7weOjQHaKC?rs=1&pid=ImgDetMain",
    trailer: "https://www.youtube.com/embed/TcMBFSGVi1c",
    primeLink: "https://www.primevideo.com/detail/Avengers-Endgame/0F75TJFT4U1PJ6K2N8XQL26RTF"
  },
  {
    title: "Spider-Man: No Way Home",
    description: 'Peter Parker’s multiverse adventure.',
    image: "https://images3.alphacoders.com/247/247849.jpg",
    trailer: "https://www.youtube.com/embed/JfVOs4VYJY8",
    primeLink: "https://www.primevideo.com/detail/Spider-Man-No-Way-Home/0F75TJFT4U1PJ6K2N8XQL26RTF"
  },
  {
    title: "The Batman",
    description: 'A dark and gritty version of the iconic superhero.',
    image: "https://th.bing.com/th/id/R.ebf693b9e77eedf6380e01cf0ec89639?rik=YaG%2fhFoXgQHYPg&riu=http%3a%2f%2fbamsmackpow.com%2ffiles%2f2016%2f04%2fBatman4.jpg&ehk=egi6WZKGsaSGwfCILM2ELNLLT2WSCOLTA0tgqnYSURk%3d&risl=&pid=ImgRaw&r=0",
    trailer: "https://www.youtube.com/embed/mqqft2x_Aa4",
    primeLink: "https://www.primevideo.com/detail/The-Batman/0F75TJFT4U1PJ6K2N8XQL26RTF"
  },
  {
    title: "The Dark Knight",
    description: 'A masterpiece of modern superhero cinema.',
    image: "https://th.bing.com/th/id/R.a64310aeeb38ceb1e3224435933cf524?rik=qti0rIt8iuCrPQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fVg6ESpH.jpg&ehk=WHfL2mA0UkIPwTjQh0w%2fljyAQyRtPZhoemSNP8%2bj6Ww%3d&risl=&pid=ImgRaw&r=0",
    trailer: "https://www.youtube.com/embed/EXeTwQWrcwY",
    primeLink: "https://www.primevideo.com/detail/The-Dark-Knight/0F75TJFT4U1PJ6K2N8XQL26RTF"
  },
  {
    title: "Interstellar",
    description: 'A visually stunning, mind-bending sci-fi film.',
    image: "https://th.bing.com/th/id/OIP.jVVUF1D1uEuSPvQtvM5uXgHaLH?rs=1&pid=ImgDetMain",
    trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
    primeLink: "https://www.primevideo.com/detail/Interstellar/0F75TJFT4U1PJ6K2N8XQL26RTF"
  },
  {
    title: "Inception",
    description: 'A mind-bending thriller about dreams within dreams.',
    image: "https://flxt.tmsimg.com/assets/p7825626_p_v8_af.jpg",
    trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
    primeLink: "https://www.primevideo.com/detail/Inception/0F75TJFT4U1PJ6K2N8XQL26RTF"
  },
  {
    title: "Frozen II",
    description: 'A magical journey to the unknown.',
    image: "https://images6.alphacoders.com/491/thumb-1920-491326.jpg",
    trailer: "https://www.youtube.com/embed/ZKsvSRFqgrI",
    primeLink: "https://www.primevideo.com/detail/Frozen-II/0F75TJFT4U1PJ6K2N8XQL26RTF"
  },
 
];

const MovieCard = ({title, image, trailer, description, primeLink}) => {
  return (
    <div className='movie-card'>
      <img src={image} alt={title} className='movie-image' />
      <h2 className='movie-title'>{title}</h2>
      <p className='p'>{description}</p>
      <iframe className='movie-trailer' src={trailer} title={title} allowFullScreen></iframe>
      <div className='movie-link'>
        <a href={primeLink} target="_blank" rel="noopener noreferrer">Watch On Prime</a>
      </div>
    </div>
  );
};

const MovieList = () => {
  return (
    <div className='movie-list'>
      {movies.map((movie, index) => (
        <MovieCard key={index} {...movie} />
      ))}
    </div>
  );
};

export default MovieList;
