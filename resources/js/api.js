import axios from "axios";

const API_URL = "/api/coaches";

export async function fetchCoachesData(page = 1, query = "", sort = "default") {
    try {
        const response = await axios.get(API_URL, {
            params: { page, search: query, sort },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching coaches:", error);
        throw error;
    }
}
