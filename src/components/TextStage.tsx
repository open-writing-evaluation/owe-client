import React from 'react';
import { TextField, CardContent, CardActions, Button } from '@mui/material';

type TexstStageProps = {
    setStage: () => void,
    setInputText: (text: string) => void,
}

export default function TextStage(props: TexstStageProps) {
    return (
        <div>
            <CardContent
                sx={{display: "flex", justifyContent: "center"}}
            >
                <TextField 
                    multiline
                    label="Type text for evaluation..."
                    minRows="10"
                    sx={{ minWidth: "100%" }}
                    onChange={(e) => props.setInputText(e.target.value)}
                />
            </CardContent>
            <CardActions
                sx={{ display: "flex", justifyContent: "end" }}
            >
                <Button
                    variant="outlined"
                    onClick={props.setStage}
                >
                    Submit
                </Button>
            </CardActions>
        </div>
    );
}