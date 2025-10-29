import React, { useState } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonContent, IonModal, IonItem, IonLabel, IonInput } from '@ionic/react';
import './Home.css';

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');

  
  const getRatingColor = (rating: number) => {
    if (rating >= 8) return 'rating-green';
    if (rating >= 7) return 'rating-yellow';
    return 'rating-red';
  };

 
  const trendingMovies = [
    { title: 'Dune: Part Two', img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/8LJJjLjAzAwXS40S5mx79PJ2jSs.jpg', rating: 8.6 },
    { title: 'Oppenheimer', img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/1OsQJEoSXBjduuCvDOlRhoEUaHu.jpg', rating: 8.4 },
    { title: 'Top Gun: Maverick', img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/qZUmMxJbGmkIYwnS7qRfSOREmvC.jpg', rating: 8.3 },
    { title: 'Babylon', img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/49pANIZXRAdHUiWjjBv4vxPeqRC.jpg', rating: 7.2 },
  ];

 
  const weeklyMovies = [
    { title: 'Interstellar', img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg', rating: 8.7 },
    { title: 'Inception', img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg', rating: 8.8 },
    { title: 'Parasite', img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg', rating: 8.5 },
    { title: 'The Dark Knight', img: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/qJ2tW6WMUDux911r6m7haRef0WH.jpg', rating: 9.0 },
  ];

  return (
    <IonPage>
      
      <IonHeader>
        <IonToolbar>
          <IonTitle>A25 Films</IonTitle>
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

      <IonContent fullscreen className="home">
        
        <section className="hero-fullscreen">
          <div
            className="hero-bg"
            style={{
              backgroundImage: `url('https://stillslab.com/uploads/dune-part-two_frames/dune_part_two_frames_frame_351.webp')`,
            }}
          ></div>

          <div className="hero-inner">
            <h1 className="brand">a25</h1>
            <p className="tagline">Films</p>
          </div>
        </section>

        
        <section className="trending-section">
          <h2 className="section-title tooltip">
            TRENDING
            <span className="tooltip-text">A curated selection of the four most talked about films right now.</span>
          </h2>
          <div className="poster-row">
            {trendingMovies.map((movie) => (
              <div className="poster" key={movie.title}>
                <div className={`rating-badge ${getRatingColor(movie.rating)}`}>
                  {movie.rating.toFixed(1)}
                </div>
                <img src={movie.img} alt={movie.title} />
              </div>
            ))}
          </div>
        </section>

        
        <section className="weekly-section">
          <h2 className="section-title tooltip">
            WEEKLY SUGGESTIONS
            <span className="tooltip-text">Handpicked highlights four films we recommend this week.</span>
          </h2>
          <div className="poster-row">
            {weeklyMovies.map((movie) => (
              <div className="poster" key={movie.title}>
                <div className={`rating-badge ${getRatingColor(movie.rating)}`}>
                  {movie.rating.toFixed(1)}
                </div>
                <img src={movie.img} alt={movie.title} />
              </div>
            ))}
          </div>
        </section>

       
        <section className="about-section">
          <h2 className="about-title">About Us</h2>
          <p className="about-text">
            a25 is a minimal editorial movie showcase. Our goal is to highlight visual storytelling,
            curating film selections and weekly highlights with a focus on design, cinematography,
            and narrative depth.
          </p>

          <div className="social-icons">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
        </section>

        
        <footer className="footer">
          <p>© 2025 a25 — All rights reserved.</p>
        </footer>
      </IonContent>
    </IonPage>
  );
};

export default Home;


/* Jonathan Claro a045207 */