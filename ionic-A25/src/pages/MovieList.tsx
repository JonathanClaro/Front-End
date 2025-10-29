import {IonModal, IonInput, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonItem, IonLabel, IonButton, IonButtons, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonImg, IonBadge} from '@ionic/react';
import { useState } from 'react';
import './MovieList.css';

const MovieList: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<any>(null);

  const allMovies = [
    { id: 1, title: 'Dune: Part Two', img: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/8LJJjLjAzAwXS40S5mx79PJ2jSs.jpg', description: 'Paul Atreides une-se aos Fremen numa jornada de vingança e destino em Arrakis.', genre: 'Sci-Fi', rating: 8.7 },
    { id: 2, title: 'Oppenheimer', img: 'https://media.themoviedb.org/t/p/w300_and_h450_bestv2/1OsQJEoSXBjduuCvDOlRhoEUaHu.jpg', description: 'A história de J. Robert Oppenheimer e o Projeto Manhattan.', genre: 'Biografia/Drama', rating: 8.4 },
    { id: 3, title: 'Top Gun: Maverick', img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8v3lrllHYRrqEdYWLyscH4RGFDO.jpg', description: 'Maverick regressa para treinar uma nova geração de pilotos.', genre: 'Ação', rating: 8.3 },
    { id: 4, title: 'Babylon', img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qZUmMxJbGmkIYwnS7qRfSOREmvC.jpg', description: 'Excessos e ambição em Hollywood na transição do cinema mudo para o sonoro.', genre: 'Drama', rating: 7.2 },
    { id: 5, title: 'Once Upon a Time in Hollywood', img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zgr02U2Fh0sR5JtaAXY5yBU1wka.jpg', description: 'Um ator em declínio e o seu duplo atravessam a Hollywood de 1969.', genre: 'Comédia/Drama', rating: 7.6 },
    { id: 6, title: 'Avengers: Endgame', img: 'https://image.tmdb.org/t/p/w500/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg', description: 'Os Vingadores tentam desfazer o estalar de dedos de Thanos numa derradeira missão.', genre: 'Ação/Sci-Fi', rating: 8.5 },
    { id: 7, title: 'Avengers: Infinity War', img: 'https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg', description: 'Thanos recolhe as Joias do Infinito enquanto heróis de todo o mundo se unem.', genre: 'Ação/Sci-Fi', rating: 8.4 },
    { id: 8, title: 'Blade Runner 2049', img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/49pANIZXRAdHUiWjjBv4vxPeqRC.jpg', description: 'Um novo blade runner descobre um segredo que pode abalar a sociedade.', genre: 'Sci-Fi/Neo-noir', rating: 8.0 },
    { id: 9, title: 'La La Land', img: 'https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg', description: 'Amor e ambições artísticas cruzam-se em Los Angeles.', genre: 'Musical/Romance', rating: 8.0 },
    { id: 10, title: 'Interstellar', img: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg', description: 'Uma expedição espacial procura um novo lar para a humanidade.', genre: 'Sci-Fi/Aventura', rating: 8.6 },
    { id: 11, title: 'Inception', img: 'https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg', description: 'Um ladrão invade sonhos para plantar uma ideia na mente de alguém.', genre: 'Sci-Fi/Thriller', rating: 8.8 },
    { id: 12, title: 'Toy Story 3', img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rf67AeS9nP8DD7dZYbvhjEVoIBf.jpg', description: 'Woody e Buzz enfrentam uma nova aventura quando Andy parte para a faculdade.', genre: 'Animação', rating: 8.3 },
    { id: 13, title: 'The Dark Knight', img: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg', description: 'Batman enfrenta o Joker numa batalha pelo futuro de Gotham.', genre: 'Ação/Crime', rating: 9.0 },
    { id: 14, title: 'Superbad', img: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vKFyD2wRl3qCKpbVWjIB3QAWo0K.jpg', description: 'Dois amigos tentam aproveitar ao máximo a última semana do secundário.', genre: 'Comédia', rating: 7.5 },
    { id: 15, title: 'Parasite', img: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg', description: 'Duas famílias coreanas entrelaçam-se num jogo social perigoso.', genre: 'Thriller/Drama', rating: 8.6 },
    { id: 16, title: 'Dune', img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/d5NXSklXo0qyIYkgV94XAgMIckC.jpg', description: 'O jovem Paul Atreides embarca numa jornada épica para salvar o seu povo.', genre: 'Sci-Fi/Aventura', rating: 8.0 },
    { id: 17, title: 'Inglourious Basterds', img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/7sfbEnaARXDDhKm0CZ7D7uc2sbo.jpg', description: 'Durante a Segunda Guerra Mundial, um grupo de soldados judeus americanos planeia eliminar líderes nazis.', genre: 'Ação/Drama', rating: 8.3 },
    { id: 18, title: 'Pulp Fiction', img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/fIE3lAGcZDV1G6XM5KmuWnNsPp1.jpg', description: 'Histórias entrelaçadas de crime, redenção e ironia em Los Angeles.', genre: 'Crime/Drama', rating: 8.9 },
  ];

  const extraDetails: Record<number, {
    tagline?: string;
    longPlot?: string;
    director?: string;
    writers?: string[];
    cast?: string[];
    runtime?: string;
    releaseDate?: string;
    languages?: string[];
    genres?: string[];
    boxOffice?: string;
    awards?: string;
    production?: string[];
    trivia?: string[];
    trailerUrl?: string;
  }> = {
    1: {
      tagline: "Fate leads. Sand remembers.",
      longPlot: "Paul Atreides alia-se aos Fremen para unir Arrakis e desafiar a ordem imperial. Entre política, religião e ecologia, o destino transforma-se em inevitabilidade.",
      director: "Denis Villeneuve",
      writers: ["Denis Villeneuve", "Jon Spaihts", "Frank Herbert (romance)"],
      cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson", "Javier Bardem"],
      runtime: "2h 46m",
      releaseDate: "2024-03-01",
      languages: ["EN"],
      genres: ["Sci-Fi", "Aventura"],
      boxOffice: "$711M",
      awards: "Vários prémios técnicos (VFX, Som)",
      production: ["Legendary", "Warner Bros."],
      trivia: ["Filmado em IMAX nativo.", "Design sonoro a “respirar” com a areia."],
      trailerUrl: "https://www.youtube.com/watch?v=Way9Dexny3w"
    },
    2: {
      tagline: "The world forever changes.",
      longPlot: "Retrato psicológico de J. Robert Oppenheimer e da equipa do Projeto Manhattan, cruzando ambição científica e peso moral.",
      director: "Christopher Nolan",
      writers: ["Christopher Nolan"],
      cast: ["Cillian Murphy", "Emily Blunt", "Robert Downey Jr.", "Matt Damon"],
      runtime: "3h 0m",
      releaseDate: "2023-07-21",
      languages: ["EN"],
      genres: ["Biografia", "Drama"],
      boxOffice: "$957M",
      awards: "Óscares – Melhor Filme, Realização, Ator",
      production: ["Syncopy", "Universal"],
      trivia: ["Explosão Trinity sem CGI.", "Filmado em IMAX 65mm e B&W IMAX."],
      trailerUrl: "https://www.youtube.com/watch?v=uYPbbksJxIg"
    },
    3: {
      tagline: "Feel the need… again.",
      longPlot: "Maverick regressa como instrutor para treinar a elite da Marinha numa missão impossível que exige precisão, coragem e redenção.",
      director: "Joseph Kosinski",
      writers: ["Ehren Kruger", "Eric Warren Singer", "Christopher McQuarrie"],
      cast: ["Tom Cruise", "Miles Teller", "Jennifer Connelly", "Glen Powell"],
      runtime: "2h 10m",
      releaseDate: "2022-05-27",
      languages: ["EN"],
      genres: ["Ação", "Drama"],
      boxOffice: "$1.49B",
      awards: "Óscar – Melhor Som",
      production: ["Skydance", "Paramount"],
      trivia: ["Atores dentro de F/A-18.", "Rigs IMAX custom para cenas aéreas."],
      trailerUrl: "https://www.youtube.com/watch?v=giXco2jaZ_4"
    },
    4: {
      tagline: "The party’s over.",
      longPlot: "Da era do cinema mudo até ao sonoro, 'Babylon' explora o caos, os excessos e as metamorfoses de Hollywood.",
      director: "Damien Chazelle",
      writers: ["Damien Chazelle"],
      cast: ["Brad Pitt", "Margot Robbie", "Diego Calva"],
      runtime: "3h 9m",
      releaseDate: "2022-12-23",
      languages: ["EN"],
      genres: ["Drama", "Comédia", "Histórico"],
      boxOffice: "$63M",
      awards: "Nomeações – música e design",
      production: ["Paramount"],
      trivia: ["7000+ figurinos.", "Filmado em 35mm para textura vintage."],
      trailerUrl: "https://www.youtube.com/watch?v=t7HT83wkVss"
    },
    5: {
      tagline: "Once upon a time in Hollywood...",
      longPlot: "Um ator em declínio e o seu duplo procuram relevância em 1969 enquanto LA muda à sua volta.",
      director: "Quentin Tarantino",
      writers: ["Quentin Tarantino"],
      cast: ["Leonardo DiCaprio", "Brad Pitt", "Margot Robbie"],
      runtime: "2h 41m",
      releaseDate: "2019-07-26",
      languages: ["EN"],
      genres: ["Comédia", "Drama"],
      boxOffice: "$377M",
      awards: "Óscar – Ator Secundário (Brad Pitt)",
      production: ["Sony", "Columbia"],
      trivia: ["LA de 1969 reconstruída.", "Rodado em 35mm."],
      trailerUrl: "https://www.youtube.com/watch?v=ELeMaP8EPAA"
    },
    6: {
      tagline: "Part of the journey is the end.",
      longPlot: "Após o estalar de dedos de Thanos, os Vingadores enfrentam o sacrifício final para restaurar o universo.",
      director: "Anthony Russo, Joe Russo",
      writers: ["Christopher Markus", "Stephen McFeely"],
      cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson", "Chris Hemsworth"],
      runtime: "3h 1m",
      releaseDate: "2019-04-26",
      languages: ["EN"],
      genres: ["Ação", "Sci-Fi"],
      boxOffice: "$2.79B",
      awards: "Nomeado – VFX",
      production: ["Marvel Studios"],
      trivia: ["Recorde de bilheteira até 2021."],
      trailerUrl: "https://www.youtube.com/watch?v=TcMBFSGVi1c"
    },
    7: {
      tagline: "Destiny arrives.",
      longPlot: "Os Vingadores unem forças para impedir Thanos de reunir as Joias do Infinito e reescrever a realidade.",
      director: "Anthony Russo, Joe Russo",
      writers: ["Christopher Markus", "Stephen McFeely"],
      cast: ["Josh Brolin", "Chris Pratt", "Tom Holland", "Benedict Cumberbatch"],
      runtime: "2h 29m",
      releaseDate: "2018-04-27",
      languages: ["EN"],
      genres: ["Ação", "Sci-Fi"],
      boxOffice: "$2.05B",
      awards: "Nomeado – VFX",
      production: ["Marvel Studios"],
      trivia: ["Thanos 100% CGI com captura de movimento."],
      trailerUrl: "https://www.youtube.com/watch?v=6ZfuNTqbHE8"
    },
    8: {
      tagline: "The key to the future is finally unearthed.",
      longPlot: "Trinta anos após Deckard, um novo blade runner descobre um segredo capaz de alterar a humanidade.",
      director: "Denis Villeneuve",
      writers: ["Hampton Fancher", "Michael Green"],
      cast: ["Ryan Gosling", "Harrison Ford", "Ana de Armas"],
      runtime: "2h 44m",
      releaseDate: "2017-10-06",
      languages: ["EN"],
      genres: ["Sci-Fi", "Neo-noir"],
      boxOffice: "$259M",
      awards: "Óscar – Cinematografia, VFX",
      production: ["Warner", "Alcon"],
      trivia: ["Deakins venceu seu 1º Óscar de foto."],
      trailerUrl: "https://www.youtube.com/watch?v=gCcx85zbxz4"
    },
    9: {
      tagline: "Here's to the fools who dream.",
      longPlot: "Uma atriz e um músico lutam por amor e sucesso em LA num musical sobre sonhos e sacrifício.",
      director: "Damien Chazelle",
      writers: ["Damien Chazelle"],
      cast: ["Emma Stone", "Ryan Gosling"],
      runtime: "2h 8m",
      releaseDate: "2016-12-09",
      languages: ["EN"],
      genres: ["Musical", "Romance"],
      boxOffice: "$447M",
      awards: "Óscar – Realização, Atriz",
      production: ["Summit"],
      trivia: ["Abertura em “one take” simulado num viaduto."],
      trailerUrl: "https://www.youtube.com/watch?v=0pdqf4P9MB8"
    },
    10: {
      tagline: "Mankind was born on Earth. It was never meant to die here.",
      longPlot: "Uma missão interestelar procura um novo lar para a humanidade à beira do colapso ecológico.",
      director: "Christopher Nolan",
      writers: ["Jonathan Nolan", "Christopher Nolan"],
      cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
      runtime: "2h 49m",
      releaseDate: "2014-11-07",
      languages: ["EN"],
      genres: ["Sci-Fi", "Aventura"],
      boxOffice: "$677M",
      awards: "Óscar – VFX",
      production: ["Syncopy", "Paramount"],
      trivia: ["Consultoria do físico Kip Thorne."],
      trailerUrl: "https://www.youtube.com/watch?v=zSWdZVtXT7E"
    },
    11: {
      tagline: "Your mind is the scene of the crime.",
      longPlot: "Um ladrão especialista em extrair segredos através dos sonhos recebe a tarefa de implantar uma ideia.",
      director: "Christopher Nolan",
      writers: ["Christopher Nolan"],
      cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
      runtime: "2h 28m",
      releaseDate: "2010-07-16",
      languages: ["EN"],
      genres: ["Sci-Fi", "Thriller"],
      boxOffice: "$837M",
      awards: "Óscares técnicos (Som, Foto, Mix)",
      production: ["Syncopy", "Warner"],
      trivia: ["Arquitetura de sonhos influenciou design de sets."],
      trailerUrl: "https://www.youtube.com/watch?v=YoHD9XEInc0"
    },
    12: {
      tagline: "No toy gets left behind.",
      longPlot: "Woody, Buzz e os amigos enfrentam um novo lar quando Andy parte para a faculdade.",
      director: "Lee Unkrich",
      writers: ["Michael Arndt"],
      cast: ["Tom Hanks", "Tim Allen", "Joan Cusack"],
      runtime: "1h 43m",
      releaseDate: "2010-06-18",
      languages: ["EN"],
      genres: ["Animação", "Aventura"],
      boxOffice: "$1.06B",
      awards: "Óscar – Animação",
      production: ["Pixar", "Disney"],
      trivia: ["Primeiro filme de animação a ultrapassar $1B."],
      trailerUrl: "https://www.youtube.com/watch?v=2BlMNH1QTeE"
    },
    13: {
      tagline: "Why so serious?",
      longPlot: "Batman enfrenta o Joker num jogo de caos que testa os limites da justiça e de Gotham.",
      director: "Christopher Nolan",
      writers: ["Jonathan Nolan", "Christopher Nolan"],
      cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
      runtime: "2h 32m",
      releaseDate: "2008-07-18",
      languages: ["EN"],
      genres: ["Ação", "Crime"],
      boxOffice: "$1.02B",
      awards: "Óscar – Ator Secundário (Ledger)",
      production: ["Legendary", "Syncopy", "Warner"],
      trivia: ["Ledger manteve diário do Joker.", "Partes em IMAX 65mm."],
      trailerUrl: "https://www.youtube.com/watch?v=EXeTwQWrcwY"
    },
    14: {
      tagline: "Come and get some!",
      longPlot: "Dois amigos tentam conseguir álcool para uma festa inesquecível antes da universidade.",
      director: "Greg Mottola",
      writers: ["Seth Rogen", "Evan Goldberg"],
      cast: ["Jonah Hill", "Michael Cera", "Christopher Mintz-Plasse"],
      runtime: "1h 53m",
      releaseDate: "2007-08-17",
      languages: ["EN"],
      genres: ["Comédia"],
      boxOffice: "$170M",
      awards: "Vários prémios de comédia",
      production: ["Columbia", "Apatow Productions"],
      trivia: ["Baseado na adolescência de Rogen/Goldberg."],
      trailerUrl: "https://www.youtube.com/watch?v=FqNTjs4b4_c"
    },
    15: {
      tagline: "Act like you own the place.",
      longPlot: "Sátira social onde duas famílias de estratos opostos se cruzam num jogo de dependência e sobrevivência.",
      director: "Bong Joon-ho",
      writers: ["Bong Joon-ho", "Han Jin-won"],
      cast: ["Song Kang-ho", "Choi Woo-shik", "Park So-dam"],
      runtime: "2h 12m",
      releaseDate: "2019-05-30",
      languages: ["KO"],
      genres: ["Thriller", "Drama"],
      boxOffice: "$263M",
      awards: "Óscares – Melhor Filme/Realização",
      production: ["Barunson E&A"],
      trivia: ["Casa construída de raiz para o filme."],
      trailerUrl: "https://www.youtube.com/watch?v=SEUXfv87Wpk"
    },
    16: {
      tagline: "Beyond fear, destiny awaits.",
      longPlot: "O jovem Paul Atreides descobre o seu papel num conflito interestelar pelo controlo de Arrakis.",
      director: "Denis Villeneuve",
      writers: ["Jon Spaihts", "Eric Roth"],
      cast: ["Timothée Chalamet", "Rebecca Ferguson", "Oscar Isaac"],
      runtime: "2h 35m",
      releaseDate: "2021-10-22",
      languages: ["EN"],
      genres: ["Sci-Fi", "Aventura"],
      boxOffice: "$402M",
      awards: "Óscar – VFX, Som, etc.",
      production: ["Legendary", "Warner"],
      trivia: ["Planeado como duas partes desde o início."],
      trailerUrl: "https://www.youtube.com/watch?v=n9xhJrPXop4"
    },
    17: {
      tagline: "Once upon a time in Nazi-occupied France.",
      longPlot: "Uma equipa de soldados judeus-americanos executa um plano improvável contra a liderança nazi enquanto uma dona de cinema planeia vingança.",
      director: "Quentin Tarantino",
      writers: ["Quentin Tarantino"],
      cast: ["Brad Pitt", "Christoph Waltz", "Mélanie Laurent"],
      runtime: "2h 33m",
      releaseDate: "2009-08-21",
      languages: ["EN", "DE", "FR"],
      genres: ["Ação", "Drama", "Guerra"],
      boxOffice: "$321M",
      awards: "Óscar – Ator Secundário (Christoph Waltz)",
      production: ["Universal", "The Weinstein Company"],
      trivia: ["Diálogos em múltiplas línguas reforçam autenticidade."],
      trailerUrl: "https://www.youtube.com/watch?v=KnrRy6kSFF0"
    },
    18: {
      tagline: "Just because you are a character doesn't mean you have character.",
      longPlot: "Histórias entrelaçadas de crime e redenção cruzam gangsters, pugilistas e uma misteriosa mala.",
      director: "Quentin Tarantino",
      writers: ["Quentin Tarantino", "Roger Avary"],
      cast: ["John Travolta", "Samuel L. Jackson", "Uma Thurman", "Bruce Willis"],
      runtime: "2h 34m",
      releaseDate: "1994-10-14",
      languages: ["EN"],
      genres: ["Crime", "Drama"],
      boxOffice: "$213M",
      awards: "Óscar – Argumento Original",
      production: ["Miramax", "A Band Apart"],
      trivia: ["Narrativa não-linear redefiniu o cinema dos anos 90."],
      trailerUrl: "https://www.youtube.com/watch?v=s7EdQ4FqbhY"
    }
  };

  const filteredMovies = allMovies.filter(movie =>
    movie.title.toLowerCase().includes(searchText.toLowerCase()) ||
    movie.description.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='page-title' slot="start">Movie List</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => window.location.href = '/home'}>Home</IonButton>
            <IonButton onClick={() => window.location.href = '/releases'}>Releases</IonButton>
            <IonButton onClick={() => window.location.href = '/movie-list'}>Movie List</IonButton>
            <IonButton onClick={() => setIsModalOpen(true)}>Subscribe</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonModal className="news-modal" isOpen={isModalOpen} onDidDismiss={() => setIsModalOpen(false)}>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Subscribe to Newsletter</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonItem>
            <IonLabel position="stacked">Email</IonLabel>
            <IonInput
              type="email"
              value={email}
              onIonChange={(e) => setEmail(e.detail.value!)}
              placeholder="Enter your email"
            />
          </IonItem>
          <IonButton expand="block" onClick={() => { setEmail(''); setIsModalOpen(false); }} className="ion-margin-top">
            Subscribe
          </IonButton>
        </IonContent>
      </IonModal>

      <IonContent fullscreen>
        <IonSearchbar
          value={searchText}
          onIonInput={(e) => setSearchText(e.detail.value!)}
          placeholder="Search movies..."
        />
        <IonGrid>
          <IonRow>
            {filteredMovies.map((movie) => (
              <IonCol size="6" size-md="4" size-lg="3" size-xl="2" key={movie.id}>
                <IonCard className='mv-card' onClick={() => { setSelectedMovie(movie); setShowDetailModal(true); }}>
                  <div className="poster-wrapper">
                    <IonImg className='movie-card-img' src={movie.img} alt={movie.title} />
                    <div className={`rating-circle ${movie.rating >= 8 ? 'high' : movie.rating >= 6 ? 'medium' : 'low'}`}>
                      {movie.rating}
                    </div>
                  </div>
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>

       <IonModal
  className="modal-details"
  isOpen={showDetailModal}
  onDidDismiss={() => setShowDetailModal(false)}
>
  <IonHeader>
    <IonToolbar>
      <IonTitle>{selectedMovie?.title || 'Movie Details'}</IonTitle>
    </IonToolbar>
  </IonHeader>

  <IonContent className="ion-padding">
    {!selectedMovie && (
      <div style={{ color: '#ccc', textAlign: 'center', padding: 16 }}>
        Loading…
      </div>
    )}

    {selectedMovie && (
      (() => {
        const info = (extraDetails as any)?.[selectedMovie.id] || {};
        return (
          <div className="detail-layout">
            <div className="detail-poster">
              <IonImg
                className="movie-modal-img"
                src={selectedMovie.img}
                alt={selectedMovie.title}
              />
            </div>

            <div className="detail-content">
              {info.tagline && (
                <p className="detail-tagline">“{info.tagline}”</p>
              )}

              <p className="detail-plot">
                {info.longPlot || selectedMovie.description}
              </p>

              <div className="chip-row">
                {(info.genres || [selectedMovie.genre])
                  .filter(Boolean)
                  .map((g: string) => (
                    <span className="chip" key={g}>{g}</span>
                  ))}
              </div>

              <div className="facts-grid">
                {info.director && (
                  <div>
                    <h5>Director</h5>
                    <p>{info.director}</p>
                  </div>
                )}
                {Array.isArray(info.writers) && info.writers.length > 0 && (
                  <div>
                    <h5>Writers</h5>
                    <p>{info.writers.join(', ')}</p>
                  </div>
                )}
                {Array.isArray(info.cast) && info.cast.length > 0 && (
                  <div>
                    <h5>Cast</h5>
                    <p>{info.cast.join(', ')}</p>
                  </div>
                )}
                {info.runtime && (
                  <div>
                    <h5>Runtime</h5>
                    <p>{info.runtime}</p>
                  </div>
                )}
                {info.releaseDate && (
                  <div>
                    <h5>Release</h5>
                    <p>{info.releaseDate}</p>
                  </div>
                )}
                {Array.isArray(info.languages) && info.languages.length > 0 && (
                  <div>
                    <h5>Languages</h5>
                    <p>{info.languages.join(', ')}</p>
                  </div>
                )}
                {info.boxOffice && (
                  <div>
                    <h5>Box Office</h5>
                    <p>{info.boxOffice}</p>
                  </div>
                )}
                {info.awards && (
                  <div>
                    <h5>Awards</h5>
                    <p>{info.awards}</p>
                  </div>
                )}
              </div>

              {(Array.isArray(info.production) || Array.isArray(info.trivia)) && (
                <div className="notes-wrap">
                  {Array.isArray(info.production) && info.production.length > 0 && (
                    <div className="notes-block">
                      <h4>Production</h4>
                      <ul>
                        {info.production.map((p: string) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {Array.isArray(info.trivia) && info.trivia.length > 0 && (
                    <div className="notes-block">
                      <h4>Trivia</h4>
                      <ul>
                        {info.trivia.map((t: string) => (
                          <li key={t}>{t}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {info.trailerUrl && (
                <div className="trailer-row">
                  <a
                    className="trailer-btn"
                    href={info.trailerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch Trailer
                  </a>
                </div>
              )}
            
              <IonBadge color="primary">{selectedMovie.genre}</IonBadge>

              <IonButton
                expand="block"
                fill="solid"
                onClick={() => setShowDetailModal(false)}
                className="ion-margin-top"
              >
                Close
              </IonButton>
            </div>
          </div>
        );
      })()
    )}
  </IonContent>
</IonModal>
      </IonContent>
    </IonPage>
  );
};

export default MovieList;


/* Jonathan Claro a045207 */