import PanelCodeHighlight from '@/components/panel-code-highlight';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Basic Forms',
};

const Basic = () => {
    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="#" className="text-primary hover:underline">
                        Forms
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Basic</span>
                </li>
            </ul>

            <div className="grid grid-cols-1 gap-6 pt-5 lg:grid-cols-2">
                <PanelCodeHighlight
                    title="Input Text"
                    codeHighlight={`<form>
    <input type="text" placeholder="Some Text..." className="form-input" required />
    <button type="submit" className="btn btn-primary mt-6">
        Submit
    </button>
</form>`}
                >
                    <div className="mb-5">
                        <form>
                            <input type="text" placeholder="Some Text..." className="form-input" required />
                            <button type="submit" className="btn btn-primary mt-6">
                                Submit
                            </button>
                        </form>
                    </div>
                </PanelCodeHighlight>

                {/* type=password */}
                <PanelCodeHighlight
                    title="Input Password"
                    codeHighlight={`<form>
    <input type="password" placeholder="Enter Password" className="form-input" required />
    <button type="submit" className="btn btn-primary mt-6">
        Submit
    </button>
</form>`}
                >
                    <div className="mb-5">
                        <form>
                            <input type="password" placeholder="Enter Password" className="form-input" required />
                            <button type="submit" className="btn btn-primary mt-6">
                                Submit
                            </button>
                        </form>
                    </div>
                </PanelCodeHighlight>

                {/* type=email */}
                <PanelCodeHighlight
                    title="Input Email"
                    codeHighlight={`<form>
    <input type="email" placeholder="email@mail.com" className="form-input" required />
    <button type="submit" className="btn btn-primary mt-6">
        Submit
    </button>
</form>`}
                >
                    <div className="mb-5">
                        <form>
                            <input type="email" placeholder="email@mail.com" className="form-input" required />
                            <button type="submit" className="btn btn-primary mt-6">
                                Submit
                            </button>
                        </form>
                    </div>
                </PanelCodeHighlight>

                {/* type=url */}
                <PanelCodeHighlight
                    title="Input Url"
                    codeHighlight={`<form>
    <input type="url" placeholder="https://dummyurl.com" className="form-input" required />
    <button type="submit" className="btn btn-primary mt-6">
        Submit
    </button>
</form>`}
                >
                    <div className="mb-5">
                        <form>
                            <input type="url" placeholder="https://dummyurl.com" className="form-input" required />
                            <button type="submit" className="btn btn-primary mt-6">
                                Submit
                            </button>
                        </form>
                    </div>
                </PanelCodeHighlight>

                {/* type=tel */}
                <PanelCodeHighlight
                    title="Input Telephone"
                    codeHighlight={`<form>
    <input type="tel" placeholder="6-(666)-111-7777" className="form-input" required />
    <button type="submit" className="btn btn-primary mt-6">
        Submit
    </button>
</form>`}
                >
                    <div className="mb-5">
                        <form>
                            <input type="tel" placeholder="6-(666)-111-7777" className="form-input" required />
                            <button type="submit" className="btn btn-primary mt-6">
                                Submit
                            </button>
                        </form>
                    </div>
                </PanelCodeHighlight>

                {/* type=search */}
                <PanelCodeHighlight
                    title="Input Search"
                    codeHighlight={`<form>
    <input type="search" placeholder="Search..." className="form-input" required />
    <button type="button" className="btn btn-primary mt-6">
        Submit
    </button>
</form>`}
                >
                    <div className="mb-5">
                        <form>
                            <input type="search" placeholder="Search..." className="form-input" required />
                            <button type="button" className="btn btn-primary mt-6">
                                Submit
                            </button>
                        </form>
                    </div>
                </PanelCodeHighlight>

                {/* type=range */}
                <PanelCodeHighlight
                    title="Input Range"
                    codeHighlight={`<form>
    <input type="range" className="w-full py-2.5" min="0" max="100" />
</form>`}
                >
                    <div className="mb-5">
                        <form>
                            <input type="range" className="w-full py-2.5" min="0" max="100" />
                        </form>
                    </div>
                </PanelCodeHighlight>

                {/* input with label */}
                <PanelCodeHighlight
                    title="Input With Label"
                    codeHighlight={`<form>
    <label htmlFor="fullname">Full Name</label>
    <input id="fullname" type="text" placeholder="Enter Full Name" defaultValue="Alan Green" className="form-input" />
</form>`}
                >
                    <div className="mb-5">
                        <form>
                            <label htmlFor="fullname">Full Name</label>
                            <input id="fullname" type="text" placeholder="Enter Full Name" defaultValue="Alan Green" className="form-input" />
                        </form>
                    </div>
                </PanelCodeHighlight>

                {/* form controls */}
                <PanelCodeHighlight
                    title="Form controls"
                    codeHighlight={`<form className="space-y-5">
    <div>
        <label htmlFor="ctnEmail">Email address</label>
        <input id="ctnEmail" type="email" placeholder="name@example.com" className="form-input" required />
    </div>
    <div>
        <label htmlFor="ctnSelect1">Example select</label>
        <select id="ctnSelect1" className="form-select text-white-dark" required>
            <option>Open this select menu</option>
            <option>One</option>
            <option>Two</option>
            <option>Three</option>
        </select>
    </div>
    <div>
        <label htmlFor="ctnSelect2">Example multiple select</label>
        <select id="ctnSelect2" multiple className="form-multiselect text-white-dark" required>
            <option>Open this select menu</option>
            <option>One</option>
            <option>Two</option>
            <option>Three</option>
        </select>
    </div>
    <div>
        <label htmlFor="ctnTextarea">Example textarea</label>
        <textarea id="ctnTextarea" rows={3} className="form-textarea" placeholder="Enter Address" required></textarea>
    </div>
    <div>
        <label htmlFor="ctnFile">Example file input</label>
        <input
            id="ctnFile"
            type="file"
            className="form-input file:py-2 file:px-4 file:border-0 file:font-semibold p-0 file:bg-primary/90 ltr:file:mr-5 rtl:file-ml-5 file:text-white file:hover:bg-primary"
            required
        />
    </div>
    <button type="submit" className="btn btn-primary !mt-6">
        Submit
    </button>
</form>`}
                    className="lg:row-span-3"
                >
                    <div className="mb-5">
                        <form className="space-y-5">
                            <div>
                                <label htmlFor="ctnEmail">Email address</label>
                                <input id="ctnEmail" type="email" placeholder="name@example.com" className="form-input" required />
                            </div>
                            <div>
                                <label htmlFor="ctnSelect1">Example select</label>
                                <select id="ctnSelect1" className="form-select text-white-dark" required>
                                    <option>Open this select menu</option>
                                    <option>One</option>
                                    <option>Two</option>
                                    <option>Three</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="ctnSelect2">Example multiple select</label>
                                <select id="ctnSelect2" multiple className="form-multiselect text-white-dark" required>
                                    <option>Open this select menu</option>
                                    <option>One</option>
                                    <option>Two</option>
                                    <option>Three</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="ctnTextarea">Example textarea</label>
                                <textarea id="ctnTextarea" rows={3} className="form-textarea" placeholder="Enter Address" required></textarea>
                            </div>
                            <div>
                                <label htmlFor="ctnFile">Example file input</label>
                                <input
                                    id="ctnFile"
                                    type="file"
                                    className="rtl:file-ml-5 form-input p-0 file:border-0 file:bg-primary/90 file:px-4 file:py-2 file:font-semibold file:text-white file:hover:bg-primary ltr:file:mr-5"
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary !mt-6">
                                Submit
                            </button>
                        </form>
                    </div>
                </PanelCodeHighlight>

                {/* Form Grid Layouts */}
                <PanelCodeHighlight
                    title="Form grid"
                    codeHighlight={`<form>
    <div className="grid grid-cols-1 sm:flex justify-between gap-5">
        <input type="text" placeholder="Enter First Name" className="form-input" />
        <input type="text" placeholder="Enter Last Name" className="form-input" />
    </div>
    <button type="button" className="btn btn-primary mt-6">
        Submit
    </button>
</form>`}
                >
                    <div className="mb-5">
                        <form>
                            <div className="grid grid-cols-1 justify-between gap-5 sm:flex">
                                <input type="text" placeholder="Enter First Name" className="form-input" />
                                <input type="text" placeholder="Enter Last Name" className="form-input" />
                            </div>
                            <button type="button" className="btn btn-primary mt-6">
                                Submit
                            </button>
                        </form>
                    </div>
                </PanelCodeHighlight>

                <PanelCodeHighlight
                    title="Form row"
                    codeHighlight={`<form>
    <div className="grid grid-cols-1 sm:flex justify-between gap-5">
        <input type="text" placeholder="Enter First Name" className="form-input" />
        <input type="text" placeholder="Enter Last Name" className="form-input" />
    </div>
    <button type="button" className="btn btn-primary mt-6">
        Submit
    </button>
</form>`}
                >
                    <div className="mb-5">
                        <form>
                            <div className="grid grid-cols-1 justify-between gap-5 sm:flex">
                                <input type="text" placeholder="Enter First Name" className="form-input" />
                                <input type="text" placeholder="Enter Last Name" className="form-input" />
                            </div>
                            <button type="button" className="btn btn-primary mt-6">
                                Submit
                            </button>
                        </form>
                    </div>
                </PanelCodeHighlight>

                <PanelCodeHighlight
                    title="Form groups"
                    codeHighlight={`<form className="space-y-5">
    <div>
        <label htmlFor="groupFname">First Name</label>
        <input id="groupFname" type="text" placeholder="Enter First Name" className="form-input" />
    </div>
    <div>
        <label htmlFor="groupLname">Last Name</label>
        <input id="groupLname" type="text" placeholder="Enter Last Name" className="form-input" />
    </div>
    <button type="button" className="btn btn-primary !mt-6">
        Submit
    </button>
</form>`}
                >
                    <div className="mb-5">
                        <form className="space-y-5">
                            <div>
                                <label htmlFor="groupFname">First Name</label>
                                <input id="groupFname" type="text" placeholder="Enter First Name" className="form-input" />
                            </div>
                            <div>
                                <label htmlFor="groupLname">Last Name</label>
                                <input id="groupLname" type="text" placeholder="Enter Last Name" className="form-input" />
                            </div>
                            <button type="button" className="btn btn-primary !mt-6">
                                Submit
                            </button>
                        </form>
                    </div>
                </PanelCodeHighlight>

                <PanelCodeHighlight
                    title="Column sizing"
                    className="lg:col-span-2"
                    codeHighlight={`<form>
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2">
        <input type="text" placeholder="Enter City" className="form-input lg:col-span-2" />
        <input type="text" placeholder="Enter State" className="form-input" />
        <input type="text" placeholder="Enter Zip" className="form-input" />
    </div>
    <button type="button" className="btn btn-primary mt-6">
        Submit
    </button>
</form>`}
                >
                    <div className="mb-5">
                        <form>
                            <div className="grid grid-cols-1 gap-2 md:grid-cols-3 lg:grid-cols-4">
                                <input type="text" placeholder="Enter City" className="form-input lg:col-span-2" />
                                <input type="text" placeholder="Enter State" className="form-input" />
                                <input type="text" placeholder="Enter Zip" className="form-input" />
                            </div>
                            <button type="button" className="btn btn-primary mt-6">
                                Submit
                            </button>
                        </form>
                    </div>
                </PanelCodeHighlight>

                {/* Helper Text */}
                <PanelCodeHighlight
                    title="Input with help text ( Default Left)"
                    codeHighlight={`<form>
    <div>
        <input type="text" placeholder="Enter First Name" className="form-input" />
        <span className="text-white-dark text-xs">I am the helper text.</span>
    </div>
</form>`}
                >
                    <div className="mb-5">
                        <form>
                            <div>
                                <input type="text" placeholder="Enter First Name" className="form-input" />
                                <span className="text-xs text-white-dark">I am the helper text.</span>
                            </div>
                        </form>
                    </div>
                </PanelCodeHighlight>

                <PanelCodeHighlight
                    title="Input with badge help text (Default Left)"
                    codeHighlight={`<form>
    <div>
        <input type="text" placeholder="Enter First Name" className="form-input mb-2" />
        <span className="badge bg-primary text-xs hover:top-0">I am the helper text.</span>
    </div>
</form>`}
                >
                    <div className="mb-5">
                        <form>
                            <div>
                                <input type="text" placeholder="Enter First Name" className="form-input mb-2" />
                                <span className="badge bg-primary text-xs hover:top-0">I am the helper text.</span>
                            </div>
                        </form>
                    </div>
                </PanelCodeHighlight>

                <PanelCodeHighlight
                    title="Input with block badge help text (Default Left)"
                    codeHighlight={`<form>
    <div>
        <input type="text" placeholder="Enter First Name" className="form-input mb-2" />
        <span className="badge bg-primary block text-xs hover:top-0">I am the helper text.</span>
    </div>
</form>`}
                >
                    <div className="mb-5">
                        <form>
                            <div>
                                <input type="text" placeholder="Enter First Name" className="form-input mb-2" />
                                <span className="badge block bg-primary text-xs hover:top-0">I am the helper text.</span>
                            </div>
                        </form>
                    </div>
                </PanelCodeHighlight>

                <PanelCodeHighlight
                    title="Inline Help text"
                    codeHighlight={`<form>
    <div>
        <label htmlFor="Txtpassword">Password</label>
        <input id="Txtpassword" type="password" placeholder="Enter Password" className="form-input w-3/5" />
        <span className="text-xs text-white-dark ltr:pl-2 rtl:pr-2">Min 8-20 char</span>
    </div>
</form>`}
                >
                    <div className="mb-5">
                        <form>
                            <div>
                                <label htmlFor="Txtpassword">Password</label>
                                <input id="Txtpassword" type="password" placeholder="Enter Password" className="form-input w-3/5" />
                                <span className="text-xs text-white-dark ltr:pl-2 rtl:pr-2">Min 8-20 char</span>
                            </div>
                        </form>
                    </div>
                </PanelCodeHighlight>

                {/* Sizing */}
                <PanelCodeHighlight
                    title="Input Fields"
                    className="lg:col-span-2"
                    codeHighlight={`<form>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
            <label htmlFor="inputLarge">Large Input</label>
            <input id="inputLarge" type="text" placeholder="Large Input" className="form-input form-input-lg" />
        </div>
        <div>
            <label htmlFor="inputDefault">Default Input</label>
            <input id="inputDefault" type="text" placeholder="Default Input" className="form-input" />
        </div>
        <div>
            <label htmlFor="inputSmall">Small Input</label>
            <input id="inputSmall" type="text" placeholder="Small Input" className="form-input form-input-sm" />
        </div>
    </div>
</form>`}
                >
                    <div className="mb-5">
                        <form>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                <div>
                                    <label htmlFor="inputLarge">Large Input</label>
                                    <input id="inputLarge" type="text" placeholder="Large Input" className="form-input-lg form-input" />
                                </div>
                                <div>
                                    <label htmlFor="inputDefault">Default Input</label>
                                    <input id="inputDefault" type="text" placeholder="Default Input" className="form-input" />
                                </div>
                                <div>
                                    <label htmlFor="inputSmall">Small Input</label>
                                    <input id="inputSmall" type="text" placeholder="Small Input" className="form-input-sm form-input" />
                                </div>
                            </div>
                        </form>
                    </div>
                </PanelCodeHighlight>

                <PanelCodeHighlight
                    title="Select Field"
                    className="lg:col-span-2"
                    codeHighlight={`<form>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
            <select className="form-select form-select-lg text-white-dark">
                <option>Open this select menu</option>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
            </select>
        </div>
        <div>
            <select className="form-select text-white-dark">
                <option>Open this select menu</option>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
            </select>
        </div>
        <div>
            <select className="form-select form-select-sm text-white-dark">
                <option>Open this select menu</option>
                <option>One</option>
                <option>Two</option>
                <option>Three</option>
            </select>
        </div>
    </div>
</form>`}
                >
                    <div className="mb-5">
                        <form>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                                <div>
                                    <select className="form-select-lg form-select text-white-dark">
                                        <option>Open this select menu</option>
                                        <option>One</option>
                                        <option>Two</option>
                                        <option>Three</option>
                                    </select>
                                </div>
                                <div>
                                    <select className="form-select text-white-dark">
                                        <option>Open this select menu</option>
                                        <option>One</option>
                                        <option>Two</option>
                                        <option>Three</option>
                                    </select>
                                </div>
                                <div>
                                    <select className="form-select-sm form-select text-white-dark">
                                        <option>Open this select menu</option>
                                        <option>One</option>
                                        <option>Two</option>
                                        <option>Three</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                </PanelCodeHighlight>

                <PanelCodeHighlight
                    title="Horizontal form label sizing"
                    codeHighlight={`<form className="space-y-5">
    <div className="sm:flex justify-between items-center gap-5 md:gap-20">
        <label htmlFor="hrLargeinput">Email</label>
        <input id="hrLargeinput" type="email" placeholder="name@example.com" className="form-input py-2.5 text-base" />
    </div>
    <div className="sm:flex justify-between items-center gap-5 md:gap-20">
        <label htmlFor="hrDefaultinput">Email</label>
        <input id="hrDefaultinput" type="email" placeholder="name@example.com" className="form-input" />
    </div>
    <div className="sm:flex justify-between items-center gap-5 md:gap-20">
        <label htmlFor="hrSmallinput">Email</label>
        <input id="hrSmallinput" type="email" placeholder="name@example.com" className="form-input py-1.5 text-xs" />
    </div>
</form>`}
                >
                    <div className="mb-5">
                        <form className="space-y-5">
                            <div className="items-center justify-between gap-5 sm:flex md:gap-20">
                                <label htmlFor="hrLargeinput">Email</label>
                                <input id="hrLargeinput" type="email" placeholder="name@example.com" className="form-input py-2.5 text-base" />
                            </div>
                            <div className="items-center justify-between gap-5 sm:flex md:gap-20">
                                <label htmlFor="hrDefaultinput">Email</label>
                                <input id="hrDefaultinput" type="email" placeholder="name@example.com" className="form-input" />
                            </div>
                            <div className="items-center justify-between gap-5 sm:flex md:gap-20">
                                <label htmlFor="hrSmallinput">Email</label>
                                <input id="hrSmallinput" type="email" placeholder="name@example.com" className="form-input py-1.5 text-xs" />
                            </div>
                        </form>
                    </div>
                </PanelCodeHighlight>

                {/*  Readonly  */}
                <PanelCodeHighlight
                    title="Input Readonly"
                    className="lg:row-start-[14]"
                    codeHighlight={`<form>
    <div>
        <input type="text" placeholder="Readonly input here…" className="form-input disabled:pointer-events-none" readOnly />
    </div>
</form>`}
                >
                    <div className="mb-5">
                        <form>
                            <div>
                                <input type="text" placeholder="Readonly input here…" className="form-input disabled:pointer-events-none" readOnly />
                            </div>
                        </form>
                    </div>
                </PanelCodeHighlight>

                {/* Disabled */}
                <PanelCodeHighlight
                    title="Disabled Fields"
                    codeHighlight={`<form className="space-y-5">
    <div>
        <label htmlFor="disInput" className="text-white-dark">
            Disabled input
        </label>
        <input
            id="disInput"
            type="text"
            placeholder="Readonly input here…"
            className="form-input disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] cursor-not-allowed"
            disabled
        />
    </div>
    <div>
        <label htmlFor="disSelect" className="text-white-dark">
            Disabled select menu
        </label>
        <select id="disSelect" className="form-select disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b] text-white-dark" disabled>
            <option>Open this select menu</option>
            <option>One</option>
            <option>Two</option>
            <option>Three</option>
        </select>
    </div>
    <div>
        <label className="flex items-center">
            <input type="checkbox" className="form-checkbox" disabled />
            <span className="text-white-dark">Can't check this</span>
        </label>
    </div>
    <button type="submit" className="btn btn-primary !mt-6 disabled:pointer-events-none disabled:opacity-60" disabled>
        Submit
    </button>
</form>`}
                >
                    <div className="mb-5">
                        <form className="space-y-5">
                            <div>
                                <label htmlFor="disInput" className="text-white-dark">
                                    Disabled input
                                </label>
                                <input
                                    id="disInput"
                                    type="text"
                                    placeholder="Readonly input here…"
                                    className="form-input cursor-not-allowed disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b]"
                                    disabled
                                />
                            </div>
                            <div>
                                <label htmlFor="disSelect" className="text-white-dark">
                                    Disabled select menu
                                </label>
                                <select id="disSelect" className="form-select text-white-dark disabled:pointer-events-none disabled:bg-[#eee] dark:disabled:bg-[#1b2e4b]" disabled>
                                    <option>Open this select menu</option>
                                    <option>One</option>
                                    <option>Two</option>
                                    <option>Three</option>
                                </select>
                            </div>
                            <div>
                                <label className="flex items-center">
                                    <input type="checkbox" className="form-checkbox" disabled />
                                    <span className="text-white-dark">{`Can't check this`}</span>
                                </label>
                            </div>
                            <button type="submit" className="btn btn-primary !mt-6 disabled:pointer-events-none disabled:opacity-60" disabled>
                                Submit
                            </button>
                        </form>
                    </div>
                </PanelCodeHighlight>

                {/* Custom */}
                <PanelCodeHighlight
                    title="Checkboxes"
                    codeHighlight={`<form>
    <div>
        <label className="flex items-center cursor-pointer">
            <input type="checkbox" className="form-checkbox" defaultChecked />
            <span className=" text-white-dark">Checkbox</span>
        </label>
    </div>
</form>`}
                >
                    <div className="mb-5">
                        <form>
                            <div>
                                <label className="flex cursor-pointer items-center">
                                    <input type="checkbox" className="form-checkbox" defaultChecked />
                                    <span className=" text-white-dark">Checkbox</span>
                                </label>
                            </div>
                        </form>
                    </div>
                </PanelCodeHighlight>

                <PanelCodeHighlight
                    title="Radio"
                    codeHighlight={`<form className="space-y-5">
    <div>
        <label className="flex items-center cursor-pointer">
            <input type="radio" name="custom_radio2" className="form-radio" defaultChecked />
            <span className="text-white-dark">Toggle this custom radio</span>
        </label>
    </div>
    <div>
        <label className="flex items-center cursor-pointer">
            <input type="radio" name="custom_radio2" className="form-radio" />
            <span className="text-white-dark">Or toggle this other custom radio</span>
        </label>
    </div>
</form>`}
                >
                    <div className="mb-5">
                        <form className="space-y-5">
                            <div>
                                <label className="flex cursor-pointer items-center">
                                    <input type="radio" name="custom_radio2" className="form-radio" defaultChecked />
                                    <span className="text-white-dark">Toggle this custom radio</span>
                                </label>
                            </div>
                            <div>
                                <label className="flex cursor-pointer items-center">
                                    <input type="radio" name="custom_radio2" className="form-radio" />
                                    <span className="text-white-dark">Or toggle this other custom radio</span>
                                </label>
                            </div>
                        </form>
                    </div>
                </PanelCodeHighlight>

                <PanelCodeHighlight
                    title="Disabled"
                    codeHighlight={`<form className="space-y-5">
    <div>
        <label className="flex items-center">
            <input type="checkbox" className="form-checkbox" disabled />
            <span className=" text-white-dark">Check this custom checkbox</span>
        </label>
    </div>
    <div>
        <label className="flex items-center">
            <input type="radio" className="form-radio" disabled />
            <span className="text-white-dark">Toggle this custom radio</span>
        </label>
    </div>
</form>`}
                >
                    <div className="mb-5">
                        <form className="space-y-5">
                            <div>
                                <label className="flex items-center">
                                    <input type="checkbox" className="form-checkbox" disabled />
                                    <span className=" text-white-dark">Check this custom checkbox</span>
                                </label>
                            </div>
                            <div>
                                <label className="flex items-center">
                                    <input type="radio" className="form-radio" disabled />
                                    <span className="text-white-dark">Toggle this custom radio</span>
                                </label>
                            </div>
                        </form>
                    </div>
                </PanelCodeHighlight>

                <PanelCodeHighlight
                    title="Select menu"
                    codeHighlight={`<form>
    <div>
        <select className="form-select text-white-dark">
            <option>Open this select menu</option>
            <option>One</option>
            <option>Two</option>
            <option>Three</option>
        </select>
    </div>
</form>`}
                >
                    <div className="mb-5">
                        <form>
                            <div>
                                <select className="form-select text-white-dark">
                                    <option>Open this select menu</option>
                                    <option>One</option>
                                    <option>Two</option>
                                    <option>Three</option>
                                </select>
                            </div>
                        </form>
                    </div>
                </PanelCodeHighlight>

                <PanelCodeHighlight
                    title="Multiselect"
                    codeHighlight={`<form>
    <div>
        <select size={4} className="form-multiselect multiple text-white-dark !bg-none">
            <option>Open this select menu</option>
            <option>One</option>
            <option>Two</option>
            <option>Three</option>
            <option>Four</option>
            <option>Five</option>
        </select>
    </div>
</form>`}
                >
                    <div className="mb-5">
                        <form>
                            <div>
                                <select size={4} multiple className="form-multiselect !bg-none text-white-dark">
                                    <option>Open this select menu</option>
                                    <option>One</option>
                                    <option>Two</option>
                                    <option>Three</option>
                                    <option>Four</option>
                                    <option>Five</option>
                                </select>
                            </div>
                        </form>
                    </div>
                </PanelCodeHighlight>
            </div>
        </div>
    );
};

export default Basic;
