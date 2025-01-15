<script>
  new Vue({
    el: '#guestbook',
    data: {
      guestName: '',
      guestMessage: ''
    },
    methods: {
      addEntry() {
        console.log('Name:', this.guestName);
        console.log('Message:', this.guestMessage);

        if (Notification.permission === 'granted') {
          new Notification('Thank you for stopping by!');
        } else if (Notification.permission !== 'denied') {
          Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
              new Notification('Thank you for stopping by!');
            }
          });
        }
      }
    }
  });
</script>
