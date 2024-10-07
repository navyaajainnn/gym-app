import Card from 'react-bootstrap/Card';
import batmanChest from "../assets/images/batman-chest.jpg"
import batmanTriceps from "../assets/images/batman-triceps.jpg"
import batmanBack from "../assets/images/batman-back.jpg"


const Workouts = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className='text-4xl font-semibold'>Workouts</h1>
            <div className='flex flex-wrap w-11/12 m-2 space-x-28 items-center justify-center'>
            <div className='bg-white rounded-lg'>
            <Card className="relative m-2">
                <Card.Img className="h-72 w-auto " variant="top" src={batmanChest} />
                <Card.Body className="p-0">
                    <Card.Text className="absolute bottom-0 p-2 left-0 w-full text-2xl bg-black/50 bg-opacity-75 text-white text-left">
                        Chest Workouts
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
            <div className='bg-white m-3 rounded-lg'>
            <Card className="relative m-2">
                <Card.Img className="h-72 w-auto " variant="top" src={batmanTriceps} />
                <Card.Body className="p-0">
                    <Card.Text className="absolute bottom-0 p-2 left-0 w-full text-2xl bg-black/50 bg-opacity-75 text-white text-left">
                        Triceps Workouts
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
            <div className='bg-white m-3 rounded-lg'>
            <Card className="relative m-2">
                <Card.Img className="h-72 w-auto " variant="top" src={batmanBack} />
                <Card.Body className="p-0">
                    <Card.Text className="absolute bottom-0 p-2 left-0 w-full text-2xl bg-black/50 bg-opacity-75 text-white text-left">
                        Back Workouts
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
            <div className='bg-white m-3 rounded-lg'>
            <Card className="relative m-2">
                <Card.Img className="h-72 w-auto " variant="top" src={batmanChest} />
                <Card.Body className="p-0">
                    <Card.Text className="absolute bottom-0 p-2 left-0 w-full text-2xl bg-black/50 bg-opacity-75 text-white text-left">
                        Chest Workouts
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
            <div className='bg-white m-3 rounded-lg'>
            <Card className="relative m-2">
                <Card.Img className="h-72 w-auto " variant="top" src={batmanChest} />
                <Card.Body className="p-0">
                    <Card.Text className="absolute bottom-0 p-2 left-0 w-full text-2xl bg-black/50 bg-opacity-75 text-white text-left">
                        Chest Workouts
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
            <div className='bg-white m-3 rounded-lg'>
            <Card className="relative m-2">
                <Card.Img className="h-72 w-auto " variant="top" src={batmanChest} />
                <Card.Body className="p-0">
                    <Card.Text className="absolute bottom-0 p-2 left-0 w-full text-2xl bg-black/50 bg-opacity-75 text-white text-left">
                        Chest Workouts
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
            <div className='bg-white m-3 rounded-lg'>
            <Card className="relative m-2">
                <Card.Img className="h-72 w-auto " variant="top" src={batmanChest} />
                <Card.Body className="p-0">
                    <Card.Text className="absolute bottom-0 p-2 left-0 w-full text-2xl bg-black/50 bg-opacity-75 text-white text-left">
                        Chest Workouts
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
            </div>
        </div>
    )
}

export default Workouts;