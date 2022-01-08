import Layout from './Components/Layout/Index';
import Profile from './Components/Profile/index';
import Repos from './Components/Repos/Index';
import {ResetCSS} from './Global/resetCss'


function App() {
  return (
  <main>
    <ResetCSS/>
      <Layout >
          <Profile />
          <Repos />
          
        </Layout>
    
  </main>
  );
}

export default App;
