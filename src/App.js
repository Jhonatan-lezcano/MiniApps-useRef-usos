import CopyApp from "./components/CopyApp";
import FocusApp from "./components/FocusApp";
import LoadingApp from "./components/LoadingApp";
import MediaPlayer from "./components/MediaPlayer";
import RenderApp from "./components/RenderApp";
import ScrollAnimation from "./components/ScrollAnimation";

function App() {
  return (
    <div>
      <h1>App</h1>
      <FocusApp />
      <br />
      <CopyApp />
      <br />
      <MediaPlayer />
      <br />
      <br />
      <br />
      <ScrollAnimation />
      <br />
      <br />
      <br />
      <RenderApp />
      <br />
      <br />
      <br />
      <LoadingApp />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
