document.getElementById('reachedDestination').addEventListener('click', function() {
    
    alert('Have a great day, the world can be a better place like today, let\'s stay hopeful :)');
    
    window.location.href = 'login.html';
});

let timer;
document.getElementById('setTiming').addEventListener('click', function() {
    let timePeriod = prompt('Enter time period in minutes:');
    if (timePeriod) {
        timePeriod = parseInt(timePeriod) * 60 * 1000; 
        timer = setInterval(function() {
            let confirmResponse = confirm('Are you doing well there?');
            let historyDiv = document.getElementById('history');
            let newHistory = document.createElement('div');
            newHistory.textContent = `Checked at ${new Date().toLocaleTimeString()} - Response: ${confirmResponse ? 'Yes' : 'No'}`;
            historyDiv.appendChild(newHistory);
        }, timePeriod);
    }
});

document.getElementById('reachedDestination').addEventListener('click', function() {
    clearInterval(timer); 
});

document.getElementById('panicButton').addEventListener('click', function() {
    alert('Alerting the contacts');

function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(checkWarningZone, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}
const WARNING_ZONE_CENTER = { lat: 16.5679931, lng: 81.5228033 }; 
const WARNING_ZONE_RADIUS = 1000;
function checkWarningZone(position) {
    let userLat = position.coords.latitude;
    let userLng = position.coords.longitude;
        
    let distance = getDistanceFromLatLonInKm(userLat, userLng, WARNING_ZONE_CENTER.lat, WARNING_ZONE_CENTER.lng);
        
    if (distance < WARNING_ZONE_RADIUS / 1000) { 
        sendPushNotification();
    }
}
    
function sendPushNotification() {
        
    alert("Careful!! Entering Red Zone"); 
}
function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}

getUserLocation();

    
   
});
