import axios from "axios";

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export function removeHyphensAndCapitalize(string) {
    return string.replace(/-/g, ' ').replace(/(^\w|\s\w)/g, m => m.toUpperCase())
}

export const sendEmail = (formData) =>  {
    const apiUrl = `https://0lhxh1k7v0.execute-api.us-east-1.amazonaws.com/1/sendEmail`;

    const requestData = formData;
    console.log('this is the request data');

    axios.post(apiUrl, requestData)
    .then((response) => {
        console.log('Email sent successfully:', response);
    })
    .catch((error) => {
      console.error('Error sending email:', error);
    });
}