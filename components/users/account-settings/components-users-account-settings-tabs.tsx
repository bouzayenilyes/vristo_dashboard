'use client';
import IconDollarSignCircle from '@/components/icon/icon-dollar-sign-circle';
import IconFacebook from '@/components/icon/icon-facebook';
import IconGithub from '@/components/icon/icon-github';
import IconHome from '@/components/icon/icon-home';
import IconLinkedin from '@/components/icon/icon-linkedin';
import IconPhone from '@/components/icon/icon-phone';
import IconTwitter from '@/components/icon/icon-twitter';
import IconUser from '@/components/icon/icon-user';
import React, { useState } from 'react';

const ComponentsUsersAccountSettingsTabs = () => {
    const [tabs, setTabs] = useState<string>('home');
    const toggleTabs = (name: string) => {
        setTabs(name);
    };

    return (
        <div className="pt-5">
            <div className="mb-5 flex items-center justify-between">
                <h5 className="text-lg font-semibold dark:text-white-light">Settings</h5>
            </div>
            <div>
                <ul className="mb-5 overflow-y-auto whitespace-nowrap border-b border-[#ebedf2] font-semibold dark:border-[#191e3a] sm:flex">
                    <li className="inline-block">
                        <button
                            onClick={() => toggleTabs('home')}
                            className={`flex gap-2 border-b border-transparent p-4 hover:border-primary hover:text-primary ${tabs === 'home' ? '!border-primary text-primary' : ''}`}
                        >
                            <IconHome />
                            Home
                        </button>
                    </li>
                    <li className="inline-block">
                        <button
                            onClick={() => toggleTabs('payment-details')}
                            className={`flex gap-2 border-b border-transparent p-4 hover:border-primary hover:text-primary ${tabs === 'payment-details' ? '!border-primary text-primary' : ''}`}
                        >
                            <IconDollarSignCircle />
                            Payment Details
                        </button>
                    </li>
                    <li className="inline-block">
                        <button
                            onClick={() => toggleTabs('preferences')}
                            className={`flex gap-2 border-b border-transparent p-4 hover:border-primary hover:text-primary ${tabs === 'preferences' ? '!border-primary text-primary' : ''}`}
                        >
                            <IconUser className="h-5 w-5" />
                            Preferences
                        </button>
                    </li>
                    <li className="inline-block">
                        <button
                            onClick={() => toggleTabs('danger-zone')}
                            className={`flex gap-2 border-b border-transparent p-4 hover:border-primary hover:text-primary ${tabs === 'danger-zone' ? '!border-primary text-primary' : ''}`}
                        >
                            <IconPhone />
                            Danger Zone
                        </button>
                    </li>
                </ul>
            </div>
            {tabs === 'home' ? (
                <div>
                    <form className="mb-5 rounded-md border border-[#ebedf2] bg-white p-4 dark:border-[#191e3a] dark:bg-black">
                        <h6 className="mb-5 text-lg font-bold">General Information</h6>
                        <div className="flex flex-col sm:flex-row">
                            <div className="mb-5 w-full sm:w-2/12 ltr:sm:mr-4 rtl:sm:ml-4">
                                <img src="/assets//images/profile-34.jpeg" alt="img" className="mx-auto h-20 w-20 rounded-full object-cover md:h-32 md:w-32" />
                            </div>
                            <div className="grid flex-1 grid-cols-1 gap-5 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="name">Full Name</label>
                                    <input id="name" type="text" placeholder="Jimmy Turner" className="form-input" />
                                </div>
                                <div>
                                    <label htmlFor="profession">Profession</label>
                                    <input id="profession" type="text" placeholder="Web Developer" className="form-input" />
                                </div>
                                <div>
                                    <label htmlFor="country">Country</label>
                                    <select id="country" className="form-select text-white-dark" name="country" defaultValue="United States">
                                        <option value="All Countries">All Countries</option>
                                        <option value="United States">United States</option>
                                        <option value="India">India</option>
                                        <option value="Japan">Japan</option>
                                        <option value="China">China</option>
                                        <option value="Brazil">Brazil</option>
                                        <option value="Norway">Norway</option>
                                        <option value="Canada">Canada</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="address">Address</label>
                                    <input id="address" type="text" placeholder="New York" className="form-input" />
                                </div>
                                <div>
                                    <label htmlFor="location">Location</label>
                                    <input id="location" type="text" placeholder="Location" className="form-input" />
                                </div>
                                <div>
                                    <label htmlFor="phone">Phone</label>
                                    <input id="phone" type="text" placeholder="+1 (530) 555-12121" className="form-input" />
                                </div>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input id="email" type="email" placeholder="Jimmy@gmail.com" className="form-input" />
                                </div>
                                <div>
                                    <label htmlFor="web">Website</label>
                                    <input id="web" type="text" placeholder="Enter URL" className="form-input" />
                                </div>
                                <div>
                                    <label className="inline-flex cursor-pointer">
                                        <input type="checkbox" className="form-checkbox" />
                                        <span className="relative text-white-dark checked:bg-none">Make this my default address</span>
                                    </label>
                                </div>
                                <div className="mt-3 sm:col-span-2">
                                    <button type="button" className="btn btn-primary">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <form className="rounded-md border border-[#ebedf2] bg-white p-4 dark:border-[#191e3a] dark:bg-black">
                        <h6 className="mb-5 text-lg font-bold">Social</h6>
                        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                            <div className="flex">
                                <div className="flex items-center justify-center rounded bg-[#eee] px-3 font-semibold ltr:mr-2 rtl:ml-2 dark:bg-[#1b2e4b]">
                                    <IconLinkedin className="h-5 w-5" />
                                </div>
                                <input type="text" placeholder="jimmy_turner" className="form-input" />
                            </div>
                            <div className="flex">
                                <div className="flex items-center justify-center rounded bg-[#eee] px-3 font-semibold ltr:mr-2 rtl:ml-2 dark:bg-[#1b2e4b]">
                                    <IconTwitter className="h-5 w-5" />
                                </div>
                                <input type="text" placeholder="jimmy_turner" className="form-input" />
                            </div>
                            <div className="flex">
                                <div className="flex items-center justify-center rounded bg-[#eee] px-3 font-semibold ltr:mr-2 rtl:ml-2 dark:bg-[#1b2e4b]">
                                    <IconFacebook className="h-5 w-5" />
                                </div>
                                <input type="text" placeholder="jimmy_turner" className="form-input" />
                            </div>
                            <div className="flex">
                                <div className="flex items-center justify-center rounded bg-[#eee] px-3 font-semibold ltr:mr-2 rtl:ml-2 dark:bg-[#1b2e4b]">
                                    <IconGithub />
                                </div>
                                <input type="text" placeholder="jimmy_turner" className="form-input" />
                            </div>
                        </div>
                    </form>
                </div>
            ) : (
                ''
            )}
            {tabs === 'payment-details' ? (
                <div>
                    <div className="mb-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
                        <div className="panel">
                            <div className="mb-5">
                                <h5 className="mb-4 text-lg font-semibold">Billing Address</h5>
                                <p>
                                    Changes to your <span className="text-primary">Billing</span> information will take effect starting with scheduled payment and will be refelected on your next
                                    invoice.
                                </p>
                            </div>
                            <div className="mb-5">
                                <div className="border-b border-[#ebedf2] dark:border-[#1b2e4b]">
                                    <div className="flex items-start justify-between py-3">
                                        <h6 className="text-[15px] font-bold text-[#515365] dark:text-white-dark">
                                            Address #1
                                            <span className="mt-1 block text-xs font-normal text-white-dark dark:text-white-light">2249 Caynor Circle, New Brunswick, New Jersey</span>
                                        </h6>
                                        <div className="flex items-start justify-between ltr:ml-auto rtl:mr-auto">
                                            <button className="btn btn-dark">Edit</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-b border-[#ebedf2] dark:border-[#1b2e4b]">
                                    <div className="flex items-start justify-between py-3">
                                        <h6 className="text-[15px] font-bold text-[#515365] dark:text-white-dark">
                                            Address #2
                                            <span className="mt-1 block text-xs font-normal text-white-dark dark:text-white-light">4262 Leverton Cove Road, Springfield, Massachusetts</span>
                                        </h6>
                                        <div className="flex items-start justify-between ltr:ml-auto rtl:mr-auto">
                                            <button className="btn btn-dark">Edit</button>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-start justify-between py-3">
                                        <h6 className="text-[15px] font-bold text-[#515365] dark:text-white-dark">
                                            Address #3
                                            <span className="mt-1 block text-xs font-normal text-white-dark dark:text-white-light">2692 Berkshire Circle, Knoxville, Tennessee</span>
                                        </h6>
                                        <div className="flex items-start justify-between ltr:ml-auto rtl:mr-auto">
                                            <button className="btn btn-dark">Edit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-primary">Add Address</button>
                        </div>
                        <div className="panel">
                            <div className="mb-5">
                                <h5 className="mb-4 text-lg font-semibold">Payment History</h5>
                                <p>
                                    Changes to your <span className="text-primary">Payment Method</span> information will take effect starting with scheduled payment and will be refelected on your
                                    next invoice.
                                </p>
                            </div>
                            <div className="mb-5">
                                <div className="border-b border-[#ebedf2] dark:border-[#1b2e4b]">
                                    <div className="flex items-start justify-between py-3">
                                        <div className="flex-none ltr:mr-4 rtl:ml-4">
                                            <img src="/assets/images/card-americanexpress.svg" alt="img" />
                                        </div>
                                        <h6 className="text-[15px] font-bold text-[#515365] dark:text-white-dark">
                                            Mastercard
                                            <span className="mt-1 block text-xs font-normal text-white-dark dark:text-white-light">XXXX XXXX XXXX 9704</span>
                                        </h6>
                                        <div className="flex items-start justify-between ltr:ml-auto rtl:mr-auto">
                                            <button className="btn btn-dark">Edit</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-b border-[#ebedf2] dark:border-[#1b2e4b]">
                                    <div className="flex items-start justify-between py-3">
                                        <div className="flex-none ltr:mr-4 rtl:ml-4">
                                            <img src="/assets/images/card-mastercard.svg" alt="img" />
                                        </div>
                                        <h6 className="text-[15px] font-bold text-[#515365] dark:text-white-dark">
                                            American Express
                                            <span className="mt-1 block text-xs font-normal text-white-dark dark:text-white-light">XXXX XXXX XXXX 310</span>
                                        </h6>
                                        <div className="flex items-start justify-between ltr:ml-auto rtl:mr-auto">
                                            <button className="btn btn-dark">Edit</button>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-start justify-between py-3">
                                        <div className="flex-none ltr:mr-4 rtl:ml-4">
                                            <img src="/assets/images/card-visa.svg" alt="img" />
                                        </div>
                                        <h6 className="text-[15px] font-bold text-[#515365] dark:text-white-dark">
                                            Visa
                                            <span className="mt-1 block text-xs font-normal text-white-dark dark:text-white-light">XXXX XXXX XXXX 5264</span>
                                        </h6>
                                        <div className="flex items-start justify-between ltr:ml-auto rtl:mr-auto">
                                            <button className="btn btn-dark">Edit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="btn btn-primary">Add Payment Method</button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                        <div className="panel">
                            <div className="mb-5">
                                <h5 className="mb-4 text-lg font-semibold">Add Billing Address</h5>
                                <p>
                                    Changes your New <span className="text-primary">Billing</span> Information.
                                </p>
                            </div>
                            <div className="mb-5">
                                <form>
                                    <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        <div>
                                            <label htmlFor="billingName">Name</label>
                                            <input id="billingName" type="text" placeholder="Enter Name" className="form-input" />
                                        </div>
                                        <div>
                                            <label htmlFor="billingEmail">Email</label>
                                            <input id="billingEmail" type="email" placeholder="Enter Email" className="form-input" />
                                        </div>
                                    </div>
                                    <div className="mb-5">
                                        <label htmlFor="billingAddress">Address</label>
                                        <input id="billingAddress" type="text" placeholder="Enter Address" className="form-input" />
                                    </div>
                                    <div className="mb-5 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
                                        <div className="md:col-span-2">
                                            <label htmlFor="billingCity">City</label>
                                            <input id="billingCity" type="text" placeholder="Enter City" className="form-input" />
                                        </div>
                                        <div>
                                            <label htmlFor="billingState">State</label>
                                            <select id="billingState" className="form-select text-white-dark">
                                                <option>Choose...</option>
                                                <option>...</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="billingZip">Zip</label>
                                            <input id="billingZip" type="text" placeholder="Enter Zip" className="form-input" />
                                        </div>
                                    </div>
                                    <button type="button" className="btn btn-primary">
                                        Add
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="panel">
                            <div className="mb-5">
                                <h5 className="mb-4 text-lg font-semibold">Add Payment Method</h5>
                                <p>
                                    Changes your New <span className="text-primary">Payment Method </span>
                                    Information.
                                </p>
                            </div>
                            <div className="mb-5">
                                <form>
                                    <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        <div>
                                            <label htmlFor="payBrand">Card Brand</label>
                                            <select id="payBrand" className="form-select text-white-dark">
                                                <option value="Mastercard">Mastercard</option>
                                                <option value="American Express">American Express</option>
                                                <option value="Visa">Visa</option>
                                                <option value="Discover">Discover</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="payNumber">Card Number</label>
                                            <input id="payNumber" type="text" placeholder="Card Number" className="form-input" />
                                        </div>
                                    </div>
                                    <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        <div>
                                            <label htmlFor="payHolder">Holder Name</label>
                                            <input id="payHolder" type="text" placeholder="Holder Name" className="form-input" />
                                        </div>
                                        <div>
                                            <label htmlFor="payCvv">CVV/CVV2</label>
                                            <input id="payCvv" type="text" placeholder="CVV" className="form-input" />
                                        </div>
                                    </div>
                                    <div className="mb-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                        <div>
                                            <label htmlFor="payExp">Card Expiry</label>
                                            <input id="payExp" type="text" placeholder="Card Expiry" className="form-input" />
                                        </div>
                                    </div>
                                    <button type="button" className="btn btn-primary">
                                        Add
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                ''
            )}
            {tabs === 'preferences' ? (
                <div className="switch">
                    <div className="mb-5 grid grid-cols-1 gap-5 lg:grid-cols-2">
                        <div className="panel space-y-5">
                            <h5 className="mb-4 text-lg font-semibold">Choose Theme</h5>
                            <div className="flex justify-around">
                                <div className="flex">
                                    <label className="inline-flex cursor-pointer">
                                        <input className="form-radio cursor-pointer ltr:mr-4 rtl:ml-4" type="radio" name="flexRadioDefault" defaultChecked />
                                        <span>
                                            <img className="ms-3" width="100" height="68" alt="settings-dark" src="/assets/images/settings-light.svg" />
                                        </span>
                                    </label>
                                </div>

                                <label className="inline-flex cursor-pointer">
                                    <input className="form-radio cursor-pointer ltr:mr-4 rtl:ml-4" type="radio" name="flexRadioDefault" />
                                    <span>
                                        <img className="ms-3" width="100" height="68" alt="settings-light" src="/assets/images/settings-dark.svg" />
                                    </span>
                                </label>
                            </div>
                        </div>
                        <div className="panel space-y-5">
                            <h5 className="mb-4 text-lg font-semibold">Activity data</h5>
                            <p>Download your Summary, Task and Payment History Data</p>
                            <button type="button" className="btn btn-primary">
                                Download Data
                            </button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                        <div className="panel space-y-5">
                            <h5 className="mb-4 text-lg font-semibold">Public Profile</h5>
                            <p>
                                Your <span className="text-primary">Profile</span> will be visible to anyone on the network.
                            </p>
                            <label className="relative h-6 w-12">
                                <input type="checkbox" className="custom_switch peer absolute z-10 h-full w-full cursor-pointer opacity-0" id="custom_switch_checkbox1" />
                                <span className="block h-full rounded-full bg-[#ebedf2] before:absolute before:bottom-1 before:left-1 before:h-4 before:w-4 before:rounded-full before:bg-white before:transition-all before:duration-300 peer-checked:bg-primary peer-checked:before:left-7 dark:bg-dark dark:before:bg-white-dark dark:peer-checked:before:bg-white"></span>
                            </label>
                        </div>
                        <div className="panel space-y-5">
                            <h5 className="mb-4 text-lg font-semibold">Show my email</h5>
                            <p>
                                Your <span className="text-primary">Email</span> will be visible to anyone on the network.
                            </p>
                            <label className="relative h-6 w-12">
                                <input type="checkbox" className="custom_switch peer absolute z-10 h-full w-full cursor-pointer opacity-0" id="custom_switch_checkbox2" />
                                <span className="block h-full rounded-full bg-[#ebedf2] before:absolute before:bottom-1 before:left-1 before:h-4  before:w-4 before:rounded-full before:bg-white before:transition-all before:duration-300 peer-checked:bg-primary peer-checked:before:left-7 dark:bg-dark dark:before:bg-white-dark dark:peer-checked:before:bg-white"></span>
                            </label>
                        </div>
                        <div className="panel space-y-5">
                            <h5 className="mb-4 text-lg font-semibold">Enable keyboard shortcuts</h5>
                            <p>
                                When enabled, press <span className="text-primary">ctrl</span> for help
                            </p>
                            <label className="relative h-6 w-12">
                                <input type="checkbox" className="custom_switch peer absolute z-10 h-full w-full cursor-pointer opacity-0" id="custom_switch_checkbox3" />
                                <span className="block h-full rounded-full bg-[#ebedf2] before:absolute before:bottom-1 before:left-1 before:h-4  before:w-4 before:rounded-full before:bg-white before:transition-all before:duration-300 peer-checked:bg-primary peer-checked:before:left-7 dark:bg-dark dark:before:bg-white-dark dark:peer-checked:before:bg-white"></span>
                            </label>
                        </div>
                        <div className="panel space-y-5">
                            <h5 className="mb-4 text-lg font-semibold">Hide left navigation</h5>
                            <p>
                                Sidebar will be <span className="text-primary">hidden</span> by default
                            </p>
                            <label className="relative h-6 w-12">
                                <input type="checkbox" className="custom_switch peer absolute z-10 h-full w-full cursor-pointer opacity-0" id="custom_switch_checkbox4" />
                                <span className="block h-full rounded-full bg-[#ebedf2] before:absolute before:bottom-1 before:left-1 before:h-4  before:w-4 before:rounded-full before:bg-white before:transition-all before:duration-300 peer-checked:bg-primary peer-checked:before:left-7 dark:bg-dark dark:before:bg-white-dark dark:peer-checked:before:bg-white"></span>
                            </label>
                        </div>
                        <div className="panel space-y-5">
                            <h5 className="mb-4 text-lg font-semibold">Advertisements</h5>
                            <p>
                                Display <span className="text-primary">Ads</span> on your dashboard
                            </p>
                            <label className="relative h-6 w-12">
                                <input type="checkbox" className="custom_switch peer absolute z-10 h-full w-full cursor-pointer opacity-0" id="custom_switch_checkbox5" />
                                <span className="block h-full rounded-full bg-[#ebedf2] before:absolute before:bottom-1 before:left-1 before:h-4  before:w-4 before:rounded-full before:bg-white before:transition-all before:duration-300 peer-checked:bg-primary peer-checked:before:left-7 dark:bg-dark dark:before:bg-white-dark dark:peer-checked:before:bg-white"></span>
                            </label>
                        </div>
                        <div className="panel space-y-5">
                            <h5 className="mb-4 text-lg font-semibold">Social Profile</h5>
                            <p>
                                Enable your <span className="text-primary">social</span> profiles on this network
                            </p>
                            <label className="relative h-6 w-12">
                                <input type="checkbox" className="custom_switch peer absolute z-10 h-full w-full cursor-pointer opacity-0" id="custom_switch_checkbox6" />
                                <span className="block h-full rounded-full bg-[#ebedf2] before:absolute before:bottom-1 before:left-1 before:h-4  before:w-4 before:rounded-full before:bg-white before:transition-all before:duration-300 peer-checked:bg-primary peer-checked:before:left-7 dark:bg-dark dark:before:bg-white-dark dark:peer-checked:before:bg-white"></span>
                            </label>
                        </div>
                    </div>
                </div>
            ) : (
                ''
            )}
            {tabs === 'danger-zone' ? (
                <div className="switch">
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                        <div className="panel space-y-5">
                            <h5 className="mb-4 text-lg font-semibold">Purge Cache</h5>
                            <p>Remove the active resource from the cache without waiting for the predetermined cache expiry time.</p>
                            <button className="btn btn-secondary">Clear</button>
                        </div>
                        <div className="panel space-y-5">
                            <h5 className="mb-4 text-lg font-semibold">Deactivate Account</h5>
                            <p>You will not be able to receive messages, notifications for up to 24 hours.</p>
                            <label className="relative h-6 w-12">
                                <input type="checkbox" className="custom_switch peer absolute z-10 h-full w-full cursor-pointer opacity-0" id="custom_switch_checkbox7" />
                                <span className="block h-full rounded-full bg-[#ebedf2] before:absolute before:bottom-1 before:left-1 before:h-4 before:w-4 before:rounded-full before:bg-white before:transition-all before:duration-300 peer-checked:bg-primary peer-checked:before:left-7 dark:bg-dark dark:before:bg-white-dark dark:peer-checked:before:bg-white"></span>
                            </label>
                        </div>
                        <div className="panel space-y-5">
                            <h5 className="mb-4 text-lg font-semibold">Delete Account</h5>
                            <p>Once you delete the account, there is no going back. Please be certain.</p>
                            <button className="btn btn-danger btn-delete-account">Delete my account</button>
                        </div>
                    </div>
                </div>
            ) : (
                ''
            )}
        </div>
    );
};

export default ComponentsUsersAccountSettingsTabs;
