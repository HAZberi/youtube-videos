import axios from "axios";

const KEY = "AIzaSyC_BRssZllKbA0LDiZ0PwCPnBYEpP9W0OE";
export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResults: 50,
        type: 'video',
        key: KEY
    }
});



