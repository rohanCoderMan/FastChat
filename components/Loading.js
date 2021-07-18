import { Circle } from 'better-react-spinkit';

function Loading() {
    return (
        <center style={{ display: "grid", placeItems: "center", height: "100vh"}}>
            <div>
                <img 
                src="https://www.transparentpng.com/thumb/whatsapp/99VXyI-whatsapp-blue-logo-images-png.png"
                alt=""
                style={{ marginBottom: 10 }}
                height={200}
                />
                <Circle color="blue" size={60}/>
            </div>
        </center>
    );
}

export default Loading;
