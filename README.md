# BMI-calculator

This project is a simple BMI (Body Mass Index) calculator built with HTML, CSS, and JavaScript. Users can input their height in meters and weight in kilograms, and the application calculates their BMI along with a corresponding weight category.

**Features:**

* User-friendly interface for entering height and weight.
* Calculates BMI based on the standard formula.
* Displays the calculated BMI and weight category.
* Lightweight and easy to understand code.

**Getting Started:**

1. **Download the files:** Clone or download the project repository to your local machine.
2. **Open the files:** Use a text editor or code editor to open the following files:
    * `index.html`: The main HTML file containing the webpage structure.
    * `styles.css`: The CSS file defining the styling of the elements.
    * `script.js`: The JavaScript file handling the user input and BMI calculation.
3. **Run the project:** Open `index.html` in your web browser to start the application.

**Project Structure:**

* **index.html:** This file defines the basic structure of the calculator. It includes input fields for height and weight, a button to trigger the calculation, and a section to display the BMI result and category. It also links the `styles.css` and `script.js` files for styling and functionality.
* **styles.css:** This file provides the visual design for the elements. It defines styles for the input fields, button, result section, and potentially other elements present in the `index.html` file.
* **script.js:** This file contains the JavaScript code that handles user interaction and BMI calculation. It retrieves the user's input from the height and weight fields, performs the BMI calculation using the formula `BMI = weight (kg) / (height (m))^2`, and updates the result section in the HTML with the calculated BMI and its corresponding weight category (e.g., underweight, normal weight, overweight, obese).

**Functionality:**

When users access the webpage, they will see input fields for height and weight labeled accordingly. They can enter their values in meters and kilograms, respectively. Clicking the "Calculate BMI" button triggers the JavaScript code. The script retrieves the user's input, performs the BMI calculation, and then dynamically updates the result section in the HTML. This section typically displays the calculated BMI value and a message indicating the user's weight category based on standard BMI ranges.

**Customization:**

* You can modify the design of the calculator by editing the styles in the `styles.css` file. 
* You can adjust the text displayed for user instructions and result messages by editing the `index.html` file.
* You can potentially add features like unit conversion options (e.g., convert meters to feet and kilograms to pounds) by extending the JavaScript code.

**Further Enhancements:**

* Implement error handling to ensure users enter valid numerical values for height and weight.
* Provide a brief explanation of BMI and its limitations as a health indicator.
* Add a visual representation of the BMI categories (e.g., a chart or color scale).

**Conclusion:**

This project demonstrates a practical use case for combining HTML, CSS, and JavaScript. It offers a basic BMI calculator that can be a helpful tool for understanding weight status. With further development, it can be enhanced to provide a more comprehensive and user-friendly experience. 
