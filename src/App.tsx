import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import Benefits from './components/Benefits';
import SocialProof from './components/SocialProof';
import Guarantee from './components/Guarantee';
import Urgency from './components/Urgency';
import Reels from './components/Reels';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <VideoSection />
      <Benefits />
      <SocialProof />
      <Guarantee />
      <Urgency />
      <Reels />
      <FAQ />
      <FinalCTA />
    </div>
  );
}

export default App;
