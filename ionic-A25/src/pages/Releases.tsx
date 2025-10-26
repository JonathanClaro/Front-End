import { IonItem, IonInput, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonImg, IonModal, IonTextarea, IonLabel, IonButton as IonBtn, IonButtons, IonBadge } from '@ionic/react';
import { useState } from 'react';
import './Releases.css';

const Releases: React.FC = () => {
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');

  const allMovies = [
        {
      id: 1,
      title: 'Springsteen: Deliver Me from Nowhere',
      description: 'Bruce Springsteens journey crafting his 1982 album Nebraska, which emerged as he recorded Born in the USA with the E Street Band. Based on Warren Zanes book.',
      img: '/movies/bruce.jpg',
      genre: 'X',
    },
    {
      id: 2,
      title: 'Good Boy',
      description: 'A loyal dog moves to a rural family home with his owner, only to discover supernatural forces lurking in the shadows. As dark entities threaten his human companion, the brave pup must fight to protect the one he loves most.',
      img: '/movies/good-boy.jpg',
      genre: 'X',
    },
    {
      id: 3,
      title: 'Eclipse',
      description: 'A sci-fi adventure exploring the mysteries of space.',
      img: '/movies/bruce.jpg',
      genre: 'X',
    },
    {
      id: 4,
      title: 'Old Movie 1',
      description: 'An old film from the archives.',
      img: '/movies/bruce.jpg',
      genre: 'X',
    }
  ];

  const movies = allMovies.filter(movie => movie.id);

  const openDetailModal = (movie: any) => {
    setSelectedMovie(movie);
    setShowDetailModal(true);
  };

  const openReviewModal = (movie: any) => {
    setSelectedMovie(movie);
  };

  return (

    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className="page-title" slot="start">Releases</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => window.location.href = '/home'}>Home</IonButton>
            <IonButton onClick={() => window.location.href = '/releases'}>Releases</IonButton>
            <IonButton onClick={() => window.location.href = '/movie-list'}>Movie List</IonButton>
            <IonButton onClick={() => setIsModalOpen(true)}>Subscribe</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

              {/* newsletter */}
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
                  <IonButton expand="block" onClick={() => {
                      setEmail('');
                      setIsModalOpen(false);
                    }} className="ion-margin-top">
                      Subscribe
                  </IonButton>
                </IonContent>
              </IonModal>

      { /* conteudo */ }
      <IonContent fullscreen>

        <IonGrid>
          <IonRow>
            {movies.map((movie) => (
              <IonCol size="6" size-md="4" size-lg="3" key={movie.id}>
                <IonCard className='movie-card' onClick={() => {
                  setSelectedMovie(movie);
                  setShowDetailModal(true);
                }}>
                  <IonImg className='movie-card-img' src={movie.img} alt={movie.title} />
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>

        <IonModal isOpen={showDetailModal} onDidDismiss={() => setShowDetailModal(false)} className="modal-details">
          <IonHeader>
            <IonToolbar>
              <IonTitle>{selectedMovie?.title}</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonCard>
              <IonCardContent>
                <IonRow>
                  <IonCol size='12' sizeMd='4'>
                    <IonImg className='movie-modal-img' src={selectedMovie?.img} alt={selectedMovie?.title} />
                  </IonCol>
                  <IonCol>
                <p>{selectedMovie?.description}</p>
                <p><strong>Director:</strong> John Doe</p>
                <p><strong>Cast:</strong> Actor 1, Actor 2, Actor 3</p>
                <IonBadge color="primary">{selectedMovie?.genre}</IonBadge>
                <p><strong>Release Year:</strong> 2023</p>
                </IonCol>
                </IonRow>
              </IonCardContent>
            </IonCard>
            <IonButton expand="full" fill="solid" onClick={() => setShowDetailModal(false)}>
              Close
            </IonButton>
          </IonContent>
        </IonModal>

      </IonContent>
    </IonPage>
  );
};

export default Releases;
