// import React from 'react';
// import { Typography, Grid, Chip, Paper } from '@mui/material';
// import { Remove, Add } from '@mui/icons-material';
import * as diff from 'diff';

type CombinedDiffDisplayProps = {
    inputText: string,
    correctedText: string,
};

export default function CombinedDiffDisplay(props: CombinedDiffDisplayProps) {
    const diffResult = diff.diffWordsWithSpace(props.inputText, props.correctedText);
    return (
        // <Paper elevation={2} sx={{padding: 1}}>
        //     <Grid container spacing={1}>
        //         {diffResult.map((o) => {
        //             if (o.value !== ' ') {
        //                 if (o.added) {
        //                     return (
        //                         <Grid item>
        //                             <Chip
        //                                 label={<Typography style={{whiteSpace: 'normal'}}>{o.value}</Typography>}
        //                                 size="small"
        //                                 icon={<Add />}
        //                                 sx={{backgroundColor: "green", height: "100%"}}
        //                             />
        //                         </Grid>
        //                     );
        //                 } else if (o.removed) {
        //                     return (
        //                         <Grid item>
        //                             <Chip 
        //                                 label={<Typography style={{whiteSpace: 'normal'}}>{o.value}</Typography>}
        //                                 size="small"
        //                                 icon={<Remove />}
        //                                 sx={{backgroundColor: "red", opacity: 0.25, height: "100%"}}
        //                             />
        //                         </Grid>
        //                     );
        //                 } else {
        //                     return (
        //                         <Grid item>
        //                             <Typography
        //                                 variant="body1"
        //                             >
        //                                 {o.value}
        //                             </Typography>
        //                         </Grid>
        //                     );
        //                 }
        //             } else {
        //                 return <>;</>
        //             }
        //         })}
        //     </Grid>
        // </Paper>
        <div style={{lineHeight: 1.7}}>
            {diffResult.map((o) => {
                if (o.added) {
                    return (
                        <span style={{backgroundColor: "green", borderRadius: "16px", whiteSpace: "nowrap", padding: "4px 0"}}>
                            <span style={{marginLeft: "4px"}}>＋</span>
                            <span style={{padding: "0 8px 0 4px"}}>{o.value}</span>
                        </span>
                    );
                } else if (o.removed) {
                    return (
                        <span style={{backgroundColor: "red", opacity: 0.25, borderRadius: "16px", whiteSpace: "nowrap", padding: "4px 0"}}>
                            <span style={{marginLeft: "4px"}}>－</span>
                            <span style={{padding: "0 8px 0 4px"}}>{o.value}</span>
                        </span>
                    );
                } else {
                    return (
                        <span style={{whiteSpace: "pre-wrap"}}>
                            <span>{o.value}</span>
                        </span>
                    )
                }
            })}
        </div>
    );
}