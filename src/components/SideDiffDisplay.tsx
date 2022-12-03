import React from 'react';
import { Stack, Divider, Typography, Grid } from '@mui/material';
import { nanoid } from 'nanoid';
import { Change } from 'diff';

import DiffUtils from '../utils/diff_utils';

type SideDiffDisplayProps = {
    inputText: string,
    correctedText: string,
};

export default function SideDiffDisplay(props: SideDiffDisplayProps) {
    const sentLevelDiff = DiffUtils.getSentenceLevelDiff(props.inputText, props.correctedText);
    const getInRow = (sent: Array<Change>) => {
        let inRow = [];

        for (var word of sent) {
            if (word.removed) {
                inRow.push(
                    <Grid item>
                        <Typography
                            key={nanoid()}
                            sx={{color: 'red'}}
                            variant="body1"
                        >
                            {word.value}
                        </Typography>
                    </Grid>
                );
            } else if (!word.added) {
                inRow.push(
                    <Grid item>
                        <Typography
                            key={nanoid()}
                            variant="body1"
                        >
                            {word.value}
                        </Typography>
                    </Grid>
                );
            }
        }

        return (
            <Grid
                container
                key={nanoid()}
                spacing={1}
            >
                {inRow}
            </Grid>
        );
    }

    const getOutRow = (sent: Array<Change>) => {
        let outRow = [];

        for (var word of sent) {
            if (word.added) {
                outRow.push(
                    <Grid item>
                        <Typography
                            key={nanoid()}
                            sx={{color: 'green'}}
                            variant="body1"
                        >
                            {word.value}
                        </Typography>
                    </Grid>

                );
            } else if (!word.removed) {
                outRow.push(
                    <Grid item>
                        <Typography
                            key={nanoid()}
                            variant="body1"
                        >
                            {word.value}
                        </Typography>
                    </Grid>
                );
            }
        }

        return (
            <Grid
                container
                key={nanoid()}
                spacing={1}
            >
                {outRow}
            </Grid>
        );
    }

    const origText = (
        <Grid 
            direction="column"
            columnSpacing={1}
        >
            {sentLevelDiff.map(getInRow)}
        </Grid>
    );
    const newText = (
        <Grid
            direction="column"
        >
            {sentLevelDiff.map(getOutRow)}
        </Grid>
    );

    return (
        <Stack direction="row" spacing={2}>
            <div>
                <Typography
                    variant='overline'
                >
                    Original
                </Typography>
                <hr />
                {origText}
            </div>

            <div>
                <Typography
                    variant='overline'
                >
                    Corrected
                </Typography>
                <hr />
                {newText}
            </div>
        </Stack>
    );
}