import Header from './components/HeaderTemp';
import Footer from './components/Footer';
import AppRouter from './routes/AppRouter';

const App = () => {
  return (
    <div className="app">
      <Header />

      <main className="main">
        <AppRouter />
      </main>

      <Footer />
    </div>
  );
};

export default App;