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
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonAccordionGroup,
  IonAccordion,
} from "@ionic/react";
import "./Releases.css";

const Releases: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="custom-toolbar">
          <IonTitle className="headerTitle">A25 FILMS</IonTitle>
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

      <IonContent fullscreen className="releases-page">
        <h1 className="page-subtitle">NOW IN THEATERS</h1>

        <IonGrid className="release-grid">
          <IonRow className="release-row">
            <IonCol size="6" className="release-col">
              <IonCard className="release-card">
                <div className="poster">
                  <IonImg src="https://www.themoviedb.org/t/p/w1280/chpWmskl3aKm1aTZqUHRCtviwPy.jpg" />
                </div>

                <IonCardHeader>
                  <IonCardTitle>TRON: Ares</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                  <p className="genre">Sci-Fi / Ação</p>

                  <p className="synopsis">
                    A nova geração de TRON explora as consequências do avanço da
                    inteligência artificial dentro do mundo digital.
                  </p>

                  <IonAccordionGroup className="tech-accordion" expand="inset">
                    <IonAccordion value="tron-tech">
                      <IonItem
                        slot="header"
                        lines="none"
                        className="accordion-trigger"
                      >
                        <IonLabel className="accordion-label">
                          Ficha Técnica
                        </IonLabel>
                        <span className="accordion-icon"></span>
                      </IonItem>

                      <div slot="content" className="accordion-content">
                        <p>
                          <strong>Direção:</strong> Joachim Rønning
                        </p>
                        <p>
                          <strong>Elenco:</strong> Jared Leto, Evan Peters,
                          Gillian Anderson
                        </p>
                        <p>
                          <strong>Duração:</strong> 2h 20m
                        </p>
                        <p>
                          <strong>Ano:</strong> 2025
                        </p>
                        <p>
                          <strong>Estúdio:</strong> Walt Disney Pictures
                        </p>
                      </div>
                    </IonAccordion>
                  </IonAccordionGroup>
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol size="6" className="release-col">
              <IonCard className="release-card">
                <div className="poster">
                  <IonImg src="https://www.themoviedb.org/t/p/w1280/m1jFoahEbeQXtx4zArT2FKdbNIj.jpg" />
                </div>

                <IonCardHeader>
                  <IonCardTitle>One Battle After Another</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                  <p className="genre">Drama / Guerra</p>

                  <p className="synopsis">
                    Um épico de guerra que acompanha um grupo de soldados na
                    sua luta incessante por liberdade e sobrevivência num mundo
                    à beira do colapso.
                  </p>

                  <IonAccordionGroup className="tech-accordion" expand="inset">
                    <IonAccordion value="battle-tech">
                      <IonItem
                        slot="header"
                        lines="none"
                        className="accordion-trigger"
                      >
                        <IonLabel className="accordion-label">
                          Ficha Técnica
                        </IonLabel>
                        <span className="accordion-icon"></span>
                      </IonItem>

                      <div slot="content" className="accordion-content">
                        <p>
                          <strong>Direção:</strong> David Mackenzie
                        </p>
                        <p>
                          <strong>Elenco:</strong> George MacKay, Florence Pugh,
                          Barry Keoghan
                        </p>
                        <p>
                          <strong>Duração:</strong> 2h 8m
                        </p>
                        <p>
                          <strong>Ano:</strong> 2025
                        </p>
                          <strong>Estúdio:</strong> Warner Bros.
                        <p></p>
                      </div>
                    </IonAccordion>
                  </IonAccordionGroup>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Releases;