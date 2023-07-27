import React, { useEffect } from 'react';

const CodeTypewriter: React.FC = () => {
  useEffect(() => {
    const codeSnippet = `export default function({ data }) {
  return <Layout>
    <Product details={data} />
  </Layout>
}`;

    const codeContainer = document.querySelector('#code-container');
    let i = 0;
    let lineNumber = 1;
    let isNewLine = true;

    const typeCode = () => {
      if (i < codeSnippet.length) {
        const char = codeSnippet.charAt(i);
        if (isNewLine) {
          codeContainer!.innerHTML += `<span>${lineNumber.toString().padStart(2)}. </span>`;
          lineNumber++;
          isNewLine = false;
        }
        codeContainer!.innerHTML += char;
        i++;
        if (char === '\n') {
          isNewLine = true;
        }
        setTimeout(typeCode, 30); // Adjust the typing speed as desired
      }
    };

    typeCode();
  }, []);

  return (
    <div>
      <pre id="code-container" style={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap' }}></pre>
    </div>
  );
};

export default CodeTypewriter;
