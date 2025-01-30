 function capitalizeName() {
            if (typeof Cypress === 'undefined') { // Check if it's not running in Cypress
                var inputField = document.getElementById("fname");
                inputField.value = inputField.value.toUpperCase();
            }
        }

        // Attach the capitalizeName function to the input event
        document.getElementById("fname").addEventListener("input", capitalizeName);