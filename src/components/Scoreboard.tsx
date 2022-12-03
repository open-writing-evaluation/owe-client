import React from 'react';
import { nanoid } from 'nanoid';
import { Paper, Typography, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

type ScoreboardProps = {
    scores: Array<string>,
};

export default function Scoreboard(props: ScoreboardProps) {
    const scores = props.scores.map((score) => {
        return <TableCell key={nanoid()} align='center'>{score}</TableCell>
    });

    return (
        <Paper elevation={2} sx={{padding: 1}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align='center'>Overall Score</TableCell>
                        <TableCell align='center'>Content</TableCell>
                        <TableCell align='center'>Organization</TableCell>
                        <TableCell align='center'>Word Choice</TableCell>
                        <TableCell align='center'>Sentence Fluency</TableCell>
                        <TableCell align='center'>Conventions</TableCell>
                        <TableCell align='center'>Prompt Adherence</TableCell>
                        <TableCell align='center'>Language</TableCell>
                        <TableCell align='center'>Narrativity</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        {/* <TableCell align='center'>12</TableCell>
                        <TableCell align='center'>1</TableCell>
                        <TableCell align='center'>2</TableCell>
                        <TableCell align='center'>17</TableCell>
                        <TableCell align='center'>10</TableCell>
                        <TableCell align='center'>1</TableCell>
                        <TableCell align='center'>16</TableCell>
                        <TableCell align='center'>20</TableCell>
                        <TableCell align='center'>33</TableCell> */}
                        {scores}
                    </TableRow>
                </TableBody>
            </Table>
        </Paper>
    );
}