// Get the form and suggestion section from the HTML
const form = document.getElementById('weatherForm');
const suggestionSection = document.getElementById('suggestion');

// Listen for the form submission
form.addEventListener('submit', function(event) {
  // Prevent the page from reloading
  event.preventDefault();

  // Get the selected weather value
  const weatherSelect = document.getElementById('weather');
  const weather = weatherSelect.value;

  // Get the temperature value from the input
  const temperatureInput = document.getElementById('temperature');
  const temperature = Number(temperatureInput.value);

  // Create a variable for the suggestion message
  let message = '';

  // Check if weather is cloudy or rainy
  if (weather === 'cloudy' || weather === 'rainy') {
    // Suggest a light jacket for cloudy or rainy weather
    message = `It's ${weather}! A light jacket might be a good idea.`;
  } else if (weather === 'sunny') {
    // Suggest sunglasses and sunscreen for sunny weather
    message = `It's sunny! 😎 Don't forget your sunglasses and sunscreen. 🧴`;
  } else if (weather === 'snowy') {
    // Suggest warm clothes and boots for snowy weather
    message = `It's snowy! ❄️ Wear warm clothes and boots. 🧣🧤🥾`;
  } else if (weather === 'windy') {
    // Suggest a windbreaker for windy weather
    message = `It's windy! 💨 A windbreaker will help. 🧥`;
  } else {
    // If no weather is selected, ask the user to choose
    message = `Please select the weather to get a suggestion.`;
  }

  // Check if temperature is below 50°F and add a warm jacket suggestion
  if (!isNaN(temperature) && temperature < 50) {
    // Add a warm jacket suggestion to the message
    message = `${message} Don't forget a warm jacket! 🧥`;
  }

  // Show the suggestion message in the suggestion section
  suggestionSection.innerHTML = `<p>${message}</p>`;
});
