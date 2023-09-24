import axios from "axios";

const movieDB=axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '9d209033f8558b2df6ba8c302325bed6',
        language:'en-US'
        
    },
});

export default movieDB;