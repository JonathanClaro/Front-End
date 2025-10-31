import React, { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonContent,
  IonModal,
  IonItem,
  IonLabel,
  IonInput,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonImg,
  IonText,
  IonFooter,
} from "@ionic/react";
import "./Home.css";

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="custom-toolbar">
          <IonTitle className="headerTitle">A25 Films</IonTitle>
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
              setEmail("");
              setIsModalOpen(false);
            }}
          >
            Subscribe
          </IonButton>
        </IonContent>
      </IonModal>

      <IonContent className="home">
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
          <h2 className="section-title">TRENDING</h2>
          <IonGrid>
            <IonRow className="poster-row">
              <IonCol>
                <IonCard className="posterCard">
                  <IonImg src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/8LJJjLjAzAwXS40S5mx79PJ2jSs.jpg" alt="Dune Part Two" />
                </IonCard>
              </IonCol>
              <IonCol>
                <IonCard className="posterCard">
                  <IonImg src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/1OsQJEoSXBjduuCvDOlRhoEUaHu.jpg" alt="Oppenheimer" />
                </IonCard>
              </IonCol>
              <IonCol>
                <IonCard className="posterCard">
                  <IonImg src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/qZUmMxJbGmkIYwnS7qRfSOREmvC.jpg" alt="Top Gun Maverick" />
                </IonCard>
              </IonCol>
              <IonCol>
                <IonCard className="posterCard">
                  <IonImg src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/49pANIZXRAdHUiWjjBv4vxPeqRC.jpg" alt="Babylon" />
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </section>

        <section className="weekly-section">
          <h2 className="section-title">WEEKLY SUGGESTIONS</h2>
          <IonGrid>
            <IonRow className="poster-row">
              <IonCol>
                <IonCard className="posterCard">
                  <IonImg src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" alt="Interstellar" />
                </IonCard>
              </IonCol>
              <IonCol>
                <IonCard className="posterCard">
                  <IonImg src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg" alt="Inception" />
                </IonCard>
              </IonCol>
              <IonCol>
                <IonCard className="posterCard">
                  <IonImg src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg" alt="Parasite" />
                </IonCard>
              </IonCol>
              <IonCol>
                <IonCard className="posterCard">
                  <IonImg src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/qJ2tW6WMUDux911r6m7haRef0WH.jpg" alt="The Dark Knight" />
                </IonCard>
              </IonCol>
            </IonRow>
          </IonGrid>
        </section>

        <IonCard className="aboutCard">
          <IonCardHeader>
            <IonCardTitle className="aboutTitle">About Us</IonCardTitle>
          </IonCardHeader>

          <IonCardContent className="aboutContent">
            <IonText className="aboutText">
              a25 is a minimal editorial movie showcase. Our goal is to highlight visual storytelling,
              curating film selections and weekly highlights with a focus on design, cinematography,
              and narrative depth.
            </IonText>

            <IonGrid className="socialIcons">
              <IonRow className="ion-justify-content-center ion-align-items-center">
                <IonCol size="auto">
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                </IonCol>
                <IonCol size="auto">
                  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <i className="fab fa-facebook"></i>
                  </a>
                </IonCol>
                <IonCol size="auto">
                  <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                    <i className="fab fa-tiktok"></i>
                  </a>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
      </IonContent>

      <IonFooter>
        <IonToolbar className="footerToolbar">
          <IonTitle size="small">© 2025 a25 — All rights reserved.</IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default Home;

/* Jonathan Claro a045207 */