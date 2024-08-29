function topFunction() {
  document.documentElement.scrollTop = 0; 
  }
const myAudio = document.getElementById("myAudio");

const delay = 200;
setTimeout(() => {
  myAudio.play();
}, delay);
const cornerImage = document.getElementById("cornerImage");
cornerImage.addEventListener('click', function() {
  window.location.href = 'https://812fd144-fef7-46ee-bb44-32bc4dcb15af-00-lfvbihkt6fpu.spock.replit.dev/';  
});
const decrementButtons = document.querySelectorAll('.decrement');
const incrementButtons = document.querySelectorAll('.increment');
const countElements = document.querySelectorAll('.count');
const totalElements = document.querySelectorAll('.total');
// Assume each product has a base value (you'll need to get these values from your data)
const productValues = [10, 20, 30]; // Replace with actual product values
decrementButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        let count = parseInt(countElements[index].textContent);
        if (count > 0) {
            count--;
            countElements[index].textContent = count;
            // Update total value for this product
            totalElements[index].textContent = (count * productValues[index]).toString();
        }
    });
});
incrementButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        let count = parseInt(countElements[index].textContent);
        count++;
        countElements[index].textContent = count;
        // Update total value for this product
        totalElements[index].textContent = (count * productValues[index]).toString();
    });
});