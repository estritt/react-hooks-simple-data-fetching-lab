import { useEffect, useState } from "react";

function App() {

    const [ image, setImage ] = useState();
    const [ isLoaded, setIsLoaded ] = useState(false);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(r => r.json())
        .then(dog => {setImage(dog); setIsLoaded(true);});
    }, []);

    if (!isLoaded) {return <p>Loading...</p>;}
    console.log(image.message)
    return <img src={image.message} alt="A Random Dog" />;
}

export default App;