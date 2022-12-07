import axios from "axios";

export async function helloWorld() {
    try {
        const { data, status } = await axios.get(
            'https://127.0.0.1:8000/test',
            {
                headers: {
                    Accept: "application/json",
                },
            },
        );

        console.log(data);
        console.log(status);
    } catch (error) {
        console.log(error);
    }
}

export async function hardCodedResult() {
    const { data, status } = await axios.get(
        `https://${process.env.REACT_APP_SERVER_IP}:8000/hardcoded/`,
        {
            headers: {
                Accept: "application/json",
                "Access-Control-Allow-Origin": '*',
            },
        },
    );

    console.log(status);

    return data;
}

export async function GECresult(input: string) {
    try {
        const { data, status } = await axios.get(
            `https://127.0.0.1:8000/gec/${input}`,
            {
                headers: {
                    Accept: "application/json",
                },
            },
        );

        console.log(status);

        return data;
    } catch (error) {
        console.log(error);
        return {};
    }
}