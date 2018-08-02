import axios

function getUser() {
    try {
        const response = await axios.get('https://candidate.hubteam.com/candidateTest/v3/problem/dataset?userKey=5a782d58c60f07600dca366df4e4');
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}