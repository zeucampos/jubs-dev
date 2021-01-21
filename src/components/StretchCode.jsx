import * as React from "react";

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atelierLakesideDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const StretchCode = () => {
    const codeString = '(num) => num + 1';
    return (
        <SyntaxHighlighter language="javascript" style={atelierLakesideDark}>
            {codeString}
        </SyntaxHighlighter>
    );
}

export default StretchCode