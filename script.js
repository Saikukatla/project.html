// Predefined vehicle data with insurance and PUC details (including random phone numbers for testing)
const vehicles = [
    {
        state_code: "AP",
        state: "Andhra pradesh",
        office_code: 1,
        office_name: "VIZAG",
        reg_no: "AP39JT0459",
        reg_date: "2020-02-13",
        purchase_date: "2020-01-30",
        owner_name: "JAGDISHKUMAR MANUBHAI RABARI",
        current_address_line1: "22, MALIPETA ",
        current_address_line2: "OPP.BUS STAND NEAR POST OFFICE",
        current_district_name: "AMRAVATHI",
        model: "TOUR S CNG",
        fuel_descr: "PETROL/CNG",
        color: "PEARL ARCTIC WHITE",
        manufacturing_yr: 2020,
        chassis_no: "MA3EJKD1S00C51332",
        engine_no: "K12MN2392205",
        insurance_details: {
            insurance_from: "2023-01-30",
            insurance_upto: "2025-01-29",
            insurance_company_name: "ICICI General Insurance Co. Ltd.",
            policy_no: "3004/MI-11805055/00/000"
        },
        pucc_details: {
            pucc_from: "27-03-2023",
            pucc_upto: "26-03-2024",
            pucc_no: "GJ01800840005727"
        },
        mobile_no: generateRandomPhoneNumber(),
        email_id: "jagdishkumar@example.com"
    },
    {
        state_code: "MH",
        state: "Maharashtra",
        office_code: 2,
        office_name: "MUMBAI",
        reg_no: "MH12JK0291",
        reg_date: "2021-01-12",
        purchase_date: "2021-01-01",
        owner_name: "PRIYANKA SHARMA",
        model: "SWIFT ZXI",
        fuel_descr: "PETROL",
        color: "MATT BLUE",
        manufacturing_yr: 2021,
        chassis_no: "MA3XJKD1T00ZB0192",
        engine_no: "K12MN2492330",
        insurance_details: {
            insurance_from: "2023-01-12",
            insurance_upto: "2025-01-11",
            insurance_company_name: "TATA AIG General Insurance",
            policy_no: "7845630037"
        },
        pucc_details: {
            pucc_from: "12-01-2023",
            pucc_upto: "11-01-2024",
            pucc_no: "MH121000194586"
        },
        mobile_no: generateRandomPhoneNumber(),
        email_id: "priyanka.sharma@example.com"
    },
    {
        state_code: "KA",
        state: "Karnataka",
        office_code: 3,
        office_name: "BANGALORE",
        reg_no: "KA03AB1000",
        reg_date: "2022-05-21",
        purchase_date: "2022-04-15",
        owner_name: "SANDEEP KUMAR",
        model: "HYUNDAI CRETA",
        fuel_descr: "DIESEL",
        color: "RED",
        manufacturing_yr: 2022,
        chassis_no: "MCA8G69G26D001234",
        engine_no: "B22D900007891",
        insurance_details: {
            insurance_from: "2023-05-01",
            insurance_upto: "2024-04-30",
            insurance_company_name: "Bajaj Allianz General Insurance",
            policy_no: "1004/MI-20230556/00/001"
        },
        pucc_details: {
            pucc_from: "10-06-2023",
            pucc_upto: "09-06-2025",
            pucc_no: "KA031234500000"
        },
        mobile_no: generateRandomPhoneNumber(),
        email_id: "sandeep.kumar@example.com"
    },
    {
        state_code: "TN",
        state: "Tamil Nadu",
        office_code: 4,
        office_name: "CHENNAI",
        reg_no: "TN10AB2022",
        reg_date: "2020-12-01",
        purchase_date: "2020-11-20",
        owner_name: "MANISHA RAVI",
        model: "MARUTI SUZUKI VITARA BREZZA",
        fuel_descr: "PETROL",
        color: "WHITE",
        manufacturing_yr: 2020,
        chassis_no: "MA3EGKD1S00A12568",
        engine_no: "MZWJ16235EC014879",
        insurance_details: {
            insurance_from: "2022-11-21",
            insurance_upto: "2023-11-20",
            insurance_company_name: "HDFC ERGO General Insurance",
            policy_no: "2547896702"
        },
        pucc_details: {
            pucc_from: "12-12-2023",
            pucc_upto: "11-12-2024",
            pucc_no: "TN101234567890"
        },
        mobile_no: generateRandomPhoneNumber(),
        email_id: "manisha.ravi@example.com"
    },
    {
        state_code: "DL",
        state: "Delhi",
        office_code: 5,
        office_name: "DELHI",
        reg_no: "DL12AB2021",
        reg_date: "2021-07-15",
        purchase_date: "2021-07-01",
        owner_name: "RAJESH KUMAR",
        model: "HONDA CITY",
        fuel_descr: "PETROL",
        color: "SILVER",
        manufacturing_yr: 2021,
        chassis_no: "MA1XJH888ASD12345",
        engine_no: "HJ9ASDFJ2098234",
        insurance_details: {
            insurance_from: "2021-08-01",
            insurance_upto: "2022-07-31",
            insurance_company_name: "New India Assurance",
            policy_no: "NI1234095876"
        },
        pucc_details: {
            pucc_from: "05-05-2023",
            pucc_upto: "04-05-2024",
            pucc_no: "DL120912021"
        },
        mobile_no: generateRandomPhoneNumber(),
        email_id: "rajesh.kumar@example.com"
    },
    {
        state_code: "RJ",
        state: "Rajasthan",
        office_code: 6,
        office_name: "JAIPUR",
        reg_no: "RJ14AB3456",
        reg_date: "2023-02-10",
        purchase_date: "2023-01-15",
        owner_name: "MAYUR SINGH",
        model: "TATA NEXON",
        fuel_descr: "PETROL",
        color: "BLUE",
        manufacturing_yr: 2023,
        chassis_no: "X4T8EJ1F190013654",
        engine_no: "TN34KJ5678DF",
        insurance_details: {
            insurance_from: "2023-02-15",
            insurance_upto: "2024-02-14",
            insurance_company_name: "Reliance General Insurance",
            policy_no: "RG1239876543"
        },
        pucc_details: {
            pucc_from: "15-03-2023",
            pucc_upto: "14-03-2024",
            pucc_no: "RJ14323243251"
        },
        mobile_no: generateRandomPhoneNumber(),
        email_id: "mayur.singh@example.com"
    }
];

