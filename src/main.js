import "./css/index.css";
import Imask from "imask";

const ccBgColor01 = document.querySelector('.cc-bg svg > g g:nth-child(1) path');
const ccBgColor02 = document.querySelector('.cc-bg svg > g g:nth-child(2) path');
const ccLogo = document.querySelector('.cc-logo span:nth-child(2) img');

const colors = {
    visa: ["#436D99","#2D57F2"],
    mastercard: ["#C69347", "#DF6F29"],
    elo: ["#2F35BC", "#29DFDF"],
    hipercard: ["#BC2F51", "#DF29D8"],
    american: ["#29DF9E", "#2F70BC"],
    default: ["black", "gray"],
};


function setCardType(type) {
    ccBgColor01.setAttribute('fill', colors[type][0]);
    ccBgColor02.setAttribute('fill', colors[type][1]);
    ccLogo.setAttribute('src', `cc-${type}.svg`);
}

setCardType('elo');
const securityCode = document.querySelector('#security-code');
const securityCodePattern = {
  mask: "0000",
};
const securityCodeMasked = IMask(securityCode, securityCodePattern);


const expirationDate = document.querySelector('#expiration-date');
const expirationDatePattern = {
    mask: 'MM{/}YY',
    blocks: { 
        YY: {
            mask: Imask.MaskedRange,
            from: String(new Date().getFullYear()).slice(2),
            to: String(new Date().getFullYear() + 10).slice(2),
        },
        MM: {
            mask: Imask.MaskedRange,
            from: 1,
            to: 12,
        }
    },
}
const expirationDateMasked = Imask(expirationDate, expirationDatePattern);

const cardNumber = document.querySelector('#card-number');
const cardNumberPattern = {
    mask: [
        {
            mask: "0000 0000 0000 0000",
            regex: /^4\d{0,15}/,
            cardType: "visa",
        },
        {
            mask: "0000 0000 0000 0000",
            regex: /^4\d{0,15}/,
            cardType: "visa",
        },
        {
            mask: "0000 0000 0000 0000",
            regex: /^(5[1-5]\d{0,2}|22[2-9]\d{0,1}|2[3-7]\d{0,2})\d{0,12}/,
            cardType: "mastercard",
        },
        {
            mask: "0000 0000 0000 0000",
            cardType: "default",
        },
    ],
    dispatch: function(appended, dynamicMasked) {
        const number = (dynamicMasked.value + appended).replace(/\D/g, "");
        const foundMask = dynamicMasked.compiledMasks.find(function (item) {
            return number.match(item.regex)
        });
        console.log(foundMask)

        return foundMask
    }
}

const cardNumberMasked = Imask(cardNumber, cardNumberPattern);



