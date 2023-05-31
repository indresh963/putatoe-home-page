
import './App.css';

import { Banner, Features, Floatingbutton, Header, Navigation, Partners, Services } from './components/index';
function App() {
  return (
    <>
      <Header />
      <div className='p-2'>
        <Banner />
        <Features />
      </div>
      <Partners />
      <Services />
      <Floatingbutton />
      <Navigation />
    </>
  );
}

export default App;
