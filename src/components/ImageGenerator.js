import React, {useState} from "react";
function ImageGenerator() {
    const [prompt, setPrompt] = useState('');
    const [imageUrls, setImageUrls] = useState([]);


    const generateImage = async () => {
        try {
            const response = await fetch(`https://spring-ai-demo-v1-2.onrender.com/generate-image-with-options?prompt=${prompt}`)
            const urls = await response.json();
            setImageUrls(urls);
        } catch (error) {
            console.error("Error generating image:", error);

        }
    };

    return (
        <div>
            <h2>Generate an Image</h2>
            <input
                type={"text"}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder={"Enter prompt for Image"}
            />
            <button onClick={generateImage}>Generate Image</button>

            <div className="image-grid">
                {imageUrls.map((url, index) => (
                    <img key={index} src={url} alt={`Generated ${index + 1}`}/>
                ))}
                {[...Array(4 - imageUrls.length)].map((_, index) => (
                    <div
                        key={index + imageUrls.length}
                        className={"empty-image-slot"}
                    >

                    </div>
                ))}
            </div>
        </div>
    )
}


export default ImageGenerator;