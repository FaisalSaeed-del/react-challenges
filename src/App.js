import Lightdarkmode from "./colorchange/Lightdarkmode";
// import DogPics from "./dogpics/DogPics";
import FormValidator from "./formValidator/FormValidator";
import ScoreKeeper from "./scorekeeper/ScoreKeeper";

const App = () => {
  return (
    <div>
      <Lightdarkmode />
      <FormValidator />
      {/* <DogPics /> */}
      <ScoreKeeper />
    </div>
  );
};

export default App;
