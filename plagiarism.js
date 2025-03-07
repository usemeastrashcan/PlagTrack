const fs = require('fs')
const readline = require('readline')
const axios = require('axios')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Enter The Location of File: ", (filePath) => {
    fs.readFile(filePath, 'utf-8', async (err, data) => {
        if (err) {
            console.log("Error Reading The File: ", err)
            rl.close();
            return;
        }

        console.log('File content extracted. Sending it to the AI content detector...')

        try {

            const apiURL = 'https://ai-content-detector-ai-gpt.p.rapidapi.com/api/detectText'
            apiKey = `14a5fc1154msh0b3bc0ed4bf70e0p15e03fjsn6d0bc1743fce`


            const response = await axios.post(apiURL,
                {
                    text: data
                },
                {
                    headers: {
                       // 'Authorization': `Bearer ${apiKey}`,
                        //'Content-Type': 'application/json'

                        'Content-Type': 'application/json' ,
                        'x-rapidapi-host': 'ai-content-detector-ai-gpt.p.rapidapi.com' ,
                        'x-rapidapi-key': apiKey
                    }
                }
            )

            console.log('AI Content Detector Response:', response.data)
            console.log("Program will Exit after 10s...")
            setTimeout(()=>
            {
                console.log("Program Exits Here.")
            }, 10000)
        } catch (error) {

            console.error('Error making API request:', error.message)
        }

        rl.close();

    })


})




