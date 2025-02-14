import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';

const ElementsAvatarInitials = () => {
    return (
        <PanelCodeHighlight
            title="Initials"
            codeHighlight={`<span className="flex justify-center items-center w-20 h-20 text-center rounded-full object-cover bg-success text-2xl">AG</span>

<span className="flex justify-center items-center w-16 h-16 text-center rounded-full object-cover bg-primary text-xl">AG</span>

<span className="flex justify-center items-center w-14 h-14 text-center rounded-full object-cover bg-info text-lg">AG</span>

<span className="flex justify-center items-center w-10 h-10 text-center rounded-full object-cover bg-danger text-base">AG</span>`}
        >
            <div className="mb-5">
                <div className="flex flex-wrap items-center justify-center gap-2 text-white">
                    <span className="flex h-20 w-20 items-center justify-center rounded-full bg-success object-cover text-center text-2xl">AG</span>
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary object-cover text-center text-xl">AG</span>
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-info object-cover text-center text-lg">AG</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-danger object-cover text-center text-base">AG</span>
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ElementsAvatarInitials;
