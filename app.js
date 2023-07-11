const divInstall = document.getElementById("installContainer");
const butInstall = document.getElementById("butInstall");

if (window.location.protocol === "https:") {
  const requireHTTP = document.getElementById("requireHTTP");
  const link = requireHTTPS.querySelector("a");
  link.href = window.location.href.replace("http://", "https://");
  requireHTTPS.classList.remove("hidden");
}


if (window.self !== window.top) {
  const requireTopLevel = document.getElementById("requireTopLevel");
  const link = requireTopLevel.querySelector("a");
  link.href = window.location.href;
  requireTopLevel.classList.remove("hidden");
}


if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/service-worker.js')
    .then(function(registration) {
      console.log(
        'Service Worker registration successful with scope: ',
        registration.scope
      );
    })
    .catch(function(err) {
      console.log('Service Worker registration failed: ', err);
    });
}
const state = document.visibilityState;

document.addEventListener('visibilitychange', () => {
  console.log(document.visibilityState);
});
window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the mini-infobar from appearing on mobile.
  event.preventDefault();
  console.log('👍', 'beforeinstallprompt', event);
  // Stash the event so it can be triggered later.
  window.deferredPrompt = event;
  // Remove the 'hidden' class from the install button container.
  divInstall.classList.toggle('hidden', false);
});
