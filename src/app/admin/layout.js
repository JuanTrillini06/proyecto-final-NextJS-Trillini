export default function AdminLayout({ children }) {
  return (
    <header>
      <div className="bg-indigo-500 p-5 flex items-center justify-center gap-10">
        <h3 className="text-xl font-bold uppercase text-center">ADMINISTRADOR</h3>
      </div>
      {children}
    </header>
  );
}