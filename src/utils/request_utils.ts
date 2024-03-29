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
        `https://${process.env.REACT_APP_SERVER_IP}/hardcoded/`,
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
        const res: any = await fetch(`https://gecgpu.makemycodefast.com/gec?text=${encodeURI(input)}`);
        const data: any = await res.json();

        // const res: any = await fetch(`https://gec.makemycodefast.com/text`, {
        //     method: "POST",
        //     headers: { "Content-Type": "text/plain" },
        //     body: input,
        // });
        // const data: any = await res.json();

        return data;
    } catch (error) {
        console.log(error);
        return {};
    }
}