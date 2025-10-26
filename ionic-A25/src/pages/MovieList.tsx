import { IonModal, IonInput, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonItem, IonLabel, IonButton, IonButtons, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonImg, IonBadge } from '@ionic/react';
import { useState } from 'react';
import './MovieList.css';

const MovieList: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<any>(null);

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
    },
    {
      id: 5,
      title: 'Old Movie 2',
      description: 'Another classic from the past.',
      img: '/movies/bruce.jpg',
      genre: 'X',
    },
    {
      id: 6,
      title: 'Old Movie 3',
      description: 'Another classic from the past.',
      img: '/movies/bruce.jpg',
      genre: 'X',
    },
    {
      id: 7,
      title: 'Old Movie 4',
      description: 'Another classic from the past.',
      img: '/movies/bruce.jpg',
      genre: 'X',
    },
    {
      id: 8,
      title: 'Old Movie 5',
      description: 'Another classic from the past.',
      img: '/movies/bruce.jpg',
      genre: 'X',
    },
    {
      id: 9,
      title: 'Old Movie 6',
      description: 'Another classic from the past.',
      img: '/movies/bruce.jpg',
      genre: 'X',
    },
    {
      id: 10,
      title: 'Old Movie 7',
      description: 'Another classic from the past.',
      img: '/movies/bruce.jpg',
      genre: 'X',
    },
    {
      id: 11,
      title: 'Old Movie 8',
      description: 'Another classic from the past.',
      img: '/movies/bruce.jpg',
      genre: 'X',
    },
    {
      id: 12,
      title: 'Old Movie 9',
      description: 'Another classic from the past.',
      img: '/movies/bruce.jpg',
      genre: 'X',
    },
    {
      id: 13,
      title: 'Old Movie 10',
      description: 'Another classic from the past.',
      img: '/movies/bruce.jpg',
      genre: 'X',
    },
    {
      id: 14,
      title: 'Old Movie 11',
      description: 'Another classic from the past.',
      img: '/movies/bruce.jpg',
      genre: 'X',
    },
    {
      id: 15,
      title: 'Old Movie 12',
      description: 'Another classic from the past.',
      img: '/movies/bruce.jpg',
      genre: 'X',
    },
  ];

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

      </IonHeader>
      <IonContent fullscreen>
        <IonSearchbar
          value={searchText}
          onIonInput={(e) => setSearchText(e.detail.value!)}
          placeholder="Search movies..."
        />
        <IonGrid>
          <IonRow>
            {filteredMovies.map((movie) => (
              <IonCol size="3" size-md="2" key={movie.id}>
                <IonCard className='mv-card' onClick={() => {
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

export default MovieList;
