import React from 'react';
import { useState, useEffect } from 'react';
import { CardContent, CardActions, Button, Stack, Container, CircularProgress } from '@mui/material';

import CombinedDiffDisplay from './CombinedDiffDisplay';
import Scoreboard from './Scoreboard';
import { GECresult, hardCodedResult } from '../utils/request_utils';

type DiffStageProps = {
    inputText: string,
    setStage: () => void,
}

export default function DiffStage(props: DiffStageProps) {
    const [loading, setLoading] = useState(true);
    const [resultText, setResultText] = useState('');
    const [scores, setScores] = useState([]);

    useEffect(() => {
        hardCodedResult()
            .then((res) => {
                setResultText(res['corrected']);
                setScores(res['scores']);
                setLoading(false);
            })
            .catch((err) => console.log(err));
    }, []);

    if (loading) {
        return (
            <CardContent>
                <Container sx={{display: 'flex', justifyContent: 'center'}}>
                    <CircularProgress />
                </Container>
            </CardContent>
        );
    }

    return (
        <div>
            <CardContent
                sx={{display: "flex", justifyContent: "center"}}
            >
                <Stack direction="column" spacing={1}>
                    <Stack direction="row" spacing={1}>
                        <CombinedDiffDisplay 
                            inputText={props.inputText}
                            correctedText={resultText}
                        />
                    </Stack>
                    <Scoreboard 
                        scores={scores}
                    />
                </Stack>
            </CardContent>
            <CardActions
                sx={{ display: "flex", justifyContent: "end" }}
            >
                {/* <Button
                    variant="outlined"
                    onClick={props.setStage}
                >
                    Return
                </Button> */}
                <Button
                    variant="outlined"
                    onClick={props.setStage}
                >
                    Back
                </Button>
            </CardActions>
        </div>
    );
}