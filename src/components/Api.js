import axios from 'axios';

const getChatbotResponse = async () => {
  const userKey = Object.keys(localStorage).find(key => key.includes('név'));
  const userData = JSON.parse(localStorage.getItem(userKey));

  const orientationTestResult = JSON.parse(localStorage.getItem('Készségek teszt'));
  const bigFiveTestResult = JSON.parse(localStorage.getItem('Big Five személyiség teszt'));

  try {
    const result = await axios.post('https://api.openai.com/v4/engines/davinci-codex/completions', {
      prompt: `A felhasználó profilja: ${JSON.stringify(userData)}\n Képességek teszt eredmény: ${JSON.stringify(orientationTestResult)}\n Big Five személyiség teszt eredmény: ${JSON.stringify(bigFiveTestResult)}\n Milyen pályaorientációs tanácsokat adna a chatbot ennek a felhasználónak?`,
      max_tokens: 150
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`
      }
    });
    return result.data.choices[0].text;
  } catch (error) {
    console.error("Chatbot hiba:", error);
  }
};

export default getChatbotResponse;
