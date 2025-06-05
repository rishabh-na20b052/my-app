import HomePage from './pages/HomePage';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="bg-background">
      <Navbar />
      <HomePage />
      <Footer />
      {/* If you add more pages, you'll use React Router here */}
    </div>
  );
}

export default App;