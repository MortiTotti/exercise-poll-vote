const URL = "http://private-amnesiac-53915-heycar.apiary-proxy.com/questions";

export const getQuestions = () =>
    fetch(URL)
        .then(response => response.json())
        .then(response => {
            return Promise.resolve(response);
        })
        .catch(error => {
            return Promise.reject(error);
        });

export const saveQuestion = (question) =>
    fetch(URL,
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(question)
        })
        .then(response => response.json())
        .then(response => {
            return Promise.resolve(response);
        })
        .catch(error => {
            return Promise.reject(error);
        });

export default {
    getQuestions,
    saveQuestion
}