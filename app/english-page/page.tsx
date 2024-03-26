import InfoPage from "@/components/infoPage";

export default function Page() {
  return (
    <>
      <InfoPage
        title="Machine Learning, deep learning and neural networks"
        description="Machine Learning, deep learning, and neural networks are integral components of modern artificial intelligence, each playing a crucial role in understanding and processing complex data patterns."
        indexes={["Machine and deep", "Neural Networks"]}
        text={[
          {
            title: "Differences between machine learning and deep learning",
            content: [
              "Machine Learning and Deep Learning are two different approaches to machine learning. They both have the goal of enabling computers to learn from data and make predictions or decisions.",
              "However, they differ significantly in their structure. Machine learning includes a broad range of algorithms and techniques designed to learn from data.",
              "These algorithms include supervised learning, unsupervised learing and reinforced learning.",
              "Supervised learning involves training a model on labeled data, where the algorithm learns to map input data to corresponding output labels.",
              "Unsupervised learning, on the other hand, deals with unlabeled data, aiming to uncover hidden patterns or structures within the data. Reinforcement learning focuses on training agents to make sequential decisions through trial and error, with the goal of maximizing cumulative rewards.",
              "Deep learning, on the other hand, is a subset of machine learning that uses artificial neural networks inspired by the structure and function of the human brain.",
              "Deep learning models, known as artificial neural networks, consist of multiple layers of interconnected nodes, or neurons, which allow them to automatically learn hierarchical representations of data. Unlike traditional machine learning algorithms, deep learning models can learn complex patterns and features directly from raw data, eliminating the need for manual feature engineering.",
              "Deep learning has achieved remarkable success in various tasks, including image and speech recognition, natural language processing, and autonomous driving. However, deep learning typically requires large amounts of labeled data and computational resources to train complex models effectively.",
              "In summary, while both machine learning and deep learning are essential components of AI, they differ in their approaches, architectures, and applications, with deep learning offering unprecedented capabilities in learning complex patterns and representations directly from data.",
            ],
          },
          {
            title: "Neural Networks",
            content: [
              "Neural networks, inspired by the structure and functioning of the human brain, represent a powerful paradigm in artificial intelligence.",
              "Neural networks excel at learning complex patterns from data. Through a process called training, these networks adjust their parameters iteratively, optimizing their ability to map inputs to outputs. This capability enables them to tackle a wide array of tasks, from image and speech recognition to natural language processing and autonomous driving.",
              "The versatility of neural networks lies in their ability to generalize from examples, making them adept at handling diverse and dynamic datasets. As they continue to advance, neural networks hold immense promise for revolutionizing fields such as healthcare, finance, and transportation, driving innovations that shape the future of technology and society.",
            ],
          },
        ]}
      />
    </>
  );
}
