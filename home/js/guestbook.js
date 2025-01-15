new Vue({
    el: '#guestbook',
    data: {
      guestName: '',
      guestMessage: ''
    },
    methods: {
      addEntry() {
        console.log('Message Submitted');
        console.log('Name:', this.guestName);
        console.log('Message:', this.guestMessage);
        alert('Thank you for stopping by!');
      }
    }
  });