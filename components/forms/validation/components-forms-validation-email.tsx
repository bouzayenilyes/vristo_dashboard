'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { Formik, Form, Field } from 'formik';
import React from 'react';
import Swal from 'sweetalert2';
import * as Yup from 'yup';

const ComponentsFormsValidationEmail = () => {
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

    const SubmittedForm = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Please fill the Email'),
    });

    return (
        <PanelCodeHighlight
            title="Email"
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

const SubmittedForm = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Please fill the Email'),
});

<Formik
    initialValues={{
        email: '',
    }}
    validationSchema={SubmittedForm}
    onSubmit={() => {}}
>
    {({ errors, submitCount, touched }) => (
        <Form className="space-y-5">
            <div className={submitCount ? (errors.email ? 'has-error' : 'has-success') : ''}>
                <label htmlFor="Email">Email</label>
                <Field name="email" type="text" id="Email" placeholder="Enter Email" className="form-input" />

                {submitCount ? errors.email ? <div className="text-danger mt-1">{errors.email}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
            </div>
            <button
                type="submit"
                className="btn btn-primary !mt-6"
                onClick={() => {
                    if (touched.email && !errors.email) {
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
                        email: '',
                    }}
                    validationSchema={SubmittedForm}
                    onSubmit={() => {}}
                >
                    {({ errors, submitCount, touched }) => (
                        <Form className="space-y-5">
                            <div className={submitCount ? (errors.email ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="Email">Email</label>
                                <Field name="email" type="text" id="Email" placeholder="Enter Email" className="form-input" />

                                {submitCount ? errors.email ? <div className="mt-1 text-danger">{errors.email}</div> : <div className="mt-1 text-success">Looks Good!</div> : ''}
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary !mt-6"
                                onClick={() => {
                                    if (touched.email && !errors.email) {
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

export default ComponentsFormsValidationEmail;
