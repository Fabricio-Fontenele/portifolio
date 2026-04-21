export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-4 text-foreground">
      <div className="text-center">
        <p className="text-sm uppercase tracking-[0.16em] text-muted-foreground">
          404
        </p>
        <h1 className="mt-3 text-3xl font-semibold">Página não encontrada</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          O conteúdo solicitado não está disponível neste endereço.
        </p>
        <a href="/" className="cosmic-button mt-6 inline-flex">
          Voltar para o início
        </a>
      </div>
    </main>
  );
}
