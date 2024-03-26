import InfoPage from "@/components/infoPage";

export default function Page() {
  return (
    <>
      <InfoPage
        title="Introduzione al Machine Learning"
        description="Il Machine Learning rappresenta una branca della ricerca sulle intelligenze artificiali (AI). L’obiettivo del machine learning è comprendere la struttura e far combaciare i dati in un modello che possa essere comprensibile e utilizzato dalle persone."
        indexes={["Introduzione", "Storia", "Privacy"]}
        text={[
          {
            title: "Introduzione",
            content: [
              "Si occupa di creare sistemi che apprendono o migliorano le performance in base ai dati che utilizzano. L'intelligenza Artificiale è un termine generico e si riferisce a sistemi o macchine che imitano l'intelligenza umana.",
              "Il termine machine learning viene spesso utilizzato insieme e in modo intercambiabile , ma non hanno lo stesso significato. Un'importante distinzione è che sebbene tutto ciò che riguarda il machine learning rientra nell'intelligenza artificiale, l'intelligenza artificiale non include solo il machine learning.",
              "Attualmente, il machine learning è utilizzato ovunque. Quando interagiamo con le banche, acquistiamo online o utilizziamo i social media, vengono utilizzati gli algoritmi di machine learning per rendere la nostra esperienza efficiente, facile e sicura.",
              "Il Machine Learning e la tecnologia associata si stanno sviluppando rapidamente e noi abbiamo appena iniziato a scoprire le loro funzionalità.",
            ],
          },
          {
            title: "Storia",
            content: [
              "L'invenzione del machine learning risale al 1943, quando Warren McCullock e Walter Pitts si accorsero che il cervello “nonostante fosse una massa morbida, umida e gelatinosa, le segnalazioni in esso sono digitali e, per la precisione, binarie” (Kaplan, 2017).",
              "Poco dopo, nel 1959, fu coniato il termine Machine Learning dallo scienziato americano Arthur Lee Samuel. Ma è l'anno 1969 a segnare la svolta. Quando dal neurone artificiale si passa al percettrone (Papert e Minsky) e all'apprendimento dai dati.",
              "I primi studi relativi all’ambito dell’apprendimento automatizzato risalgono circa a metà del secolo scorso. In particolare tra i primi nomi noti a cui fare riferimento per questi studi c’è quello di Alan Turing che con la sua opera “On Computable Numbers” e la formulazione del suo famoso test pose le basi dell’intera riflessione sulle A.I. e sulla necessità di dare vita a macchine che fossero in grado di apprendere.",
              `L’origine dell’accezione moderna del termine machine learning è solitamente associata allo psicologo della Cornell University Frank Rosenblatt che nel 1958 inventò, insieme al suo gruppo di ricerca, una macchina chiamata "percettrone"`,
              "Questa macchina era in grado di riconoscere le lettere dell'alfabeto e per farlo era composta da tre elementi: un ingresso, un'uscita e un algoritmo che le permetteva di imparare minimizzando l'errore. L'idea è che alla macchina veniva fornita un'informazione sotto forma di input che poi veniva trasformato in un output tramite l'algoritmo.",
            ],
          },
          {
            title: "Privacy",
            content: [
              "Quando si affronta il tema delle relazioni tra Machine Learning e tutela dei dati personali occorre fare attenzione alle basi giuridiche e alle finalità, evitando che il trattamento dati si svolga fuori dal controllo dell’interessato.",

              "lo sviluppo delle funzioni di machine learning può confliggere, in   alcuni casi, principi generali di finalità del trattamento di dati personali.",
              `Un principio, quello secondo cui il trattamento di dati personali deve avvenire esclusivamente per il conseguimento di finalità precise e predeterminate, non certo secondario, anzi, che la disciplina cioè “privacy”.`,
              "Si pone, quindi, il problema di una programmazione di tali sistemi tale che la loro operatività non “sfugga” al controllo dei titolari.",
              "Il tema riguarda non solo il rispetto del principio di finalità a fini privacy, ma, in senso lato, il controllo del sistema AI da parte degli umani che interagiscono con esso.",
            ],
          },
        ]}
      />
    </>
  );
}
