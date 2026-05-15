function render() {
  const root = document.getElementById('root');

  if (
    !getLoggedUser() &&
    state.view !== 'login' &&
    state.view !== 'register'
  ) {
    state.view = 'login';
  }

  let html = '';

  switch (state.view) {
    case 'login':
      html = loginView();
      break;

    case 'register':
      html = registerView();
      break;

    case 'feed':
      html = feedView();
      break;

    case 'create':
      html = createView();
      break;

    case 'bolao':
      html = bolaoView();
      break;

    case 'ranking':
      html = rankingView();
      break;

    case 'join':
      html = joinView();
      break;

    default:
      html = loginView();
  }

  if (state.businessVisible) {
    html += businessModelView();
  }

  root.innerHTML = html;
}

(function init() {
  render();
})();