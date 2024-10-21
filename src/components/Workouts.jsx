import Card from "react-bootstrap/Card";
import batmanChest from "../assets/images/batman-chest.jpg";
import batmanTriceps from "../assets/images/batman-triceps.jpg";
import batmanBack from "../assets/images/batman-back.jpg";
import batmanBiceps from "../assets/images/batman-biceps.jpg";
import batmanShoulders from "../assets/images/batman-shoulders.jpg";
import batmanLegs from "../assets/images/batman-legs.jpg";
import batmanAbs from "../assets/images/batman-abs.jpg";

const Workouts = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-semibold">Workouts</h1>
      <div className="flex flex-wrap m-2 items-center justify-center">
        <div className="bg-white m-10 rounded-lg">
          <Card className="relative m-2">
            <Card.Img className="h-64 w-auto" variant="top" src={batmanChest} />
            <Card.Body className="p-0">
              <Card.Text className="absolute bottom-0 p-2 left-0 w-full text-2xl bg-black/50 bg-opacity-75 text-white text-left">
                Chest Workouts
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="bg-white m-10 rounded-lg">
          <Card className="relative m-2">
            <Card.Img
              className="h-64 w-auto "
              variant="top"
              src={batmanTriceps}
            />
            <Card.Body className="p-0">
              <Card.Text className="absolute bottom-0 p-2 left-0 w-full text-2xl bg-black/50 bg-opacity-75 text-white text-left">
                Triceps Workouts
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="bg-white m-10 rounded-lg">
          <Card className="relative m-2">
            <Card.Img className="h-64 w-auto " variant="top" src={batmanBack} />
            <Card.Body className="p-0">
              <Card.Text className="absolute bottom-0 p-2 left-0 w-full text-2xl bg-black/50 bg-opacity-75 text-white text-left">
                Back Workouts
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="bg-white m-10 rounded-lg">
          <Card className="relative m-2">
            <Card.Img
              className="h-64 w-auto "
              variant="top"
              src={batmanBiceps}
            />
            <Card.Body className="p-0">
              <Card.Text className="absolute bottom-0 p-2 left-0 w-full text-2xl bg-black/50 bg-opacity-75 text-white text-left">
                Biceps Workouts
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="bg-white m-10 rounded-lg">
          <Card className="relative m-2">
            <Card.Img
              className="h-64 w-auto "
              variant="top"
              src={batmanShoulders}
            />
            <Card.Body className="p-0">
              <Card.Text className="absolute bottom-0 p-2 left-0 w-full text-2xl bg-black/50 bg-opacity-75 text-white text-left">
                Shoulder Workouts
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="bg-white m-10 rounded-lg">
          <Card className="relative m-2">
            <Card.Img className="h-64 w-auto " variant="top" src={batmanLegs} />
            <Card.Body className="p-0">
              <Card.Text className="absolute bottom-0 p-2 left-0 w-full text-2xl bg-black/50 bg-opacity-75 text-white text-left">
                Legs Workouts
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="bg-white m-10 rounded-lg">
          <Card className="relative m-2">
            <Card.Img className="h-64 w-auto " variant="top" src={batmanAbs} />
            <Card.Body className="p-0">
              <Card.Text className="absolute bottom-0 p-2 left-0 w-full text-2xl bg-black/50 bg-opacity-75 text-white text-left">
                Abs Workouts
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Workouts;
