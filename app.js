const express = require('express');
const app = express();

app.use(express.json()); 

app.post('/process_data', (req, res) => {
    const data = req.body.data || []; 

    const numbers = [];
    const alphabets = [];
    let highestLowercaseAlphabet = [];

    data.forEach(item => {
        if (!isNaN(item)) { 
            numbers.push(Number(item));
        } else if (/^[a-zA-Z]+$/.test(item)) {
            alphabets.push(item); 
            
            if (/^[a-z]+$/.test(item)) { 
                if (highestLowercaseAlphabet.length === 0 || item > highestLowercaseAlphabet[0]) {
                    highestLowercaseAlphabet = [item];
                } else if (item === highestLowercaseAlphabet[0]) {
                    highestLowercaseAlphabet.push(item); 
                }
            }
        }
    });

    res.json({
        status: "success",
        user_id: "arnav_verma_02102003", 
        email_id: "arnav.verma2021@vitstudent.ac.in", 
        college_roll_number: "21BCE5119", 
        numbers,
        alphabets, 
        highest_lowercase_alphabet: highestLowercaseAlphabet 
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
