document.addEventListener('DOMContentLoaded', () => {
    const locationSelect = document.getElementById('location-select');
    const currentLocationBtn = document.getElementById('use-current-location');
    const resultsSection = document.getElementById('results');
  
    // Event: Use current location
    currentLocationBtn.addEventListener('click', () => {
      locationSelect.selectedIndex = 0;
      showLoading();
  
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          ({ coords }) => fetchSunData(coords.latitude, coords.longitude),
          (error) => showError(`Location error: ${error.message}`)
        );
      } else {
        showError('Geolocation is not supported by your browser.');
      }
    });
  
    // Event: Choose from dropdown
    locationSelect.addEventListener('change', () => {
      const selected = locationSelect.options[locationSelect.selectedIndex];
      const lat = selected.getAttribute('data-lat');
      const lng = selected.getAttribute('data-lng');
  
      if (lat && lng) {
        showLoading();
        fetchSunData(lat, lng);
      }
    });
  
    // Show loading message
    function showLoading() {
      resultsSection.innerHTML = `<p class="loading">Fetching sunrise and sunset data...</p>`;
    }
  
    // Show error message
    function showError(message) {
      resultsSection.innerHTML = `<p class="error">${message}</p>`;
      console.error(message);
    }
  
    // Fetch today's and tomorrow's data
    function fetchSunData(lat, lng) {
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(today.getDate() + 1);
  
      const todayStr = today.toISOString().split('T')[0];
      const tomorrowStr = tomorrow.toISOString().split('T')[0];
  
      const base = 'https://api.sunrisesunset.io/json';
      const todayUrl = `${base}?lat=${lat}&lng=${lng}&date=${todayStr}`;
      const tomorrowUrl = `${base}?lat=${lat}&lng=${lng}&date=${tomorrowStr}`;
  
      Promise.all([
        fetch(todayUrl).then((res) => res.json()),
        fetch(tomorrowUrl).then((res) => res.json())
      ])
        .then(([todayData, tomorrowData]) => {
          if (todayData.status === 'OK' && tomorrowData.status === 'OK') {
            displayResults(todayData.results, tomorrowData.results);
          } else {
            showError('API error: Could not retrieve data.');
          }
        })
        .catch((err) => showError(`Network error: ${err.message}`));
    }
  
    // Display data
    function displayResults(today, tomorrow) {
      resultsSection.classList.add('fade-in');
      resultsSection.innerHTML = `
        <div class="result-group result-today">
          <h2><i class="fas fa-sun"></i> Today</h2>
          <ul>
            <li><i class="fas fa-arrow-up"></i> <strong>Sunrise:</strong> ${today.sunrise}</li>
            <li><i class="fas fa-arrow-down"></i> <strong>Sunset:</strong> ${today.sunset}</li>
            <li><i class="fas fa-cloud-sun"></i> <strong>Dawn:</strong> ${today.dawn}</li>
            <li><i class="fas fa-cloud-moon"></i> <strong>Dusk:</strong> ${today.dusk}</li>
            <li><i class="fas fa-clock"></i> <strong>Day Length:</strong> ${today.day_length}</li>
            <li><i class="fas fa-compass"></i> <strong>Solar Noon:</strong> ${today.solar_noon}</li>
            <li><i class="fas fa-globe"></i> <strong>Timezone:</strong> ${today.timezone}</li>
          </ul>
        </div>
  
        <div class="result-group result-tomorrow">
          <h2><i class="fas fa-cloud-sun-rain"></i> Tomorrow</h2>
          <ul>
            <li><i class="fas fa-arrow-up"></i> <strong>Sunrise:</strong> ${tomorrow.sunrise}</li>
            <li><i class="fas fa-arrow-down"></i> <strong>Sunset:</strong> ${tomorrow.sunset}</li>
            <li><i class="fas fa-cloud-sun"></i> <strong>Dawn:</strong> ${tomorrow.dawn}</li>
            <li><i class="fas fa-cloud-moon"></i> <strong>Dusk:</strong> ${tomorrow.dusk}</li>
            <li><i class="fas fa-clock"></i> <strong>Day Length:</strong> ${tomorrow.day_length}</li>
            <li><i class="fas fa-compass"></i> <strong>Solar Noon:</strong> ${tomorrow.solar_noon}</li>
            <li><i class="fas fa-globe"></i> <strong>Timezone:</strong> ${tomorrow.timezone}</li>
          </ul>
        </div>
      `;
    }
  });
  