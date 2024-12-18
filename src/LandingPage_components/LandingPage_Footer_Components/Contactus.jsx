import { useState } from 'react';
import LandingPage_Header from '../LandingPage_Header';

export default function Contactus() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    Address: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/latest/contact-handler.php', {  // Correct path to the PHP handler
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        alert('Message sent successfully!');
        setFormData({
          name: '',
          age: '',
          email: '',
          Address: '',
          message: ''
        });
      } else {
        alert('Failed to send message: ' + result.message);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while sending the message.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <LandingPage_Header />
      
      <div className="max-w-md mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <h1 className="text-2xl font-bold text-slate-900 mb-6 text-center">Contact Us</h1>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  required
                  className="peer w-full px-4 py-2 border rounded-md focus:ring-1 focus:ring-slate-700 focus:border-slate-500 placeholder-transparent"
                  placeholder="Name"
                  id="name"
                  onChange={handleChange}
                  value={formData.name}
                />
                <label 
                  htmlFor="name"
                  className="absolute left-2 -top-2.5 bg-white px-1 text-sm text-gray-600 
                           transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                           peer-placeholder-shown:top-2 peer-placeholder-shown:left-4 
                           peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-slate-500"
                >
                  Name
                </label>
              </div>
            </div>

            {/* Age */}
            <div>
              <div className="relative">
                <input
                  type="number"
                  name="age"
                  required
                  className="peer w-full px-4 py-2 border rounded-md focus:ring-1 focus:ring-slate-700 focus:border-slate-500 placeholder-transparent"
                  placeholder="Age"
                  id="age"
                  min={18}
                  onChange={handleChange}
                  value={formData.age}
                />
                <label 
                  htmlFor="age"
                  className="absolute left-2 -top-2.5 bg-white px-1 text-sm text-gray-600 
                           transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                           peer-placeholder-shown:top-2 peer-placeholder-shown:left-4 
                           peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-slate-500"
                >
                  Age
                </label>
              </div>
            </div>

            {/* Email */}
            <div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  required
                  className="peer w-full px-4 py-2 border rounded-md focus:ring-1 focus:ring-slate-700 focus:border-slate-500 placeholder-transparent"
                  placeholder="Email"
                  id="email"
                  onChange={handleChange}
                  value={formData.email}
                />
                <label 
                  htmlFor="email"
                  className="absolute left-2 -top-2.5 bg-white px-1 text-sm text-gray-600 
                           transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                           peer-placeholder-shown:top-2 peer-placeholder-shown:left-4 
                           peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-slate-500"
                >
                  Email
                </label>
              </div>
            </div>

            {/* Address */}
            <div>
              <div className="relative">
                <input
                  type="text"
                  name="Address"
                  required
                  className="peer w-full px-4 py-2 border rounded-md focus:ring-1 focus:ring-slate-700 focus:border-slate-500 placeholder-transparent"
                  placeholder="Address"
                  id="Address"
                  onChange={handleChange}
                  value={formData.Address}
                />
                <label 
                  htmlFor="location"
                  className="absolute left-2 -top-2.5 bg-white px-1 text-sm text-gray-600 
                           transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                           peer-placeholder-shown:top-2 peer-placeholder-shown:left-4 
                           peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-slate-500"
                >
                  Address
                </label>
              </div>
            </div>

            {/* Message */}
            <div>
              <div className="relative">
                <textarea
                  name="message"
                  required
                  rows={3}
                  className="peer w-full px-4 py-2 border rounded-md focus:ring-1 focus:ring-slate-700 focus:border-slate-500 placeholder-transparent"
                  placeholder="Message"
                  id="message"
                  onChange={handleChange}
                  value={formData.message}
                />
                <label 
                  htmlFor="message"
                  className="absolute left-2 -top-2.5 bg-white px-1 text-sm text-gray-600 
                           transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
                           peer-placeholder-shown:top-2 peer-placeholder-shown:left-4 
                           peer-focus:-top-2.5 peer-focus:left-2 peer-focus:text-sm peer-focus:text-slate-500"
                >
                  Message
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-slate-800 text-white py-3 rounded-md hover:bg-slate-700 
                       transition-colors duration-200 mt-6"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
