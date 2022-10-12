import axios from "axios";

const api = axios.create({
    baseURL : process.env.API_BASE_URL,
    headers:{
        Authorization:`Bearer ${process.env.BACKEND_API_KEY}`,
    },
})

// Fetch Categories

export const fetchCategories = async ()=> api.get('/api/categories');

// Fetch Articles
export const fetchArticles = async(queryString:string) => api.get(`/api/articles?${queryString}`)

export const fetchArticleBySlug = async (queryString: string) => api.get(`/api/articles?${queryString}`)