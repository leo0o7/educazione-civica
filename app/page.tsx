import Text from "@/components/typography/text";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export default function Home() {
  return (
    <>
      <div className="h-dvh flex justify-center flex-col text-center px-12 lg:px-20">
        <Text
          type="h1"
          className=" relative text-3xl md:text-5xl lg:text-8xl drop-shadow-md z-10"
        >
          Una breve introduzione, <br />
          <span className="inline text-transparent bg-gradient-to-r from-red-500 via-orange-400 to-primary bg-clip-text">
            Machine Learning
          </span>{" "}
          e il suo utilizzo nell'
          <span className="inline text-transparent bg-gradient-to-r from-red-500 via-orange-400 to-primary bg-clip-text">
            intelligenza artificaile
          </span>
        </Text>

        <BackgroundBeams />
      </div>
      <BentoGrid>
        {items.map((item, idx) => (
          <BentoGridItem
            key={idx}
            title={item.title}
            description={item.description}
            header={item.header}
            author={item.author}
            link={item.link}
            className={idx === 0 || idx === 3 ? "lg:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </>
  );
}

const items = [
  {
    title: "Introduzione al Machine Learning",
    author: "Federico Bianchi",
    description:
      "Il Machine Learning rappresenta una branca della ricerca sulle intelligenze artificiali (AI). L’obiettivo del machine learning è comprendere la struttura e far combaciare i dati in un modello che possa essere comprensibile e utilizzato dalle persone.",
    link: "/introduzione",
    header: (
      <img
        src="https://humanativaspa.it/wp-content/uploads/2021/05/HN_machine_learning_ist.jpg"
        className="h-[225px] object-cover w-full rounded-lg rounded-b-none"
      />
    ),
  },
  {
    title: "Metodi di Machine Learning",
    author: "Gabriele Petrella",
    description:
      "L'apprendimento supervisionato, noto anche come machine learning supervisionato, è una sottocategoria di machine learning e AI.",
    link: "/metodi",
    header: (
      <img
        src="https://www.lum.it/wp-content/uploads/2023/10/machine.jpg"
        className="h-[225px] object-cover w-full rounded-lg rounded-b-none"
      />
    ),
  },
  {
    title: "Applicazioni ed esempi del Machine Learning",
    author: "Daniele Toppi",
    description:
      "L'intelligenza artificiale (IA) ha rivoluzionato settori come ricerca online, assistenti virtuali e medicina, ma il futuro del machine learning dipende da progressi scientifici, tecnologici ed etici.",
    link: "/applicazioni",
    header: (
      <img
        src="https://www.ibm.com/content/dam/connectedassets-adobe-cms/worldwide-content/stock-assets/getty/image/photography/b5/37/126_data_brain.component.xl.ts=1703181487291.jpg/content/adobe-cms/it/it/topics/machine-learning-algorithms/_jcr_content/root/leadspace"
        className="h-[225px] object-cover w-full rounded-lg rounded-b-none"
      />
    ),
  },
  {
    title: "Machine Learning, deep learning and neural networks",
    author: "Leonardo Giardino",
    description:
      "Machine Learning, deep learning, and neural networks are integral components of modern artificial intelligence, each playing a crucial role in understanding and processing complex data patterns.",
    link: "/english-page",
    header: (
      <img
        src="https://miro.medium.com/v2/resize:fit:1400/1*c_fiB-YgbnMl6nntYGBMHQ.jpeg"
        className="h-[225px] object-cover w-full rounded-lg rounded-b-none"
      />
    ),
  },
];
