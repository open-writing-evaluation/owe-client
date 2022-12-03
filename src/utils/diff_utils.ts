import * as diff from 'diff';

export default class DiffUtils {
    static getSentenceLevelDiff(inputText: string, correctedText: string) {
        // TODO: invoke some kind of sentence splitting on the backend?
        const inputSentences = inputText.split(". ");
        const correctedSentences = correctedText.split(". ");

        if (inputSentences.length !== correctedSentences.length) {
            throw new Error("Number of sentences mismatch.");
        }

        let sentencesDiff = [];
        for (let i=0; i<inputSentences.length; i++) {
            var inSent = inputSentences[i];
            if (!['.', '!', '?'].includes(inSent[inSent.length - 1])) {
                inSent = inSent + '.';
            }

            var outSent = correctedSentences[i];
            if (!['.', '!', '?'].includes(outSent[outSent.length - 1])) {
                outSent = outSent + '.';
            }

            const sentenceDiff = diff.diffWordsWithSpace(inSent, outSent);
            sentencesDiff.push(sentenceDiff);
        }

        return sentencesDiff;
    }
}