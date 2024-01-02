import axios from "axios";

export async function getPosts() {
    return await axios.get("/api/post");
}