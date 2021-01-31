import { useHistory } from 'react-router-dom';

export default function Contact() {
    const history = useHistory();

    function handleClick() {
        history.push("/contactme");
    }

    return (
        <div>
            { /* some other components */}
            <button onClick={handleClick}>Navigate</button>
        </div>
    );
}