'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { Formik, Form, Field } from 'formik';
import React from 'react';
import Swal from 'sweetalert2';
import * as Yup from 'yup';

const ComponentsFormsValidationBasic = () => {
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
        fullName: Yup.string().required('Please fill the Name'),
    });

    return (
        <PanelCodeHighlight
            title="Basic"
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
    fullName: Yup.string().required('Please fill the Name'),
});

<Formik
    initialValues={{
        fullName: '',
    }}
    validationSchema={SubmittedForm}
    onSubmit={() => {}}
>
    {({ errors, submitCount, touched }) => (
        <Form className="space-y-5">
            <div className={submitCount ? (errors.fullName ? 'has-error' : 'has-success') : ''}>
                <label htmlFor="fullName">Full Name </label>
                <Field name="fullName" type="text" id="fullName" placeholder="Enter Full Name" className="form-input" />

                {submitCount ? errors.fullName ? <div className="text-danger mt-1">{errors.fullName}</div> : <div className="text-success mt-1">Looks Good!</div> : ''}
            </div>
            <button
                type="submit"
                className="btn btn-primary !mt-6"
                onClick={() => {
                    if (touched.fullName && !errors.fullName) {
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
                        fullName: '',
                    }}
                    validationSchema={SubmittedForm}
                    onSubmit={() => {}}
                >
                    {({ errors, submitCount, touched }) => (
                        <Form className="space-y-5">
                            <div className={submitCount ? (errors.fullName ? 'has-error' : 'has-success') : ''}>
                                <label htmlFor="fullName">Full Name </label>
                                <Field name="fullName" type="text" id="fullName" placeholder="Enter Full Name" className="form-input" />

                                {submitCount ? errors.fullName ? <div className="mt-1 text-danger">{errors.fullName}</div> : <div className="mt-1 text-success">Looks Good!</div> : ''}
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary !mt-6"
                                onClick={() => {
                                    if (touched.fullName && !errors.fullName) {
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

export default ComponentsFormsValidationBasic;