// Function to generate random phone numbers for testing
function generateRandomPhoneNumber() {
    const prefix = ['7', '8', '9']; // India-specific phone number prefixes
    const randomPrefix = prefix[Math.floor(Math.random() * prefix.length)];
    const randomNumber = randomPrefix + Math.floor(Math.random() * 1000000000).toString().padStart(10, '0');
    return randomNumber;
}

// Function to format date in readable format
function formatDate(dateStr) {
    const date = new Date(dateStr);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
}

// Function to populate the dropdown with vehicles
function populateVehicleSelect() {
    const vehicleSelect = document.getElementById('vehicleSelect');
    vehicles.forEach(vehicle => {
        const option = document.createElement('option');
        option.value = vehicle.reg_no;
        option.textContent = ${vehicle.reg_no};
        vehicleSelect.appendChild(option);
    });
}

// Function to display selected vehicle details
function displaySelectedVehicle() {
    const regNumber = document.getElementById('vehicleSelect').value;
    const resultDiv = document.getElementById('vehicleDetails');
    resultDiv.innerHTML = ""; // Clear previous search result

    if (!regNumber) {
        resultDiv.style.display = "none";
        return;
    }

    // Find vehicle in the data
    const vehicle = vehicles.find(v => v.reg_no === regNumber);

    if (vehicle) {
        resultDiv.style.display = "block";
        resultDiv.innerHTML = `
            <p><strong>Vehicle Registration No:</strong> ${vehicle.reg_no}</p>
            <p><strong>State:</strong> ${vehicle.state}</p>
            <p><strong>Office Name:</strong> ${vehicle.office_name}</p>
            <p><strong>Model:</strong> ${vehicle.model}</p>
            <p><strong>Fuel Type:</strong> ${vehicle.fuel_descr}</p>
            <p><strong>Color:</strong> ${vehicle.color}</p>
            <p><strong>Manufacturing Year:</strong> ${vehicle.manufacturing_yr}</p>
            <p><strong>Chassis No:</strong> ${vehicle.chassis_no}</p>
            <p><strong>Engine No:</strong> ${vehicle.engine_no}</p>
            <p><strong>Email ID:</strong> ${vehicle.email_id}</p>
            <p><strong>Mobile No:</strong> ${vehicle.mobile_no}</p>
        `;

        // Validate Insurance and PUC Details
        validateInsuranceAndPUC(vehicle);
    } else {
        resultDiv.style.display = "none";
    }
}

// Function to validate Insurance and PUC
function validateInsuranceAndPUC(vehicle) {
    const today = new Date();
    const insuranceUpto = new Date(vehicle.insurance_details.insurance_upto);
    const puccUpto = new Date(vehicle.pucc_details.pucc_upto);

    const resultDiv = document.getElementById('vehicleDetails');

    let warningMessage = '';

    // Check if insurance is expired
    if (insuranceUpto < today) {
        warningMessage += <p style="color: red;"><strong><span>&#9888;</span> Warning:</strong> Insurance expired on ${formatDate(vehicle.insurance_details.insurance_upto)}. Please renew.</p>;
    } else {
        warningMessage += <p style="color: green;"><strong><span>&#10004;</span> Insurance is valid till:</strong> ${formatDate(vehicle.insurance_details.insurance_upto)}</p>;
    }

    // Check if PUC is expired
    if (puccUpto < today) {
        warningMessage += <p style="color: red;"><strong><span>&#9888;</span> Warning:</strong> PUC expired on ${formatDate(vehicle.pucc_details.pucc_upto)}. Please renew.</p>;
    } else {
        warningMessage += <p style="color: green;"><strong><span>&#10004;</span> PUCC is valid till:</strong> ${formatDate(vehicle.pucc_details.pucc_upto)}</p>;
    }

    resultDiv.innerHTML += warningMessage;
}

// Call the function to populate the dropdown when the page loads
populateVehicleSelect();
