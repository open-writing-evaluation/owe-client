import axios from "axios";

export async function helloWorld() {
    try {
        const { data, status } = await axios.get(
            'http://127.0.0.1:8000/test',
            {
                headers: {
                    Accept: "application/json",
                },
            },
        );

        console.log(JSON.stringify(data, null, 4));
    } catch (error) {
        console.log(error);
    }
}

export async function hardCodedResult() {
    const { data, status } = await axios.get(
        'http://127.0.0.1:8000/hardcoded/',
        {
            headers: {
                Accept: "application/json",
            },
        },
    );

    console.log(status);

    return data;
}

export async function GECresult(input: string) {
    try {
        const { data, status } = await axios.get(
            `http://127.0.0.1:8000/gec/${input}`,
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