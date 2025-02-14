'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { Formik, Form, Field } from 'formik';
import React from 'react';
import Swal from 'sweetalert2';
import * as Yup from 'yup';

const ComponentsFormsValidationCustomStyles = () => {
    const submitForm = () => {
        const toast = Swal.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
        });
        toast.fire({
            icon: 'success',
            title: 'Form submitted successfully',
            padding: '10px 20px',
        });
    };

    const submitForm4 = Yup.object().shape({
        firstname: Yup.string().required('Please fill the first name'),
        lastname: Yup.string().required('Please fill the last name'),
        username: Yup.string().required('Please choose a userName'),
        city: Yup.string().required('Please provide a valid city'),
        state: Yup.string().required('Please provide a valid state'),
        zip: Yup.string().required('Please provide a valid zip'),
        agree: Yup.bool().oneOf([true], 'You must agree before submitting.'),
    });

    return (
        <PanelCodeHighlight
            title="Custom Styles"
            codeHighlight={`import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import Swal from 'sweetalert2';
const submitForm = () => {
    const toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
    });
    toast.fire({
        icon: 'success',
        title: 'Form submitted successfully',
        padding: '10px 20px',
    });
};

const submitForm4 = Yup.object().shape({
    firstname: Yup.string().required('Please fill the first name'),
    lastname: Yup.string().required('Please fill the last name'),
    username: Yup.string().required('Please choose a userName'),
    city: Yup.string().required('Please provide a valid city'),
    state: Yup.string().required('Please provide a valid state'),
    zip: Yup.string().required('Please provide a valid zip'),
    agree: Yup.bool().oneOf([true], 'You must agree before submitting.'),
});

<Formik
    initialValues={{
        firstname: 'Shaun',
        lastname: 'Park',
        username: '',
        city: '',
        state: '',
        zip: '',
        agree: false,
    }}
    validationSchema={submitForm4}
    onSubmit={() => {}}
>
    {({ errors, submitCount, touched, values }) => (
        <Form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className={submitCount ? (errors.firstname ? 'has-error' : 'has-success') : ''}>
                    <label htmlFor="firstname">First Name </label>
                    <Field name="firstname" type="text" id="firstname" placeholder="Enter First Name" className="form-input" />

                    {submitCount ? (
                        errors.firstname ? (
                            <div className="text-danger mt-1">{errors.firstname}</div>
                        ) : (
                            <div className="text-success mt-1">Looks Good!</div>
                        )
                    ) : (
                        ''
                    )}
                </div>

                <div className={submitCount ? (errors.lastname ? 'has-error' : 'has-success') : ''}>
                    <label htmlFor="fullName">Last Name </label>
                    <Field name="lastname" type="text" id="lastname" placeholder="Enter Last Name" className="form-input" />

                    {submitCount ? errors.lastname ? <div className="text-danger mt-1">{errors.lastname}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                </div>

                <div className={submitCount ? (errors.username ? 'has-error' : 'has-success') : ''}>
                    <label htmlFor="username">Username</label>
                    <div className="flex">
                        <div className="bg-[#eee] flex justify-center items-center ltr:rounded-l-md rtl:rounded-r-md px-3 font-semibold border ltr:border-r-0 rtl:border-l-0 border-white-light dark:border-[#17263c] dark:bg-[#1b2e4b]">
                            @
                        </div>
                        <Field name="username" type="text" id="username" placeholder="Enter Username" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
                    </div>
                    {submitCount ? errors.username ? <div className="text-danger mt-1">{errors.username}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                <div className={\`md:col-span-2 \${submitCount ? (errors.city ? 'has-error' : 'has-success') : ''}\`}>
                    <label htmlFor="customeCity">City</label>
                    <Field name="city" type="text" id="city" placeholder="Enter City" className="form-input" />

                    {submitCount ? errors.city ? <div className="text-danger mt-1">{errors.city}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                </div>

                <div className={submitCount ? (errors.state ? 'has-error' : 'has-success') : ''}>
                    <label htmlFor="customeState">State</label>
                    <Field name="state" type="text" id="customeState" placeholder="Enter State" className="form-input" />
                    {submitCount ? errors.state ? <div className="text-danger mt-1">{errors.state}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                </div>

                <div className={submitCount ? (errors.zip ? 'has-error' : 'has-success') : ''}>
                    <label htmlFor="customeZip">Zip</label>
                    <Field name="zip" type="text" id="customeZip" placeholder="Enter Zip" className="form-input" />
                    {submitCount ? errors.zip ? <div className="text-danger mt-1">{errors.zip}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
                </div>
            </div>

            <div className={submitCount ? (errors.agree ? 'has-error' : 'has-success') : ''}>
            <div className="flex">
                <Field name="agree" id="agree" type="checkbox" className="form-checkbox" />
                {values.agree}
                <label htmlFor="agree" className="text-white-dark font-semibold">
                    Agree to terms and conditions
                </label>
            </div>
                {submitCount ? errors.agree ? <div className="text-danger mt-1">{errors.agree}</div> : '' : ''}
            </div>

            <button
                type="submit"
                className="btn btn-primary !mt-6"
                onClick={() => {
                    if (Object.keys(touched).length !== 0 && Object.keys(errors).length === 0) {
                        submitForm();
                    }
                }}
            >
                Submit Form
            </button>
        </Form>
    )}
</Formik>`}
        >
            <div className="mb-5">
                <Formik
                    initialValues={{
                        firstname: 'Shaun',
                        lastname: 'Park',
                        username: '',
                        city: '',
                        state: '',
                        zip: '',
                        agree: false,
                    }}
                    validationSchema={submitForm4}
                    onSubmit={() => {}}
                >
                    {({ errors, submitCount, touched, values }) => (
                        <Form className="space-y-5">
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                                <div className={submitCount ? (errors.firstname ? 'has-error' : 'has-success') : ''}>
                                    <label htmlFor="firstname">First Name </label>
                                    <Field name="firstname" type="text" id="firstname" placeholder="Enter First Name" className="form-input" />

                                    {submitCount ? errors.firstname ? <div className="mt-1 text-danger">{errors.firstname}</div> : <div className="mt-1 text-success">Looks Good!</div> : ''}
                                </div>

                                <div className={submitCount ? (errors.lastname ? 'has-error' : 'has-success') : ''}>
                                    <label htmlFor="fullName">Last Name </label>
                                    <Field name="lastname" type="text" id="lastname" placeholder="Enter Last Name" className="form-input" />

                                    {submitCount ? errors.lastname ? <div className="mt-1 text-danger">{errors.lastname}</div> : <div className="mt-1 text-success">Looks Good!</div> : ''}
                                </div>

                                <div className={submitCount ? (errors.username ? 'has-error' : 'has-success') : ''}>
                                    <label htmlFor="username">Username</label>
                                    <div className="flex">
                                        <div className="flex items-center justify-center border border-white-light bg-[#eee] px-3 font-semibold ltr:rounded-l-md ltr:border-r-0 rtl:rounded-r-md rtl:border-l-0 dark:border-[#17263c] dark:bg-[#1b2e4b]">
                                            @
                                        </div>
                                        <Field name="username" type="text" id="username" placeholder="Enter Username" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
                                    </div>
                                    {submitCount ? errors.username ? <div className="mt-1 text-danger">{errors.username}</div> : <div className="mt-1 text-success">Looks Good!</div> : ''}
                                </div>
                            </div>
                            <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
                                <div className={`md:col-span-2 ${submitCount ? (errors.city ? 'has-error' : 'has-success') : ''}`}>
                                    <label htmlFor="customeCity">City</label>
                                    <Field name="city" type="text" id="city" placeholder="Enter City" className="form-input" />

                                    {submitCount ? errors.city ? <div className="mt-1 text-danger">{errors.city}</div> : <div className="mt-1 text-success">Looks Good!</div> : ''}
                                </div>

                                <div className={submitCount ? (errors.state ? 'has-error' : 'has-success') : ''}>
                                    <label htmlFor="customeState">State</label>
                                    <Field name="state" type="text" id="customeState" placeholder="Enter State" className="form-input" />
                                    {submitCount ? errors.state ? <div className="mt-1 text-danger">{errors.state}</div> : <div className="mt-1 text-success">Looks Good!</div> : ''}
                                </div>

                                <div className={submitCount ? (errors.zip ? 'has-error' : 'has-success') : ''}>
                                    <label htmlFor="customeZip">Zip</label>
                                    <Field name="zip" type="text" id="customeZip" placeholder="Enter Zip" className="form-input" />
                                    {submitCount ? errors.zip ? <div className="mt-1 text-danger">{errors.zip}</div> : <div className="mt-1 text-success">Looks Good!</div> : ''}
                                </div>
                            </div>

                            <div className={submitCount ? (errors.agree ? 'has-error' : 'has-success') : ''}>
                                <div className="flex">
                                    <Field name="agree" id="agree" type="checkbox" className="form-checkbox" />
                                    {values.agree}
                                    <label htmlFor="agree" className="font-semibold text-white-dark">
                                        Agree to terms and conditions
                                    </label>
                                </div>
                                {submitCount ? errors.agree ? <div className="mt-1 text-danger">{errors.agree}</div> : '' : ''}
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary !mt-6"
                                onClick={() => {
                                    if (Object.keys(touched).length !== 0 && Object.keys(errors).length === 0) {
                                        submitForm();
                                    }
                                }}
                            >
                                Submit Form
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormsValidationCustomStyles;
