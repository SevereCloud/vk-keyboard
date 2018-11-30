import App from './App.html';

const app = new App({
	target: document.body,
	data: {
		keyboard: {
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
    },
    i:0,
    j:0,
    errorValid: ""
	}
});

export default app;