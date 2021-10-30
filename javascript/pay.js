/*---------------- Payment Script Api ------------*/

const paymentForm = document.getElementById("paymentForm");
paymentForm.addEventListener("submit", payWithPaystack, false);
function payWithPaystack(e) {
  e.preventDefault();
  let handler = PaystackPop.setup({
    key: "pk_test_70b47e4f323d86398d9c4de79cf219721e9def55", // public key
    name: document.getElementById("last-name" && "first-name").value,
    email: document.getElementById("email-address").value,
    amount: 1500,
    currency: "GHS",
    ref: "" + Math.floor(Math.random() * 1000000000 + 1),

    onClose: function () {
      alert("Window closed.");
    },
    callback: function (response) {
      const referenced = response.reference;
      window.location.href = "/success.html";
    },
  });
  handler.openIframe();
}
