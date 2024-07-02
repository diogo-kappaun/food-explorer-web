if (
  localStorage['@foodexplorer:theme'] === 'dark' ||
  (!('@foodexplorer:theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}
