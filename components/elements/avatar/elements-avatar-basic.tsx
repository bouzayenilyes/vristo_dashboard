import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';

const ElementsAvatarBasic = () => {
    return (
        <PanelCodeHighlight
            title="Basic"
            codeHighlight={`<img className="w-20 h-20 rounded-full overflow-hidden object-cover" src="/assets/images/profile-12.jpeg" alt="img" />

<img className="w-16 h-16 rounded-full overflow-hidden object-cover" src="/assets/images/profile-12.jpeg" alt="img" />

<img className="w-14 h-14 rounded-full overflow-hidden object-cover" src="/assets/images/profile-12.jpeg" alt="img" />

<img className="w-12 h-12 rounded-full overflow-hidden object-cover" src="/assets/images/profile-12.jpeg" alt="img" />`}
        >
            <div className="mb-5">
                <div className="flex flex-wrap items-center justify-center gap-2">
                    <img className="h-20 w-20 overflow-hidden rounded-full object-cover" src="/assets/images/profile-12.jpeg" alt="img" />
                    <img className="h-16 w-16 overflow-hidden rounded-full object-cover" src="/assets/images/profile-12.jpeg" alt="img" />
                    <img className="h-14 w-14 overflow-hidden rounded-full object-cover" src="/assets/images/profile-12.jpeg" alt="img" />
                    <img className="h-12 w-12 overflow-hidden rounded-full object-cover" src="/assets/images/profile-12.jpeg" alt="img" />
                </div>
            </div>
        </PanelCodeHighlight>
    );
};

export default ElementsAvatarBasic;
