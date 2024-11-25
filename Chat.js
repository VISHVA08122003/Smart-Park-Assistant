import axios from 'axios';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const steps = [
	{
		id: '0',
		message: 'Hey!',
		trigger: '1',
	}, {
		id: '1',
		message: 'Please write your username',
		trigger: '2'
	}, {
		id: '2',
		user: true,
		trigger: '3',
	}, {
		id: '3',
		message: " hi {previousValue}, how can I help you?",
		trigger: 4
	}, {
		id: '4',
		options: [
			{ value: 1, label: 'View Courses' },
			{ value: 2, label: 'Read Articles' },

		],
		end: true
	}
];
const theme = {
	background: '#C9FF8F',
	headerBgColor: '#197B22',
	headerFontSize: '20px',
	botBubbleColor: '#0F3789',
	headerFontColor: 'white',
	botFontColor: 'white',
	userBubbleColor: '#FF5733',
	userFontColor: 'white',
};
const config = {
	botAvatar: "img.png",
	floating: true,
};
const sendToChatbot = async (message) => {
  try {
    const response = await axios.post('https://api.bing.microsoft.com/v7.0/conversations/', {
    }, {
      headers: {
        'Ocp-Apim-Subscription-Key': 'your-subscription-key'
      }
    });

    return response.data;
  } catch (error) {
    console.error('Error calling Bing AI Chatbot API', error);
    return "Sorry, I'm having trouble understanding right now.";
  }
};

function Chat() {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<ChatBot
					headerTitle="Allies"
					steps={steps}
					{...config}
				/>
			</ThemeProvider>
		</div>
	);
}

export default Chat;
