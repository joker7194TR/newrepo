        function toggleFields() {
            const cleaningType = document.getElementById("cleaningType").value;
            const residentialFields = document.getElementById("residentialFields");
            const commercialFields = document.getElementById("commercialFields");

            residentialFields.style.display = cleaningType === "residential" ? "block" : "none";
            commercialFields.style.display = cleaningType === "commercial" ? "block" : "none";
        }

        function calculatePrice() {
            // Prices per cleaning type and option
            const prices = {
                residential: {
                    basic: 50,
                    deep: 100,
                    premium: 150
                },
                commercial: {
                    basic: 80,
                    deep: 120,
                    premium: 200
                }
            };

            // Get user input
            const cleaningType = document.getElementById("cleaningType").value;

            let area, bedrooms, bathrooms, additionalServicesTotal = 0;
            let cleaningOption;
            let totalPrice;

            if (cleaningType === "residential") {
                area = parseInt(document.getElementById("residentialArea").value, 10);
                bedrooms = parseInt(document.getElementById("bedrooms").value, 10);
                bathrooms = parseInt(document.getElementById("bathrooms").value, 10);

                // Calculate additional services cost
                const additionalServices = document.querySelectorAll("#residentialFields input[type='checkbox']:checked");
                additionalServices.forEach(service => {
                    additionalServicesTotal += parseFloat(service.value || 0);
                });

                // Get residential cleaning option
                cleaningOption = document.getElementById("residentialCleaningOption").value;

                // Calculate total price for residential
                totalPrice = prices.residential[cleaningOption] + (area * 0.05) + (bedrooms * 10) + (bathrooms * 5) + additionalServicesTotal;

                // Display result
                const resultElement = document.getElementById("resultResidential");
                resultElement.textContent = `$${totalPrice.toFixed(2)}`;
            } else {
                area = parseInt(document.getElementById("commercialArea").value, 10);

                // Calculate additional services cost
                const additionalServices = document.querySelectorAll("#commercialFields input[type='checkbox']:checked");
                additionalServices.forEach(service => {
                    additionalServicesTotal += parseFloat(service.value || 0);
                });

                // Get commercial cleaning option
                cleaningOption = document.getElementById("commercialCleaningOption").value;

                // Calculate total price for commercial
                totalPrice = prices.commercial[cleaningOption] + (area * 0.05) + additionalServicesTotal;

                // Display result
                const resultElement = document.getElementById("resultComertial");
                resultElement.textContent = `$${totalPrice.toFixed(2)}`;
            }

            // Display result
            // const resultElement = document.getElementById("result");
            // resultElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
        }

        // Update square footage output
        document.getElementById("residentialArea").addEventListener("input", function() {
            document.getElementById("residentialAreaOutput").textContent = `${this.value} sq ft`;
        });

        document.getElementById("commercialArea").addEventListener("input", function() {
            document.getElementById("commercialAreaOutput").textContent = `${this.value} sq ft`;
        });