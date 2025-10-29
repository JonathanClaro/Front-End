import React, { useState } from 'react';
import {IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonModal, IonItem, IonLabel, IonInput} from '@ionic/react';
import './Releases.css';

const Releases: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');

  const getRatingColor = (rating: number) => {
    if (rating >= 8) return 'rating-green';
    if (rating >= 7) return 'rating-yellow';
    return 'rating-red';
  };

  const releases = [
    {
      title: 'TRON: Ares',
      img: 'https://www.themoviedb.org/t/p/w1280/chpWmskl3aKm1aTZqUHRCtviwPy.jpg',
      synopsis:
        'A nova geração de TRON explora as consequências do avanço da inteligência artificial dentro do mundo digital e a relação entre o criador e a criação.',
      critic:
        '"Visualmente deslumbrante, TRON: Ares redefine o conceito de ciber-realidade." — The Verge',
      rating: 8.1,
      genre: 'Sci-Fi/Ação',
      year: 2025,
      director: 'Joachim Rønning',
      cast: 'Jared Leto, Evan Peters, Gillian Anderson',
      runtime: '2h 20m',
      studio: 'Walt Disney Pictures'
    },
    {
      title: 'One Battle After Another',
      img: 'https://www.themoviedb.org/t/p/w1280/m1jFoahEbeQXtx4zArT2FKdbNIj.jpg',
      synopsis:
        'Um épico de guerra que acompanha um grupo de soldados na sua luta incessante por liberdade e sobrevivência num mundo à beira do colapso.',
      critic:
        '"Um drama poderoso sobre coragem e sacrifício." — Empire Magazine',
      rating: 7.6,
      genre: 'Drama/Guerra',
      year: 2025,
      director: 'David Mackenzie',
      cast: 'George MacKay, Florence Pugh, Barry Keoghan',
      runtime: '2h 8m',
      studio: 'Warner Bros.'
    },
    {
      title: 'Gabby’s Dollhouse: The Movie',
      img: 'https://www.themoviedb.org/t/p/w1280/t6LLguAmu6iZUN8pWhT7Q0IcaQ5.jpg',
      synopsis:
        'Gabby e os seus amigos embarcam numa nova aventura cheia de cor, música e magia para salvar a Casa de Bonecas da Rainha dos Gatos.',
      critic:
        '"Uma explosão de imaginação e ternura — diversão garantida para os mais pequenos!" — Variety',
      rating: 7.3,
      genre: 'Animação/Família',
      year: 2025,
      director: 'Bryan Fogel',
      cast: 'Laila Lockhart Kraner, Tucker Chandler, Juliet Donenfeld',
      runtime: '1h 35m',
      studio: 'DreamWorks Animation'
    },
    {
      title: 'The Conjuring: Last Rites',
      img: 'https://www.themoviedb.org/t/p/w1280/7JzOmJ1fIU43I3gLHYsY8UzNzjG.jpg',
      synopsis:
        'Os investigadores paranormais Ed e Lorraine Warren enfrentam o caso mais sombrio das suas carreiras, com uma ameaça que transcende a fé.',
      critic:
        '"Um fecho arrepiante e emocionalmente intenso da saga." — Bloody Disgusting',
      rating: 7.9,
      genre: 'Terror/Suspense',
      year: 2025,
      director: 'Michael Chaves',
      cast: 'Patrick Wilson, Vera Farmiga, Ruairi O’Connor',
      runtime: '2h 10m',
      studio: 'New Line Cinema'
    }
  ];

  return (
<IonPage>
  <IonHeader translucent={true}>
    <IonToolbar>
    <IonTitle className="page-title">Releases</IonTitle>
    <IonButtons slot="end">
      <IonButton routerLink="/home">Home</IonButton>
      <IonButton routerLink="/releases">Releases</IonButton>
      <IonButton routerLink="/movie-list">Movie List</IonButton>
      <IonButton onClick={() => setIsModalOpen(true)}>Subscribe</IonButton>
    </IonButtons>
  </IonToolbar>
</IonHeader>

      
      <IonModal
        className="news-modal"
        isOpen={isModalOpen}
        onDidDismiss={() => setIsModalOpen(false)}
      >
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
          <IonButton
            expand="block"
            className="ion-margin-top"
            onClick={() => {
              setEmail('');
              setIsModalOpen(false);
            }}
          >
            Subscribe
          </IonButton>
        </IonContent>
      </IonModal>

      <IonContent fullscreen className="releases-page">
       
        <h1 className="page-subtitle">Now in Theaters</h1>

        <div className="release-list">
          {releases.map((movie) => (
            <div className="release-card" key={movie.title}>
              <div className="poster">
                <img src={movie.img} alt={movie.title} />
                <div className={`rating-circle ${getRatingColor(movie.rating)}`}>
                  {movie.rating.toFixed(1)}
                </div>
              </div>

              <div className="release-info">
                <h2>{movie.title}</h2>
                <p className="genre">{movie.genre}</p>
                <p className="synopsis">{movie.synopsis}</p>
                <p className="critic">{movie.critic}</p>
                <div className="ficha-tecnica">
                  <p><strong>Direção:</strong> {movie.director}</p>
                  <p><strong>Elenco:</strong> {movie.cast}</p>
                  <p><strong>Duração:</strong> {movie.runtime}</p>
                  <p><strong>Ano:</strong> {movie.year}</p>
                  <p><strong>Estúdio:</strong> {movie.studio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Releases;


/* Jonathan Claro a045207 */