import React, { useState } from 'react';
import { parse } from 'papaparse';

function CSVFileInput() {
  const [fileContent, setFileContent] = useState([]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const csvData = reader.result;
      const result = parse(csvData, {
        header: true,
        skipEmptyLines: true,
        delimiter: '',
        newline: '',
      });
      setFileContent(result.data);
    };
    reader.readAsText(file);
  };

  const handleFileSubmit = async () => {
    try {
      await fetch('http://localhost:3001/products', {
        method: 'PUT',
        body: JSON.stringify(fileContent),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      <button
        type="button"
        onClick={handleFileSubmit}
      >
        ATUALIZAR
      </button>
    </div>
  );
}

export default CSVFileInput;
