import Styled from 'styled-components'

export const TextEditorContainer = Styled.div`
display: flex;
background-color: #000000;`

export const HorizontalLine = Styled.hr`
width: 100%;`

export const TextArea = Styled.textarea`
width: 100%;
height: 60px;
font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
text-decoration: ${props => (props.isUnderLine ? 'underline' : 'normal')};
`

export const Button = Styled.button`
color:${props => props.color};`
