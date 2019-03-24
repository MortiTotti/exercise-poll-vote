import constants from "Constants";
import HttpClient from "Helpers/Http-Client";

export const getQuestions = async () => {
    try {
        let response = await HttpClient.getAsync(`${constants.SERVER_HOST_URL}/questions`);
        return Promise.resolve(response);
    }
    catch (error) {
        return Promise.reject(error);
    }
};

export const saveQuestion = async (question) => {
    try {
        let response = await HttpClient.postAsync(`${constants.SERVER_HOST_URL}/questions`, question);
        return Promise.resolve(response);
    }
    catch (error) {
        return Promise.reject(error);
    }
};
