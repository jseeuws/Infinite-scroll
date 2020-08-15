// Unsplash API
const count = 10;
const apiKey = 'RSTGzybP86AuIhBm5T667Z2FlNpHpuiEsJpDCUmt8GA';
const apiUrl = `https://api.unsplash.com/photos/?client_id=${apiKey}&count=${count}`

//Get photos from Unsplash API
async function getPhotos() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // Catch Error Here
    }
}

// On Load 
getPhotos();