import PageShell from "@/components/PageShell";
import Card from "@/components/Card";

export default function DashboardPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-3xl font-bold sm:text-4xl">Dashboard</h1>
        <p className="mt-4 max-w-2xl text-foreground/70 leading-relaxed">
          Welcome back! This is a placeholder dashboard. Once the backend is
          connected, your uploaded materials, recent chats, and generated
          quizzes will appear here.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card
            icon="📄"
            title="My Materials"
            description="0 documents uploaded. Upload notes and PDFs to get started."
          />
          <Card
            icon="💬"
            title="Recent Chats"
            description="No conversations yet. Ask your first question anytime."
          />
          <Card
            icon="🧠"
            title="Saved Quizzes"
            description="Generated practice quizzes will be saved here for revision."
          />
        </div>
      </div>
    </PageShell>
  );
}
