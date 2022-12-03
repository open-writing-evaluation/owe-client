import React, { useState } from 'react';
import { Card } from '@mui/material';

import TextStage from "./TextStage";
import DiffStage from "./DiffStage";

export default function MainCard() {
    const [stage, setStage] = useState("input");
    const [inputText, setInputText] = useState("");

    const submitEntry = () => {
        if (inputText.length > 0) {
            setStage("diff");
        }
    }

    const submitBack = () => {
        setStage("input");
        setInputText("");
    }

    if (stage === "input") {
        return (
            <Card
                sx={{ mt: 5}}
            >
                <TextStage 
                    setStage={() => submitEntry()}
                    setInputText={(s) => setInputText(s)}
                />
            </Card>
        );
    } else {
        return (
            <Card
                sx={{ mt: 5}}
            >
                <DiffStage
                    inputText={inputText}
                    setStage={() => submitBack()}
                />
            </Card>
        );
    }

}