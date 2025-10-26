import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonImg, IonText, IonModal, IonInput, IonLabel, IonItem, IonFooter, IonButtons } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Home.css';

const Home: React.FC = () => {
  const history = useHistory();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (window.location.hash === '#subscribe') {
      setIsModalOpen(true);
      window.location.hash = '';
    }
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle slot="start" className="tollbar-title">A25 Films</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={() => history.push('/home')}>Home</IonButton>
            <IonButton onClick={() => history.push('/releases')}>Releases</IonButton>
            <IonButton onClick={() => history.push('/movie-list')}>Movie List</IonButton>
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

      {/* conteúdo */}
      <IonContent fullscreen className="home-content">
        <div className="h-section">
          <IonImg src="/logo.png" alt="img" className="logo" />
        </div>
        <IonCard className="description-card">
          <IonCardHeader>
            <IonCardTitle>About A25</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p>
              A25 is an independent film production company dedicated to creating bold, innovative, and thought-provoking cinema.
              Inspired by the spirit of A24, we focus on unique storytelling, diverse voices, and pushing the boundaries of filmmaking.
              Our films explore the depths of human experience, from horror to drama, always aiming to captivate and challenge audiences.
            </p>
            <p>
              Founded with a passion for cinema, A25 produces films that resonate with contemporary culture while maintaining artistic integrity.
              We believe in supporting emerging talent and delivering high-quality entertainment that sparks conversation.
            </p>
          </IonCardContent>
        </IonCard>
        <IonButton  onClick={() => history.push('/releases')} className="explore-button">
          Explore Our Releases
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
