export default function Loading() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <div className="animate-pulse space-y-6">
        <div className="mx-auto h-8 w-48 rounded-full bg-gray-200 dark:bg-gray-800" />
        <div className="mx-auto h-12 w-96 rounded-lg bg-gray-200 dark:bg-gray-800" />
        <div className="mx-auto h-6 w-80 rounded bg-gray-200 dark:bg-gray-800" />
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-40 rounded-xl bg-gray-200 dark:bg-gray-800" />
          ))}
        </div>
      </div>
    </div>
  );
}
