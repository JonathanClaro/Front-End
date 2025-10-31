import {
  IonModal,
  IonInput,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonItem,
  IonLabel,
  IonButton,
  IonButtons,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonImg,
  IonList,
  IonChip
} from '@ionic/react';
import { useState } from 'react';
import './MovieList.css';

const MovieList: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [isSubscribeOpen, setIsSubscribeOpen] = useState(false);
  const [email, setEmail] = useState('');

  const [openDune2, setOpenDune2] = useState(false);
  const [openOppenheimer, setOpenOppenheimer] = useState(false);
  const [openTopGun, setOpenTopGun] = useState(false);
  const [openBabylon, setOpenBabylon] = useState(false);
  const [openInterstellar, setOpenInterstellar] = useState(false);
  const [openInception, setOpenInception] = useState(false);
  const [openDarkKnight, setOpenDarkKnight] = useState(false);
  const [openParasite, setOpenParasite] = useState(false);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="custom-toolbar">
          <IonTitle className="headerTitle">A25 FILMS</IonTitle>
          <IonButtons slot="end">
            <IonButton routerLink="/home">Home</IonButton>
            <IonButton routerLink="/releases">Releases</IonButton>
            <IonButton routerLink="/movie-list">Movie List</IonButton>
            <IonButton onClick={() => setIsSubscribeOpen(true)}>Subscribe</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonModal
        className="news-modal"
        isOpen={isSubscribeOpen}
        onDidDismiss={() => setIsSubscribeOpen(false)}
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
            onClick={() => {
              setEmail('');
              setIsSubscribeOpen(false);
            }}
            className="ion-margin-top"
          >
            Subscribe
          </IonButton>
        </IonContent>
      </IonModal>

      <IonContent fullscreen className="movie-list-page">
        <h1 className="movie-list-title">MOVIE LIST</h1>

        <div className="search-wrapper">
          <IonSearchbar
            value={searchText}
            onIonInput={(e) => setSearchText(e.detail.value!)}
            placeholder="Search movies..."
            className="searchbar-themed"
          />
        </div>

        <IonGrid className="poster-grid">
          <IonRow className="poster-row">
            <IonCol size="3" className="poster-col">
              <IonCard className="mv-card" onClick={() => setOpenDune2(true)}>
                <IonImg
                  className="movie-card-img"
                  src="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/8LJJjLjAzAwXS40S5mx79PJ2jSs.jpg"
                  alt="Dune: Part Two"
                />
                <IonCardHeader>
                  <IonCardTitle className="movie-card-title">Dune: Part Two</IonCardTitle>
                </IonCardHeader>
                <IonCardContent className="movie-card-meta">
                  <div className="movie-card-genre">Ficção Científica</div>
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol size="3" className="poster-col">
              <IonCard className="mv-card" onClick={() => setOpenOppenheimer(true)}>
                <IonImg
                  className="movie-card-img"
                  src="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/1OsQJEoSXBjduuCvDOlRhoEUaHu.jpg"
                  alt="Oppenheimer"
                />
                <IonCardHeader>
                  <IonCardTitle className="movie-card-title">Oppenheimer</IonCardTitle>
                </IonCardHeader>
                <IonCardContent className="movie-card-meta">
                  <div className="movie-card-genre">Biografia / Drama</div>
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol size="3" className="poster-col">
              <IonCard className="mv-card" onClick={() => setOpenTopGun(true)}>
                <IonImg
                  className="movie-card-img"
                  src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8v3lrllHYRrqEdYWLyscH4RGFDO.jpg"
                  alt="Top Gun: Maverick"
                />
                <IonCardHeader>
                  <IonCardTitle className="movie-card-title">Top Gun: Maverick</IonCardTitle>
                </IonCardHeader>
                <IonCardContent className="movie-card-meta">
                  <div className="movie-card-genre">Ação</div>
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol size="3" className="poster-col">
              <IonCard className="mv-card" onClick={() => setOpenBabylon(true)}>
                <IonImg
                  className="movie-card-img"
                  src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qZUmMxJbGmkIYwnS7qRfSOREmvC.jpg"
                  alt="Babylon"
                />
                <IonCardHeader>
                  <IonCardTitle className="movie-card-title">Babylon</IonCardTitle>
                </IonCardHeader>
                <IonCardContent className="movie-card-meta">
                  <div className="movie-card-genre">Drama</div>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>

          <IonRow className="poster-row">
            <IonCol size="3" className="poster-col">
              <IonCard className="mv-card" onClick={() => setOpenInterstellar(true)}>
                <IonImg
                  className="movie-card-img"
                  src="https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
                  alt="Interstellar"
                />
                <IonCardHeader>
                  <IonCardTitle className="movie-card-title">Interstellar</IonCardTitle>
                </IonCardHeader>
                <IonCardContent className="movie-card-meta">
                  <div className="movie-card-genre">Sci-Fi / Aventura</div>
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol size="3" className="poster-col">
              <IonCard className="mv-card" onClick={() => setOpenInception(true)}>
                <IonImg
                  className="movie-card-img"
                  src="https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg"
                  alt="Inception"
                />
                <IonCardHeader>
                  <IonCardTitle className="movie-card-title">Inception</IonCardTitle>
                </IonCardHeader>
                <IonCardContent className="movie-card-meta">
                  <div className="movie-card-genre">Sci-Fi / Thriller</div>
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol size="3" className="poster-col">
              <IonCard className="mv-card" onClick={() => setOpenDarkKnight(true)}>
                <IonImg
                  className="movie-card-img"
                  src="https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
                  alt="The Dark Knight"
                />
                <IonCardHeader>
                  <IonCardTitle className="movie-card-title">The Dark Knight</IonCardTitle>
                </IonCardHeader>
                <IonCardContent className="movie-card-meta">
                  <div className="movie-card-genre">Ação / Crime</div>
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol size="3" className="poster-col">
              <IonCard className="mv-card" onClick={() => setOpenParasite(true)}>
                <IonImg
                  className="movie-card-img"
                  src="https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg"
                  alt="Parasite"
                />
                <IonCardHeader>
                  <IonCardTitle className="movie-card-title">Parasite</IonCardTitle>
                </IonCardHeader>
                <IonCardContent className="movie-card-meta">
                  <div className="movie-card-genre">Thriller / Drama</div>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonModal
          className="modal-details"
          isOpen={openDune2}
          onDidDismiss={() => setOpenDune2(false)}
        >
          <IonHeader>
            <IonToolbar className="detail-toolbar">
              <IonTitle className="detail-title">Dune: Part Two (2024)</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="detail-content ion-padding">
            <IonGrid className="modal-grid">
              <IonRow className="modal-row">
                <IonCol size="4" className="modal-col-left">
                  <IonImg
                    className="modal-poster-img"
                    src="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/8LJJjLjAzAwXS40S5mx79PJ2jSs.jpg"
                    alt="Dune: Part Two"
                  />
                </IonCol>
                <IonCol size="8" className="modal-col-right">
                  <IonCard className="info-card">
                    <IonCardHeader>
                      <IonCardTitle className="info-title">Dune: Part Two</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent className="info-body">
                      Paul Atreides une-se aos Fremen numa jornada de vingança e destino em Arrakis. A luta
                      pelo controlo do planeta torna-se também uma luta interior entre poder, fé e sacrifício.
                    </IonCardContent>
                  </IonCard>

                  <IonCard className="tech-card">
                    <IonCardHeader>
                      <IonCardTitle className="section-heading">Ficha Técnica</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      <IonList className="ficha-list-ionic">
                        <IonItem lines="none" className="ficha-line">
                          <IonLabel>
                            <strong>Realização:</strong> Denis Villeneuve
                          </IonLabel>
                        </IonItem>
                        <IonItem lines="none" className="ficha-line">
                          <IonLabel>
                            <strong>Género:</strong> Ficção Científica / Aventura
                          </IonLabel>
                        </IonItem>
                        <IonItem lines="none" className="ficha-line">
                          <IonLabel>
                            <strong>Duração:</strong> 2h 46min
                          </IonLabel>
                        </IonItem>
                        <IonItem lines="none" className="ficha-line">
                          <IonLabel>
                            <strong>Ano:</strong> 2024
                          </IonLabel>
                        </IonItem>
                      </IonList>
                    </IonCardContent>
                  </IonCard>

                  <IonCard className="watch-card">
                    <IonCardHeader>
                      <IonCardTitle className="section-heading">Onde Assistir</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      <div className="watch-row">
                        <IonChip className="watch-chip">HBO Max</IonChip>
                        <IonChip className="watch-chip">Apple TV+</IonChip>
                        <IonChip className="watch-chip">Amazon Prime</IonChip>
                      </div>
                    </IonCardContent>
                  </IonCard>

                  <IonButton
                    className="close-btn"
                    onClick={() => setOpenDune2(false)}
                  >
                    CLOSE
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonContent>
        </IonModal>

        <IonModal
          className="modal-details"
          isOpen={openOppenheimer}
          onDidDismiss={() => setOpenOppenheimer(false)}
        >
          <IonHeader>
            <IonToolbar className="detail-toolbar">
              <IonTitle className="detail-title">Oppenheimer (2023)</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="detail-content ion-padding">
            <IonGrid className="modal-grid">
              <IonRow className="modal-row">
                <IonCol size="4" className="modal-col-left">
                  <IonImg
                    className="modal-poster-img"
                    src="https://media.themoviedb.org/t/p/w300_and_h450_bestv2/1OsQJEoSXBjduuCvDOlRhoEUaHu.jpg"
                    alt="Oppenheimer"
                  />
                </IonCol>
                <IonCol size="8" className="modal-col-right">
                  <IonCard className="info-card">
                    <IonCardHeader>
                      <IonCardTitle className="info-title">Oppenheimer</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent className="info-body">
                      A história de J. Robert Oppenheimer e o Projeto Manhattan, focando o peso moral da criação
                      da primeira arma nuclear e o impacto humano da própria ciência.
                    </IonCardContent>
                  </IonCard>

                  <IonCard className="tech-card">
                    <IonCardHeader>
                      <IonCardTitle className="section-heading">Ficha Técnica</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      <IonList className="ficha-list-ionic">
                        <IonItem lines="none" className="ficha-line">
                          <IonLabel>
                            <strong>Realização:</strong> Christopher Nolan
                          </IonLabel>
                        </IonItem>
                        <IonItem lines="none" className="ficha-line">
                          <IonLabel>
                            <strong>Género:</strong> Biografia / Drama
                          </IonLabel>
                        </IonItem>
                        <IonItem lines="none" className="ficha-line">
                          <IonLabel>
                            <strong>Duração:</strong> 3h 00min
                          </IonLabel>
                        </IonItem>
                        <IonItem lines="none" className="ficha-line">
                          <IonLabel>
                            <strong>Ano:</strong> 2023
                          </IonLabel>
                        </IonItem>
                      </IonList>
                    </IonCardContent>
                  </IonCard>

                  <IonCard className="watch-card">
                    <IonCardHeader>
                      <IonCardTitle className="section-heading">Onde Assistir</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      <div className="watch-row">
                        <IonChip className="watch-chip">Apple TV+</IonChip>
                        <IonChip className="watch-chip">Prime Video</IonChip>
                        <IonChip className="watch-chip">Cinemas</IonChip>
                      </div>
                    </IonCardContent>
                  </IonCard>

                  <IonButton
                    className="close-btn"
                    onClick={() => setOpenOppenheimer(false)}
                  >
                    CLOSE
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonContent>
        </IonModal>

        <IonModal
          className="modal-details"
          isOpen={openTopGun}
          onDidDismiss={() => setOpenTopGun(false)}
        >
          <IonHeader>
            <IonToolbar className="detail-toolbar">
              <IonTitle className="detail-title">Top Gun: Maverick (2022)</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="detail-content ion-padding">
            <IonGrid className="modal-grid">
              <IonRow className="modal-row">
                <IonCol size="4" className="modal-col-left">
                  <IonImg
                    className="modal-poster-img"
                    src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8v3lrllHYRrqEdYWLyscH4RGFDO.jpg"
                    alt="Top Gun: Maverick"
                  />
                </IonCol>
                <IonCol size="8" className="modal-col-right">
                  <IonCard className="info-card">
                    <IonCardHeader>
                      <IonCardTitle className="info-title">Top Gun: Maverick</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent className="info-body">
                      Maverick regressa anos depois, agora responsável por treinar uma nova geração de pilotos
                      numa missão quase impossível. Entre ego, risco e memória, é sobre legado.
                    </IonCardContent>
                  </IonCard>

                  <IonCard className="tech-card">
                    <IonCardHeader>
                      <IonCardTitle className="section-heading">Ficha Técnica</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      <IonList className="ficha-list-ionic">
                        <IonItem lines="none" className="ficha-line">
                          <IonLabel>
                            <strong>Realização:</strong> Joseph Kosinski
                          </IonLabel>
                        </IonItem>
                        <IonItem lines="none" className="ficha-line">
                          <IonLabel>
                            <strong>Género:</strong> Ação / Drama
                          </IonLabel>
                        </IonItem>
                        <IonItem lines="none" className="ficha-line">
                          <IonLabel>
                            <strong>Duração:</strong> 2h 10min
                          </IonLabel>
                        </IonItem>
                        <IonItem lines="none" className="ficha-line">
                          <IonLabel>
                            <strong>Ano:</strong> 2022
                          </IonLabel>
                        </IonItem>
                      </IonList>
                    </IonCardContent>
                  </IonCard>

                  <IonCard className="watch-card">
                    <IonCardHeader>
                      <IonCardTitle className="section-heading">Onde Assistir</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      <div className="watch-row">
                        <IonChip className="watch-chip">Paramount+</IonChip>
                        <IonChip className="watch-chip">Apple TV+</IonChip>
                        <IonChip className="watch-chip">Prime Video</IonChip>
                      </div>
                    </IonCardContent>
                  </IonCard>

                  <IonButton
                    className="close-btn"
                    onClick={() => setOpenTopGun(false)}
                  >
                    CLOSE
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonContent>
        </IonModal>

        <IonModal
          className="modal-details"
          isOpen={openBabylon}
          onDidDismiss={() => setOpenBabylon(false)}
        >
          <IonHeader>
            <IonToolbar className="detail-toolbar">
              <IonTitle className="detail-title">Babylon (2022)</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="detail-content ion-padding">
            <IonGrid className="modal-grid">
              <IonRow className="modal-row">
                <IonCol size="4" className="modal-col-left">
                  <IonImg
                    className="modal-poster-img"
                    src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qZUmMxJbGmkIYwnS7qRfSOREmvC.jpg"
                    alt="Babylon"
                  />
                </IonCol>
                <IonCol size="8" className="modal-col-right">
                  <IonCard className="info-card">
                    <IonCardHeader>
                      <IonCardTitle className="info-title">Babylon</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent className="info-body">
                      Hollywood em plena transição do cinema mudo para o sonoro: ambição, excesso e queda.
                      Uma carta de amor e veneno à própria indústria do espetáculo.
                    </IonCardContent>
                  </IonCard>

                  <IonCard className="tech-card">
                    <IonCardHeader>
                      <IonCardTitle className="section-heading">Ficha Técnica</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      <IonList className="ficha-list-ionic">
                        <IonItem lines="none" className="ficha-line">
                          <IonLabel>
                            <strong>Realização:</strong> Damien Chazelle
                          </IonLabel>
                        </IonItem>
                        <IonItem lines="none" className="ficha-line">
                          <IonLabel>
                            <strong>Género:</strong> Drama
                          </IonLabel>
                        </IonItem>
                        <IonItem lines="none" className="ficha-line">
                          <IonLabel>
                            <strong>Duração:</strong> 3h 09min
                          </IonLabel>
                        </IonItem>
                        <IonItem lines="none" className="ficha-line">
                          <IonLabel>
                            <strong>Ano:</strong> 2022
                          </IonLabel>
                        </IonItem>
                      </IonList>
                    </IonCardContent>
                  </IonCard>

                  <IonCard className="watch-card">
                    <IonCardHeader>
                      <IonCardTitle className="section-heading">Onde Assistir</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      <div className="watch-row">
                        <IonChip className="watch-chip">Paramount+</IonChip>
                        <IonChip className="watch-chip">Apple TV+</IonChip>
                      </div>
                    </IonCardContent>
                  </IonCard>

                  <IonButton
                    className="close-btn"
                    onClick={() => setOpenBabylon(false)}
                  >
                    CLOSE
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonContent>
        </IonModal>

        <IonModal
          className="modal-details"
          isOpen={openInterstellar}
          onDidDismiss={() => setOpenInterstellar(false)}
        >
          <IonHeader>
            <IonToolbar className="detail-toolbar">
              <IonTitle className="detail-title">Interstellar (2014)</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="detail-content ion-padding">
            <IonGrid className="modal-grid">
              <IonRow className="modal-row">
                <IonCol size="4" className="modal-col-left">
                  <IonImg
                    className="modal-poster-img"
                    src="https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
                    alt="Interstellar"
                  />
                </IonCol>
                <IonCol size="8" className="modal-col-right">
                  <IonCard className="info-card">
                    <IonCardHeader>
                      <IonCardTitle className="info-title">Interstellar</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent className="info-body">
                      Uma missão espacial em busca de um novo lar para a humanidade. Entre física teórica,
                      tempo e amor, a sobrevivência torna-se pessoal e cósmica ao mesmo tempo.
                    </IonCardContent>
                  </IonCard>

                  <IonCard className="tech-card">
                    <IonCardHeader>
                      <IonCardTitle className="section-heading">Ficha Técnica</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      <IonList className="ficha-list-ionic">
                        <IonItem lines="none" className="ficha-line">
                          <IonLabel>
                            <strong>Realização:</strong> Christopher Nolan
                          </IonLabel>
                        </IonItem>
                        <IonItem lines="none" className="ficha-line">
                          <IonLabel>
                            <strong>Género:</strong> Sci-Fi / Aventura
                          </IonLabel>
                        </IonItem>
                        <IonItem lines="none" className="ficha-line">
                          <IonLabel>
                            <strong>Duração:</strong> 2h 49min
                          </IonLabel>
                        </IonItem>
                        <IonItem lines="none" className="ficha-line">
                          <IonLabel>
                            <strong>Ano:</strong> 2014
                          </IonLabel>
                        </IonItem>
                      </IonList>
                    </IonCardContent>
                  </IonCard>

                  <IonCard className="watch-card">
                    <IonCardHeader>
                      <IonCardTitle className="section-heading">Onde Assistir</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      <div className="watch-row">
                        <IonChip className="watch-chip">HBO Max</IonChip>
                        <IonChip className="watch-chip">Apple TV+</IonChip>
                      </div>
                    </IonCardContent>
                  </IonCard>

                  <IonButton
                    className="close-btn"
                    onClick={() => setOpenInterstellar(false)}
                  >
                    CLOSE
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonContent>
        </IonModal>

        <IonModal
          className="modal-details"
          isOpen={openInception}
          onDidDismiss={() => setOpenInception(false)}
        >
          <IonHeader>
            <IonToolbar className="detail-toolbar">
              <IonTitle className="detail-title">Inception (2010)</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="detail-content ion-padding">
            <IonGrid className="modal-grid">
              <IonRow className="modal-row">
                <IonCol size="4" className="modal-col-left">
                  <IonImg
                    className="modal-poster-img"
                    src="https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg"
                    alt="Inception"
                  />
                </IonCol>
                <IonCol size="8" className="modal-col-right">
                  <IonCard className="info-card">
                    <IonCardHeader>
                      <IonCardTitle className="info-title">Inception</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent className="info-body">
                      Um ladrão especializado em invadir sonhos recebe uma proposta arriscada: plantar uma
                      ideia na mente de outra pessoa. Realidade, memória e culpa começam a misturar-se.
                    </IonCardContent>
                  </IonCard>

                  <IonCard className="tech-card">
                    <IonCardHeader>
                      <IonCardTitle className="section-heading">Ficha Técnica</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      <IonList className="ficha-list-ionic">
                        <IonItem lines="none" className="ficha-line">
                          <IonLabel>
                            <strong>Realização:</strong> Christopher Nolan
                          </IonLabel>
                        </IonItem>
                        <IonItem lines="none" className="ficha-line">
                          <IonLabel>
                            <strong>Género:</strong> Sci-Fi / Thriller
                          </IonLabel>
                        </IonItem>
                        <IonItem lines="none" className="ficha-line">
                          <IonLabel>
                            <strong>Duração:</strong> 2h 28min
                          </IonLabel>
                        </IonItem>
                        <IonItem lines="none" className="ficha-line">
                          <IonLabel>
                            <strong>Ano:</strong> 2010
                          </IonLabel>
                        </IonItem>
                      </IonList>
                    </IonCardContent>
                  </IonCard>

                  <IonCard className="watch-card">
                    <IonCardHeader>
                      <IonCardTitle className="section-heading">Onde Assistir</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent>
                      <div className="watch-row">
                        <IonChip className="watch-chip">HBO Max</IonChip>
                        <IonChip className="watch-chip">Apple TV+</IonChip>
                        <IonChip className="watch-chip">Prime Video</IonChip>
                      </div>
                    </IonCardContent>
                  </IonCard>

                  <IonButton
                    className="close-btn"
                    onClick={() => setOpenInception(false)}
                  >
                    CLOSE
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonContent>
        </IonModal>

        <IonModal
          className="modal-details"
          isOpen={openDarkKnight}
          onDidDismiss={() => setOpenDarkKnight(false)}
        >
          <IonHeader>
            <IonToolbar className="detail-toolbar">
              <IonTitle className="detail-title">The Dark Knight (2008)</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent className="detail-content ion-padding">
            <IonGrid className="modal-grid">
              <IonRow className="modal-row">
                <IonCol size="4" className="modal-col-left">
                  <IonImg
                    className="modal-poster-img"
                    src="https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
                    alt="The Dark Knight"
                  />
                </IonCol>
                <IonCol size="8" className="modal-col-right">
                  <IonCard className="info-card">
                    <IonCardHeader>
                      <IonCardTitle className="info-title">The Dark Knight</IonCardTitle>
                    </IonCardHeader>
                    <IonCardContent className="info-body">
                      Gotham entra em caos quando surge o Joker, forçando Batman a ir para além da linha entre
                      justiça e obsessão. Não é só crime: é guerra psicológica.
                    </IonCardContent>
                  </IonCard>

                    <IonCard className="tech-card">
                      <IonCardHeader>
                        <IonCardTitle className="section-heading">Ficha Técnica</IonCardTitle>
                      </IonCardHeader>
                      <IonCardContent>
                        <IonList className="ficha-list-ionic">
                          <IonItem lines="none" className="ficha-line">
                            <IonLabel>
                              <strong>Realização:</strong> Christopher Nolan
                            </IonLabel>
                          </IonItem>
                          <IonItem lines="none" className="ficha-line">
                            <IonLabel>
                              <strong>Género:</strong> Ação / Crime
                            </IonLabel>
                          </IonItem>
                          <IonItem lines="none" className="ficha-line">
                            <IonLabel>
                              <strong>Duração:</strong> 2h 32min
                            </IonLabel>
                          </IonItem>
                          <IonItem lines="none" className="ficha-line">
                            <IonLabel>
                              <strong>Ano:</strong> 2008
                            </IonLabel>
                          </IonItem>
                        </IonList>
                      </IonCardContent>
                    </IonCard>

                    <IonCard className="watch-card">
                      <IonCardHeader>
                        <IonCardTitle className="section-heading">Onde Assistir</IonCardTitle>
                      </IonCardHeader>
                      <IonCardContent>
                        <div className="watch-row">
                          <IonChip className="watch-chip">HBO Max</IonChip>
                          <IonChip className="watch-chip">Prime Video</IonChip>
                        </div>
                      </IonCardContent>
                    </IonCard>

                    <IonButton
                      className="close-btn"
                      onClick={() => setOpenDarkKnight(false)}
                    >
                      CLOSE
                    </IonButton>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonContent>
          </IonModal>

          <IonModal
            className="modal-details"
            isOpen={openParasite}
            onDidDismiss={() => setOpenParasite(false)}
          >
            <IonHeader>
              <IonToolbar className="detail-toolbar">
                <IonTitle className="detail-title">Parasite (2019)</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent className="detail-content ion-padding">
              <IonGrid className="modal-grid">
                <IonRow className="modal-row">
                  <IonCol size="4" className="modal-col-left">
                    <IonImg
                      className="modal-poster-img"
                      src="https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg"
                      alt="Parasite"
                    />
                  </IonCol>
                  <IonCol size="8" className="modal-col-right">
                    <IonCard className="info-card">
                      <IonCardHeader>
                        <IonCardTitle className="info-title">Parasite</IonCardTitle>
                      </IonCardHeader>
                      <IonCardContent className="info-body">
                        Duas famílias cruzam-se num jogo de dependência, fachada e sobrevivência. Segredo,
                        privilégio e desigualdade começam a fermentar até rebentar.
                      </IonCardContent>
                    </IonCard>

                    <IonCard className="tech-card">
                      <IonCardHeader>
                        <IonCardTitle className="section-heading">Ficha Técnica</IonCardTitle>
                      </IonCardHeader>
                      <IonCardContent>
                        <IonList className="ficha-list-ionic">
                          <IonItem lines="none" className="ficha-line">
                            <IonLabel>
                              <strong>Realização:</strong> Bong Joon-ho
                            </IonLabel>
                          </IonItem>
                          <IonItem lines="none" className="ficha-line">
                            <IonLabel>
                              <strong>Género:</strong> Thriller / Drama
                            </IonLabel>
                          </IonItem>
                          <IonItem lines="none" className="ficha-line">
                            <IonLabel>
                              <strong>Duração:</strong> 2h 12min
                            </IonLabel>
                          </IonItem>
                          <IonItem lines="none" className="ficha-line">
                            <IonLabel>
                              <strong>Ano:</strong> 2019
                            </IonLabel>
                          </IonItem>
                        </IonList>
                      </IonCardContent>
                    </IonCard>

                    <IonCard className="watch-card">
                      <IonCardHeader>
                        <IonCardTitle className="section-heading">Onde Assistir</IonCardTitle>
                      </IonCardHeader>
                      <IonCardContent>
                        <div className="watch-row">
                          <IonChip className="watch-chip">HBO Max</IonChip>
                          <IonChip className="watch-chip">Prime Video</IonChip>
                          <IonChip className="watch-chip">Apple TV+</IonChip>
                        </div>
                      </IonCardContent>
                    </IonCard>

                    <IonButton
                      className="close-btn"
                      onClick={() => setOpenParasite(false)}
                    >
                      CLOSE
                    </IonButton>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonContent>
          </IonModal>

      </IonContent>
    </IonPage>
  );
};

export default MovieList;