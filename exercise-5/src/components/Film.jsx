export default function Film({film}) {
  return (
    <li className="movie-item" key={film.id}>
     
        <img src={film.image.src} alt={film.image.alt} />
        
        <span className="movie-rating">
          {film.rating}
        </span>

        <h3>{film.title}</h3>
    </li>
  );
}