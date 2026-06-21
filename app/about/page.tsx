import PageShell from "@/components/PageShell";

export default function AboutPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="text-3xl font-bold sm:text-4xl">About StudyCompass</h1>
        <p className="mt-4 text-foreground/70 leading-relaxed">
          StudyCompass is an AI-powered learning assistant that helps students
          study more effectively. Upload your notes, textbooks, and PDFs, then
          ask questions in natural language. The platform uses
          Retrieval-Augmented Generation (RAG) to find relevant information from
          your uploaded content and provide accurate, easy-to-understand
          answers — making learning more interactive and personalized.
        </p>
      </div>
    </PageShell>
  );
}
