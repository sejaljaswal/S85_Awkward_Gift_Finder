const Layout = ({ children }) => (
  <div className="min-h-screen bg-white flex flex-col">
    <main className="flex-1 w-full max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12 flex flex-col gap-8">
      {children}
    </main>
  </div>
);

export default Layout; 