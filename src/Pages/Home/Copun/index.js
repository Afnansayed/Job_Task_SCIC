

 export const handleCouponCopy = () => {
    const couponButtons = document.querySelectorAll('.couponBtn');
    couponButtons.forEach((button) => {
        button.addEventListener('click', (event) => {
            const couponCode = event.target.previousElementSibling.innerText; // Get the coupon code from the sibling
            navigator.clipboard.writeText(couponCode)
                .then(() => {
                    button.innerHTML = 'copied';
                    setTimeout(() => {
                        button.innerHTML = 'copy code';
                    }, 3000);
                })
                .catch((err) => {
                    console.error('Failed to copy: ', err);
                });
        });
    });
};

export default handleCouponCopy;
// const cpnBtn2 = document.getElementById('couponBtn2');
// const cpnCode2 = document.getElementById('couponCode2');

// cpnBtn2.onclick = () => {
//     navigator.clipboard.writeText(cpnCode2.innerHTML);
//     cpnBtn2.innerHTML = 'copied';
//     setTimeout(() =>{
//         cpnBtn2.innerHTML = 'copy code';
//     },3000)
// }