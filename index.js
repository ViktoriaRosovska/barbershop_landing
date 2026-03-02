window.addEventListener('load', () => {
    if (window.location.hash) {
        history.replaceState(null, null, window.location.pathname + window.location.search);
    }
})