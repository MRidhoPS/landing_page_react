"use client";

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/16/solid';
import { Field, Label, Switch } from '@headlessui/react';

export default function Contact() {
    const [agreed, setAgreed] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        company: '',
        email: '',
        phoneNumber: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { firstName, lastName, phoneNumber, message } = formData;

        if (!firstName || !lastName || !phoneNumber || !message) {
            alert('Please fill out all required fields.');
            return;
        }

        const whatsappUrl = `https://wa.me/6289629656884?text=${encodeURIComponent(
            `Name: ${firstName} ${lastName}\nPhone: ${phoneNumber}\nMessage: ${message}`
        )}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div
                aria-hidden="true"
                className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
            >
                <div
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                    className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                />
            </div>
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">Contact sales</h2>
                <p className="mt-2 text-lg/8 text-gray-600">Aute magna irure deserunt veniam aliqua magna enim voluptate.</p>
            </div>
            <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <label htmlFor="firstName" className="block text-sm/6 font-semibold text-gray-900">
                            First name
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="firstName"
                                name="firstName"
                                type="text"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block text-sm/6 font-semibold text-gray-900">
                            Last name
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="lastName"
                                name="lastName"
                                type="text"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="company" className="block text-sm/6 font-semibold text-gray-900">
                            Company
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="company"
                                name="company"
                                type="text"
                                value={formData.company}
                                onChange={handleChange}
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">
                            Email
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="phoneNumber" className="block text-sm/6 font-semibold text-gray-900">
                            Phone number
                        </label>
                        <div className="mt-2.5">
                            <input
                                id="phoneNumber"
                                name="phoneNumber"
                                type="text"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            />
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm/6 font-semibold text-gray-900">
                            Message
                        </label>
                        <div className="mt-2.5">
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                            />
                        </div>
                    </div>
                    <Field className="flex gap-x-4 sm:col-span-2">
                        <div className="flex h-6 items-center">
                            <Switch
                                checked={agreed}
                                onChange={setAgreed}
                                className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-[checked]:bg-indigo-600"
                            >
                                <span className="sr-only">Agree to policies</span>
                                <span
                                    aria-hidden="true"
                                    className="size-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                                />
                            </Switch>
                        </div>
                        <Label className="text-sm/6 text-gray-600">
                            By selecting this, you agree to our{' '}
                            <a href="#" className="font-semibold text-indigo-600">
                                privacy&nbsp;policy
                            </a>
                            .
                        </Label>
                    </Field>
                </div>
                <div className="mt-10">
                    <button
                        type="submit"
                        className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Send via WhatsApp
                    </button>
                </div>
            </form>
        </div>
    );
}

// import React, { useState } from 'react';

// const ContactForm = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         phone: '',
//         message: '',
//     });

//     const personalWhatsAppNumber = '6289629656884'; // Replace with your WhatsApp number (without '+')

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({ ...prev, [name]: value }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const { name, phone, message } = formData;

//         // Ensure all fields are filled
//         if (!name || !phone || !message) {
//             alert('Please fill in all fields!');
//             return;
//         }

//         // Construct the WhatsApp URL
//         const whatsappURL = `https://wa.me/${personalWhatsAppNumber}?text=${encodeURIComponent(
//             `Hello! My name is ${name}. My phone number is ${phone}. Message: ${message}`
//         )}`;

//         // Redirect to WhatsApp
//         window.open(whatsappURL, '_blank');
//     };

//     return (
//         <div style={{ maxWidth: '500px', margin: '0 auto' }}>
//             <h2>Contact Us</h2>
//             <form onSubmit={handleSubmit}>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label htmlFor="name">Name:</label>
//                     <input
//                         type="text"
//                         id="name"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         style={{ width: '100%', padding: '8px' }}
//                     />
//                 </div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label htmlFor="phone">Phone:</label>
//                     <input
//                         type="text"
//                         id="phone"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         style={{ width: '100%', padding: '8px' }}
//                     />
//                 </div>
//                 <div style={{ marginBottom: '15px' }}>
//                     <label htmlFor="message">Message:</label>
//                     <textarea
//                         id="message"
//                         name="message"
//                         value={formData.message}
//                         onChange={handleChange}
//                         style={{ width: '100%', padding: '8px', height: '100px' }}
//                     />
//                 </div>
//                 <button
//                     type="submit"
//                     style={{
//                         backgroundColor: '#25D366',
//                         color: 'white',
//                         border: 'none',
//                         padding: '10px 20px',
//                         cursor: 'pointer',
//                     }}
//                 >
//                     Send to WhatsApp
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default ContactForm;
