import App from './App.html';

var raw_keyboard = localStorage.getItem('keyboard');

if (raw_keyboard) {
  var keyboard = JSON.parse(raw_keyboard);
} else {
  var keyboard = {
    one_time: false,
    buttons: [
      [
        {
          action: {
            type: 'text',
            payload: '{"button": "1"}',
            label: 'Red'
          },
          color: 'negative'
        },
        {
          action: {
            type: 'text',
            payload: '{"button": "2"}',
            label: 'Green'
          },
          color: 'positive'
        }
      ],
      [
        {
          action: {
            type: 'text',
            payload: '{"button": "3"}',
            label: 'White'
          },
          color: 'default'
        },
        {
          action: {
            type: 'text',
            payload: '{"button": "4"}',
            label: 'Blue'
          },
          color: 'primary'
        }
      ]
    ]
  }
}

const app = new App({
	target: document.body,
	data: {
		keyboard: keyboard,
    i:0,
    j:0,
    errorValid: "",
    select: "JSON"
	}
});

export default app;