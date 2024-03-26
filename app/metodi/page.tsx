import InfoPage from "@/components/infoPage";

export default function page() {
  return (
    <>
      <InfoPage
        title="Metodi di Machine Learning"
        description="L'apprendimento supervisionato, noto anche come machine learning supervisionato, è una sottocategoria di machine learning e AI."
        indexes={["Introduzione", "Storia", "Privacy"]}
        text={[
          {
            title: "Apprendimento supervisionato",
            content: [
              "Il machine learning (ML) supervisionato e non supervisionato sono due categorie di algoritmi di ML. Gli algoritmi di ML elaborano grandi quantità di dati storici per identificare modelli di dati attraverso l'inferenza.",
              "Gli algoritmi di apprendimento supervisionato vengono addestrati su dati di esempio che specificano sia l'input sia l'output dell'algoritmo. Ad esempio, i dati potrebbero consistere in immagini di numeri scritti a mano che sono state annotate indicando quali numeri rappresentano.",
              "Con un numero sufficiente di dati etichettati, nel corso del tempo, il sistema di apprendimento supervisionato sarebbe in grado di riconoscere i cluster di pixel e le forme associate a ciascun numero scritto a mano. ",
              "Nell'apprendimento supervisionato, si addestra il modello con una serie di dati di input e un set corrispondente di dati di output etichettati abbinati. L'etichettatura viene in genere eseguita manualmente. Di seguito sono riportati alcuni tipi di tecniche di machine learning supervisionato.",
            ],
          },
          {
            title: "Apprendimento semi supervisionato",
            content: [
              "È possibile utilizzare insieme l'apprendimento supervisionato e quello non supervisionato. L'apprendimento semi-supervisionato si verifica quando si applicano tecniche di apprendimento supervisionato e non supervisionato a un problema comune. È una categoria di machine learning a sé stante.",
              "È possibile applicare l'apprendimento semi-supervisionato quando è difficile ottenere etichette per un set di dati. Potresti avere un volume ridotto di dati etichettati ma una quantità significativa di dati non etichettati.",
              " Se combini tecniche di apprendimento supervisionato e non supervisionato, avrai una maggiore precisione ed efficienza che non utilizzando soltanto il set di dati etichettato.",
            ],
          },
          {
            title: "Apprendimento non supervisionato",
            content: [
              "Di contro, gli algoritmi di apprendimento non supervisionato vengono addestrati sulla base di dati non etichettati. Possono esaminare nuovi dati e cercare di stabilire relazioni significative tra l'input sconosciuto e gli output predeterminati.",
              " Ad esempio, gli algoritmi di apprendimento non supervisionato possono raggruppare articoli da diversi siti di notizie in categorie comuni come sport, cronaca, ecc.",
              "È possibile utilizzare l'apprendimento non supervisionato per scenari in cui i dati non sono etichettati e l'obiettivo è scoprire modelli, raggruppare istanze simili o rilevare anomalie. È possibile utilizzarlo anche per attività esplorative in cui non sono presenti dati etichettati.",
              "Gli esempi includono l'organizzazione di archivi di dati di grandi dimensioni, la creazione di sistemi di raccomandazione e il raggruppamento dei clienti in base ai loro comportamenti di acquisto.",
              "All'interno di un ampio set di dati transazionali, esiste un sottoinsieme di dati etichettati in cui gli esperti hanno confermato transazioni fraudolente. Per un risultato più accurato, la soluzione di machine learning dovrebbe addestrarsi prima sui dati non etichettati e poi sui dati etichettati.",
            ],
          },
        ]}
      />
    </>
  );
}
