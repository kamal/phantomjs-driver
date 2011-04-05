if (phantom.state.length === 0) {
  phantom.state = 'socket';
  phantom.open("http://localhost:8081");
}
