# Document AI Processor with Node.js

This project demonstrates how to use Google Cloud's Document AI API to process a document (e.g., an image) and extract text and paragraph information. The script is written in Node.js and uses the `@google-cloud/documentai` library.

## Features

- Process an image file (e.g., JPEG) using Google Cloud's Document AI API.
- Extract and display text and paragraphs from the document.
- Provides a starting point for integrating Document AI into your Node.js projects.

---

## Prerequisites

### 1. Google Cloud Setup
1. Enable the **Document AI API** on your [Google Cloud Console](https://console.cloud.google.com/).
2. Create a **processor** in the Document AI section of the Cloud Console. Note the `PROJECT_ID`, `LOCATION`, and `PROCESSOR_ID` values.
3. Set up a service account with the required permissions for Document AI.
4. Download the service account key JSON file and set the path in the `GOOGLE_APPLICATION_CREDENTIALS` environment variable.

### 2. Node.js Setup
1. Install [Node.js](https://nodejs.org/) (v14 or later is recommended).
2. Clone this repository:
   ```bash
   git clone <repository-url>
   cd <repository-name>
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

---

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
PROJECT_ID=<Your Google Cloud Project ID>
LOCATION=<Processor Location, e.g., 'us' or 'eu'>
PROCESSOR_ID=<Your Processor ID>
GOOGLE_APPLICATION_CREDENTIALS=<Path to your service account key JSON file>
```

---

## Usage

1. Prepare the document you want to process (e.g., an image file) and place it in the `data/` folder. Update the `filePath` in the script if necessary.

2. Run the script:

   ```bash
   node index.js
   ```

3. The extracted text and paragraph information will be logged to the console.

---

## Code Structure

- **`index.js`**: Main script for processing documents using the Document AI API.
- **`data/two.jpeg`**: Sample image file for testing (you can replace this with your own image).
- **`.env`**: Environment variables file (excluded from version control).

---

## Output Example

Here’s an example of the output:

```plaintext
Starting the quickstart function...
Processor name: projects/<PROJECT_ID>/locations/<LOCATION>/processors/<PROCESSOR_ID>
File read successfully: data/two.jpeg
Image file encoded to base64.
Request object created.
Document processed successfully.
Text extracted from the document.
The document contains the following paragraphs:
Paragraph text:
<Extracted text from the document>
```

---

## Dependencies

- [dotenv](https://www.npmjs.com/package/dotenv)
- [@google-cloud/documentai](https://www.npmjs.com/package/@google-cloud/documentai)
- Node.js `fs` module for file handling.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contributing

Feel free to open issues or create pull requests if you have suggestions or improvements.

---

## References

- [Google Cloud Document AI Documentation](https://cloud.google.com/document-ai/docs)
- [Google Cloud Node.js Client Libraries](https://cloud.google.com/nodejs/docs)

---

## Author

**Asutosh Sidhya**

Check out my [GitHub profile](https://github.com/sidhyaashu).

---

## Disclaimer

Ensure you handle sensitive data, such as API keys and documents, securely and avoid committing them to your repository.


### Instructions

1. Save this content into a `README.md` file in your repository.
2. Replace placeholders like `<Your Google Cloud Project ID>` and `<repository-url>` with your specific details.
3. Include a `.gitignore` file to exclude sensitive files such as `.env` and `GOOGLE_APPLICATION_CREDENTIALS`.

Let me know if you need additional adjustments or further enhancements!