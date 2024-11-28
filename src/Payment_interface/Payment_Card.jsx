import { useNavigate } from "react-router-dom";

export default function Payment_Card() {
  const navigate=useNavigate()
    const handleSubscription = async () => {
      const res = await fetch("https://suitable-jolly-falcon.ngrok-free.app/update_subscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "samplemail124@gmail.com", // Replace with the logged-in user's email
          subscription: true, // Set subscription to true
        }),
      });
  const data=await res.json()
  console.log(data)
      if (data.response=="Subscription updated successfully") {
        console.log("Subscription updated successfully!");
        // Redirect to the chatbot page
        navigate("/chatbot")
      } 
    };
  
    const handlePayment = async () => {
      const options = {
        key: "rzp_test_EoG198hIze0xRH", // Replace with your Razorpay Test Key ID
        amount: 500, // Amount in paise (500 = ₹5)
        currency: "USD", // Set the currency
        name: "Super Chat",
        description: "Monthly Subscription",
        image: "/logo.png", // Optional: Add your logo URL
        handler: async function (response) {
          console.log("Payment Successful", response);
          // Call the subscription API
          await handleSubscription();
        },
        prefill: {
          email: "aa@example.com", // Prefill the user's email
        },
        theme: {
          color: "#2C2C2C", // Match your app's theme
        },
        method: {
          netbanking: true, // Enable net banking
          card: true, // Enable card payments
          upi: true, // Enable UPI
          wallet: true, // Enable wallets like PayTM
          paylater: true, // Enable pay-later options
        },
      };
  
      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", function (response) {
        console.error("Payment Failed", response.error);
        alert("Payment failed. Please try again.");
      });
      rzp.open();
    };
  
    return (
      <div className="bg-[#2C2C2C] min-h-screen flex items-center justify-center">
        <div className="bg-[#2C2C2C] border border-gray-600 rounded-lg shadow-lg p-6 w-96 text-white">
          <div className="text-center mb-6">
            <h2 className="text-4xl font-bold">$5</h2>
            <p className="text-gray-400 text-sm">per month</p>
          </div>
          <button
            onClick={handlePayment}
            className="bg-white text-black py-2 px-4 rounded-full w-full text-center mb-6 transition-transform transform hover:scale-105"
          >
            Subscribe
          </button>
          <div className="space-y-4">
            <p className="text-center font-medium text-lg">
              Boost your productivity with AI
            </p>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <span className="text-green-500 font-bold">✔</span>
                <span>Everything in Free Plan</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-500 font-bold">✔</span>
                <span>Early access to new features</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
     