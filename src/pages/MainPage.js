import {useNavigate} from "react-router-dom";

export default function MainPage() {
    const navigation = useNavigate();

    return (
        <>
        <div>

            <button onClick={() => navigation("/level1/runningRace")}>달리기 경주</button>

        </div>
        </>
    );
}
