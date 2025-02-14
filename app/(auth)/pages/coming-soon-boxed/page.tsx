import ComponentsPagesComingSoonForm from '@/components/pages/coming-soon/components-pages-coming-soon-form';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Coming Soon Boxed',
};

const ComingSoonBoxed = () => {
    return (
        <div>
            <div className="absolute inset-0">
                <img src="/assets/images/auth/bg-gradient.png" alt="image" className="h-full w-full object-cover" />
            </div>
            <div className="relative flex min-h-screen items-center justify-center bg-[url(/assets/images/auth/map.png)] bg-cover bg-center bg-no-repeat px-6 py-10 dark:bg-[#060818] sm:px-16">
                <img src="/assets/images/auth/coming-soon-object1.png" alt="image" className="absolute left-0 top-1/2 h-full max-h-[893px] -translate-y-1/2" />
                <img src="/assets/images/auth/coming-soon-object2.png" alt="image" className="absolute left-24 top-0 h-40 md:left-[30%]" />
                <img src="/assets/images/auth/coming-soon-object3.png" alt="image" className="absolute right-0 top-0 h-[300px]" />
                <img src="/assets/images/auth/polygon-object.svg" alt="image" className="absolute bottom-0 end-[28%]" />
                <div className="relative w-full max-w-[870px] rounded-md bg-[linear-gradient(45deg,#fff9f9_0%,rgba(255,255,255,0)_25%,rgba(255,255,255,0)_75%,_#fff9f9_100%)] p-2 text-center dark:bg-[linear-gradient(52.22deg,#0E1726_0%,rgba(14,23,38,0)_18.66%,rgba(14,23,38,0)_51.04%,rgba(14,23,38,0)_80.07%,#0E1726_100%)]">
                    <div className="rounded-md bg-white/60 p-4 backdrop-blur-lg dark:bg-black/50 sm:p-6">
                        <div className="mx-auto mt-5 w-full max-w-[550px] md:mt-16">
                            <div className="mb-12">
                                <h1 className="text-3xl font-extrabold uppercase !leading-snug text-primary md:text-4xl">Coming Soon</h1>
                                <p className="text-base font-bold leading-normal text-white-dark">We will be here in a shortwhile.....</p>
                            </div>
                            <ComponentsPagesComingSoonForm />
                            <p className="dark:text-white">© {new Date().getFullYear()}. VRISTO All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComingSoonBoxed;
