import back from "./back.jpeg";
import Tania from "./tania.png";

export const Introduction = () => {
    return           <div className="flex justify-around items-center h-screen bg-stone-800">
        <div>
            <p className="text-5xl text-white">Hi, I'm Tania</p>
            <p className="text-5xl text-indigo-600">Frontend Developer</p>
        </div>
        <img src={Tania} style={{ height: '100%'}}/>
    </div>
}