import PanelCodeHighlight from '@/components/panel-code-highlight';
import React from 'react';

const ComponentsFormsInputGroupButtonAddons = () => {
    return (
        <PanelCodeHighlight
            title="Button addons"
            codeHighlight={`<form>
    <div className="mb-5">
        <label htmlFor="addonsLeft">Left</label>
        <div className="flex">
            <button type="button" className="btn btn-info ltr:rounded-r-none rtl:rounded-l-none">
                Button
            </button>
            <input id="addonsLeft" type="text" placeholder="" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
        </div>
    </div>
    <div className="mb-5">
        <label htmlFor="addonsRight">Right</label>
        <div className="flex">
            <input id="addonsRight" type="text" placeholder="" className="form-input ltr:rounded-r-none rtl:rounded-l-none" />
            <button type="button" className="btn btn-secondary ltr:rounded-l-none rtl:rounded-r-none">
                Button
            </button>
        </div>
    </div>
    <div className="mb-5">
        <label htmlFor="addonsLeftoutline">Left</label>
        <div className="flex">
            <button type="button" className="btn btn-outline-info ltr:rounded-r-none rtl:rounded-l-none">
                Button
            </button>
            <button type="button" className="btn btn-outline-info rounded-none ltr:border-l-0 rtl:border-r-0">
                Button
            </button>
            <input id="addonsLeftoutline" type="text" placeholder="" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
        </div>
    </div>
    <div>
        <label htmlFor="addonsRightoutline">Right</label>
        <div className="flex">
            <input id="addonsRightoutline" type="text" placeholder="" className="form-input ltr:rounded-r-none rtl:rounded-l-none" />
            <button type="button" className="btn btn-outline-secondary rounded-none ltr:border-r-0 rtl:border-l-0">
                Button
            </button>
            <button type="button" className="btn btn-outline-secondary ltr:rounded-l-none rtl:rounded-r-none">
                Button
            </button>
        </div>
    </div>
</form>`}
        >
            <div className="mb-5">
                <form>
                    <div className="mb-5">
                        <label htmlFor="addonsLeft">Left</label>
                        <div className="flex">
                            <button type="button" className="btn btn-info ltr:rounded-r-none rtl:rounded-l-none">
                                Button
                            </button>
                            <input id="addonsLeft" type="text" placeholder="" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
                        </div>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="addonsRight">Right</label>
                        <div className="flex">
                            <input id="addonsRight" type="text" placeholder="" className="form-input ltr:rounded-r-none rtl:rounded-l-none" />
                            <button type="button" className="btn btn-secondary ltr:rounded-l-none rtl:rounded-r-none">
                                Button
                            </button>
                        </div>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="addonsLeftoutline">Left</label>
                        <div className="flex">
                            <button type="button" className="btn btn-outline-info ltr:rounded-r-none rtl:rounded-l-none">
                                Button
                            </button>
                            <button type="button" className="btn btn-outline-info rounded-none ltr:border-l-0 rtl:border-r-0">
                                Button
                            </button>
                            <input id="addonsLeftoutline" type="text" placeholder="" className="form-input ltr:rounded-l-none rtl:rounded-r-none" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="addonsRightoutline">Right</label>
                        <div className="flex">
                            <input id="addonsRightoutline" type="text" placeholder="" className="form-input ltr:rounded-r-none rtl:rounded-l-none" />
                            <button type="button" className="btn btn-outline-secondary rounded-none ltr:border-r-0 rtl:border-l-0">
                                Button
                            </button>
                            <button type="button" className="btn btn-outline-secondary ltr:rounded-l-none rtl:rounded-r-none">
                                Button
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </PanelCodeHighlight>
    );
};

export default ComponentsFormsInputGroupButtonAddons;
