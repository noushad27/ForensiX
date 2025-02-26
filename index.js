const dotenv = require("dotenv");
dotenv.config();

const projectId = process.env.PROJECT_ID;
const location = process.env.LOCATION; // Format is 'us' or 'eu'
const processorId = process.env.PROCESSOR_ID; // Create processor in Cloud Console
const SERVICE_PATH = process.env.GOOGLE_APPLICATION_CREDENTIALS;
const filePath = 'data/two.jpeg';

const { DocumentProcessorServiceClient } = require('@google-cloud/documentai').v1;


// Instantiates a client
const client = new DocumentProcessorServiceClient();

async function quickstart() {
    try {
        console.log("Starting the quickstart function...");

        // The full resource name of the processor
        const name = `projects/${projectId}/locations/${location}/processors/${processorId}`;
        console.log(`Processor name: ${name}`);

        // Read the file into memory
        const fs = require('fs').promises;
        const imageFile = await fs.readFile(filePath);
        console.log(`File read successfully: ${filePath}`);

        // Convert the image data to a Buffer and base64 encode it
        const encodedImage = Buffer.from(imageFile).toString('base64');
        console.log("Image file encoded to base64.");

        const request = {
            name,
            rawDocument: {
                content: encodedImage,
                mimeType: 'image/jpeg',
            },
        };
        console.log("Request object created.");

        // Recognizes text entities in the document
        const [result] = await client.processDocument(request);
        console.log("Document processed successfully.");

        const { document } = result;
        const { text } = document;
        console.log("Text extracted from the document.");

        // Extract shards from the text field
        const getText = textAnchor => {
            if (!textAnchor.textSegments || textAnchor.textSegments.length === 0) {
                return '';
            }

            const startIndex = textAnchor.textSegments[0].startIndex || 0;
            const endIndex = textAnchor.textSegments[0].endIndex;

            return text.substring(startIndex, endIndex);
        };

        // Read the text recognition output from the processor
        console.log('The document contains the following paragraphs:');
        const [page1] = document.pages;
        const { paragraphs } = page1;

        for (const paragraph of paragraphs) {
            const paragraphText = getText(paragraph.layout.textAnchor);
            console.log(`Paragraph text:\n${paragraphText}`);
        }
    } catch (error) {
        console.error('Error processing the document:', error);
    }
}

(async () => {
    try {
        console.log("Initializing the document processing...");
        await quickstart();
        console.log("Document processing completed.");
    } catch (error) {
        console.error('Error in the main function:', error);
    }
})();