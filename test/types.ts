import type { Root, Paragraph, Sentence, Word, Text } from '__PACKAGE__';
const text: Text = {type:'TextNode',value:'Hello'};
const word: Word = {type:'WordNode',children:[text]};
const sentence: Sentence = {type:'SentenceNode',children:[word]};
const paragraph: Paragraph = {type:'ParagraphNode',children:[sentence]};
const root: Root = {type:'RootNode',children:[paragraph]};
// @ts-expect-error textual value must remain string
const invalid: Text = {type:'TextNode',value:3};
