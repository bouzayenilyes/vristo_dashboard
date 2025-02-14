'use client';
import IconMail from '@/components/icon/icon-mail';
import IconMessageDots from '@/components/icon/icon-message-dots';
import IconPencil from '@/components/icon/icon-pencil';
import IconPhoneCall from '@/components/icon/icon-phone-call';
import IconUser from '@/components/icon/icon-user';
import React from 'react';
import { useRouter } from 'next/navigation';

const ComponentsPagesContactUsForm = () => {
    const router = useRouter();
    const submitForm = (e: any) => {
        e.preventDefault();
        router.push('/');
    };
    return (
        <form className="space-y-5" onSubmit={submitForm}>
            <div className="relative text-white-dark">
                <input id="Name" type="text" placeholder="Name" className="form-input ps-10 placeholder:text-white-dark" />
                <span className="absolute start-4 top-1/2 -translate-y-1/2">
                    <IconUser fill={true} />
                </span>
            </div>
            <div className="relative text-white-dark">
                <input id="Email" type="email" placeholder="Email" className="form-input ps-10 placeholder:text-white-dark" />
                <span className="absolute start-4 top-1/2 -translate-y-1/2">
                    <IconMail fill={true} />
                </span>
            </div>
            <div className="relative text-white-dark">
                <input id="Phone" type="text" placeholder="Phone" className="form-input ps-10 placeholder:text-white-dark" />
                <span className="absolute start-4 top-1/2 -translate-y-1/2">
                    <IconPhoneCall fill={true} />
                </span>
            </div>
            <div className="relative text-white-dark">
                <input id="Subject" type="text" placeholder="Subject" className="form-input ps-10 placeholder:text-white-dark" />
                <span className="absolute start-4 top-1/2 -translate-y-1/2">
                    <IconPencil fill={true} />
                </span>
            </div>
            <div className="relative text-white-dark">
                <textarea id="Textarea" rows={4} className="form-textarea resize-none ps-10 placeholder:text-white-dark" placeholder="Message"></textarea>
                <span className="absolute start-4 top-2.5">
                    <IconMessageDots fill={true} />
                </span>
            </div>
            <button type="submit" className="btn btn-gradient !mt-6 w-full border-0 uppercase shadow-[0_10px_20px_-10px_rgba(67,97,238,0.44)]">
                Submit
            </button>
        </form>
    );
};

export default ComponentsPagesContactUsForm;
