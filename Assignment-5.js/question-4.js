//4.Create an object named customer with at least 5 keys (e.g., customerId, customerName, email, phoneNumbers, addresses). One of the keys should have an array as its value. Then, create a function that accepts this object in destructured format, prints all the information, and calls another function that will pass the key array into another function. Additionally, call a function that will pass the object as a key into another function and print all the keys.

const customer = {
    customerId: 1001,
    customerName: "Vishal",
    email: "Vishal8094253147@gmail.com",
    phoneNumbers: ["8094253147","9116995073"],
    addresses: ["kirti-sagar H-block","Hanumant vihar C-block"],
};

function printcustomer({customerId,customerName,email,phoneNumbers,addresses})
{
    console.log("customerInformation:");
    console.log(`CustomerId:${customerId}`);
    console.log(`CustomerName:${customerName}`);
    console.log(`email:${email}`);
    console.log(`PhoneNumbers:${phoneNumbers}`);
    console.log(`Addresses:${addresses}`);

    printPhoneNumbers(phoneNumbers);

    printKeys(customer);
}

function printPhoneNumbers(phoneNumbers)
{
    phoneNumbers.forEach(phoneNumber => console.log(phoneNumber));
}

function printKeys({customerId,customerName,email,phoneNumbers,addresses})
{
    console.log("CustomerId:",customerId);
    console.log("CustomerName:",customerName);
    console.log("email:",email);
    console.log("PhoneNumbers:",phoneNumbers);
    console.log("Addresses:",addresses);
}

printcustomer(customer);