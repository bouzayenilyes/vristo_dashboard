'use client';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { Formik, Form, Field } from 'formik';
import React from 'react';
import Swal from 'sweetalert2';
import * as Yup from 'yup';

const ComponentsFormsValidationSelect = () => {
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
        select: Yup.string().required('Please Select the field'),
    });

    return (
        <PanelCodeHighlight
            title="Select"
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
    select: Yup.string().required('Please Select the field'),
});

<Formik
    initialValues={{
        select: '',
    }}
    validationSchema={SubmittedForm}
    onSubmit={() => {}}
>
    {({ errors, submitCount, touched }) => (
        <Form className="space-y-5">
            <div className={submitCount ? (errors.select ? 'has-error' : 'has-success') : ''}>
                <Field as="select" name="select" className="form-select">
                    <option value="">Open this select menu</option>
                    <option value="One">One</option>
                    <option value="Two">Two</option>
                    <option value="Three">Three</option>
                </Field>
                {submitCount ? (
                    errors.select ? (
                        <div className=" text-danger mt-1">{errors.select}</div>
                    ) : (
                        <div className=" text-[#1abc9c] mt-1">Example valid custom select feedback</div>
                    )
                ) : (
                    ''
                )}
            </div>
            <button
                type="submit"
                className="btn btn-primary !mt-6"
                onClick={() => {
                    if (touched.select && !errors.select) {
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
                        select: '',
                    }}
                    validationSchema={SubmittedForm}
                    onSubmit={() => {}}
                >
                    {({ errors, submitCount, touched }) => (
                        <Form className="space-y-5">
                            <div className={submitCount ? (errors.select ? 'has-error' : 'has-success') : ''}>
                                <Field as="select" name="select" className="form-select">
                                    <option value="">Open this select menu</option>
                                    <option value="One">One</option>
                                    <option value="Two">Two</option>
                                    <option value="Three">Three</option>
                                </Field>
                                {submitCount ? (
                                    errors.select ? (
                                        <div className=" mt-1 text-danger">{errors.select}</div>
                                    ) : (
                                        <div className=" mt-1 text-[#1abc9c]">Example valid custom select feedback</div>
                                    )
                                ) : (
                                    ''
                                )}
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary !mt-6"
                                onClick={() => {
                                    if (touched.select && !errors.select) {
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

export default ComponentsFormsValidationSelect;
