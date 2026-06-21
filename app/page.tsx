import PageShell from "@/components/PageShell";
import Hero from "@/components/Hero";
import Card from "@/components/Card";

const features = [
  {
    title: "Upload Study Materials",
    description:
      "Add your PDFs, notes, and textbooks. StudyCompass organizes everything in one place.",
  },
  {
    title: "AI Q&A Chatbot",
    description:
      "Ask questions in natural language and get accurate answers grounded in your own content.",
  },
  {
    title: "Automatic Summaries",
    description:
      "Generate concise summaries of chapters and documents so you can revise faster.",
  },
  {
    title: "Quiz Generation",
    description:
      "Create practice questions and quizzes from your materials to prepare for exams.",
  },
  {
    title: "Smart Search",
    description:
      "Semantic search with references back to the exact spot in your original material.",
  },
  {
    title: "Retrieval-Augmented",
    description:
      "Powered by RAG so answers stay relevant, personalized, and easy to understand.",
  },
];

export default function Home() {
  return (
    <PageShell>
      <Hero
        title="Study smarter with StudyCompass"
        subtitle="Upload your notes and textbooks, then ask questions in plain English. Get accurate, easy-to-understand answers drawn straight from your own material."
      />

      <section className="mx-auto max-w-6xl px-4 pb-20">
        <h2 className="mb-8 text-center text-2xl font-bold sm:text-3xl">
          Everything you need to learn
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Card key={f.title} title={f.title} description={f.description} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
