import ComponentsMediaObjectDropdown from '@/components/components/media-object/components-media-object-dropdown';
import IconInfoTriangle from '@/components/icon/icon-info-triangle';
import IconMessageDots from '@/components/icon/icon-message-dots';
import IconPencil from '@/components/icon/icon-pencil';
import IconTrashLines from '@/components/icon/icon-trash-lines';
import IconXCircle from '@/components/icon/icon-x-circle';
import PanelCodeHighlight from '@/components/panel-code-highlight';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
    title: 'Media Object',
};

const MediaObject = () => {
    return (
        <div>
            <ul className="flex space-x-2 rtl:space-x-reverse">
                <li>
                    <Link href="#" className="text-primary hover:underline">
                        Components
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Media Object</span>
                </li>
            </ul>
            <div className="grid grid-cols-1 gap-6 pt-5 xl:grid-cols-2">
                {/* Simple */}
                <PanelCodeHighlight
                    title="Simple"
                    codeHighlight={`<div className="mb-5">
    <div className="flex">
        <div className="ltr:mr-4 rtl:ml-4">
            <img src="/assets/images/profile-5.jpeg" alt="img" className="w-16 h-16 rounded" />
        </div>
        <div className="flex-1">
            <h4 className="font-semibold text-lg mb-2 text-primary">Heading</h4>
            <p className="media-text">
                Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                neque eu, gravida neque.
            </p>
        </div>
    </div>
</div>`}
                >
                    <div className="mb-5">
                        <div className="flex">
                            <div className="ltr:mr-4 rtl:ml-4">
                                <img src="/assets/images/profile-5.jpeg" alt="img" className="h-16 w-16 rounded" />
                            </div>
                            <div className="flex-1">
                                <h4 className="mb-2 text-lg font-semibold text-primary">Heading</h4>
                                <p className="media-text">
                                    Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                                    neque eu, gravida neque.
                                </p>
                            </div>
                        </div>
                    </div>
                </PanelCodeHighlight>

                {/* Order */}
                <PanelCodeHighlight
                    title="Order"
                    codeHighlight={`<div className="mb-5">
    <div className="flex">
        <div className="flex-1 ltr:mr-4 rtl:ml-4">
            <h4 className="font-semibold text-lg mb-2 text-primary">Heading</h4>
            <p className="media-text">
                Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                neque eu, gravida neque.
            </p>
        </div>
        <div>
            <img src="/assets/images/profile-5.jpeg" alt="img" className="w-16 h-16 rounded" />
        </div>
    </div>
</div>`}
                >
                    <div className="mb-5">
                        <div className="flex">
                            <div className="flex-1 ltr:mr-4 rtl:ml-4">
                                <h4 className="mb-2 text-lg font-semibold text-primary">Heading</h4>
                                <p className="media-text">
                                    Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                                    neque eu, gravida neque.
                                </p>
                            </div>
                            <div>
                                <img src="/assets/images/profile-5.jpeg" alt="img" className="h-16 w-16 rounded" />
                            </div>
                        </div>
                    </div>
                </PanelCodeHighlight>

                {/* Alignment */}
                <PanelCodeHighlight
                    title="Top-aligned media"
                    codeHighlight={`<div className="mb-5">
    <div className="flex items-start">
        <div className="ltr:mr-4 rtl:ml-4">
            <img src="/assets/images/profile-5.jpeg" alt="img" className="w-16 h-16 rounded" />
        </div>
        <div className="flex-1">
            <h4 className="font-semibold text-lg mb-2 text-primary">Heading</h4>
            <p className="media-text">
                Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus
                nulla elementum, rutrum neque eu, gravida neque.
            </p>
        </div>
    </div>
</div>`}
                >
                    <div className="mb-5">
                        <div className="flex items-start">
                            <div className="ltr:mr-4 rtl:ml-4">
                                <img src="/assets/images/profile-5.jpeg" alt="img" className="h-16 w-16 rounded" />
                            </div>
                            <div className="flex-1">
                                <h4 className="mb-2 text-lg font-semibold text-primary">Heading</h4>
                                <p className="media-text">
                                    Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                                    neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus
                                    nulla elementum, rutrum neque eu, gravida neque.
                                </p>
                            </div>
                        </div>
                    </div>
                </PanelCodeHighlight>

                <PanelCodeHighlight
                    title="Center-aligned media"
                    codeHighlight={`<div className="mb-5">
    <div className="flex items-center">
        <div className="ltr:mr-4 rtl:ml-4">
            <img src="/assets/images/profile-5.jpeg" alt="img" className="w-16 h-16 rounded" />
        </div>
        <div className="flex-1">
            <h4 className="font-semibold text-lg mb-2 text-primary">Heading</h4>
            <p className="media-text">
                Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus
                nulla elementum, rutrum neque eu, gravida neque.
            </p>
        </div>
    </div>
</div>`}
                >
                    <div className="mb-5">
                        <div className="flex items-center">
                            <div className="ltr:mr-4 rtl:ml-4">
                                <img src="/assets/images/profile-5.jpeg" alt="img" className="h-16 w-16 rounded" />
                            </div>
                            <div className="flex-1">
                                <h4 className="mb-2 text-lg font-semibold text-primary">Heading</h4>
                                <p className="media-text">
                                    Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                                    neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus
                                    nulla elementum, rutrum neque eu, gravida neque.
                                </p>
                            </div>
                        </div>
                    </div>
                </PanelCodeHighlight>

                <PanelCodeHighlight
                    title="Bottom-aligned media"
                    codeHighlight={`<div className="mb-5">
    <div className="flex items-end">
        <div className="ltr:mr-4 rtl:ml-4">
            <img src="/assets/images/profile-5.jpeg" alt="img" className="w-16 h-16 rounded" />
        </div>
        <div className="flex-1">
            <h4 className="font-semibold text-lg mb-2 text-primary">Heading</h4>
            <p className="media-text">
                Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus
                nulla elementum, rutrum neque eu, gravida neque.
            </p>
        </div>
    </div>
</div>`}
                >
                    <div className="mb-5">
                        <div className="flex items-end">
                            <div className="ltr:mr-4 rtl:ml-4">
                                <img src="/assets/images/profile-5.jpeg" alt="img" className="h-16 w-16 rounded" />
                            </div>
                            <div className="flex-1">
                                <h4 className="mb-2 text-lg font-semibold text-primary">Heading</h4>
                                <p className="media-text">
                                    Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                                    neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus
                                    nulla elementum, rutrum neque eu, gravida neque.
                                </p>
                            </div>
                        </div>
                    </div>
                </PanelCodeHighlight>

                <PanelCodeHighlight
                    title="Right Aligned"
                    codeHighlight={`<div className="mb-5">
    <div className="flex">
        <div className="flex-1 ltr:mr-4 rtl:ml-4 ltr:text-right rtl:text-left">
            <h4 className="font-semibold text-lg mb-2 text-primary">Heading</h4>
            <p className="media-text">
                Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus
                nulla elementum, rutrum neque eu, gravida neque.
            </p>
        </div>
        <div>
            <img src="/assets/images/profile-5.jpeg" alt="img" className="w-16 h-16 rounded" />
        </div>
    </div>
</div>`}
                >
                    <div className="mb-5">
                        <div className="flex">
                            <div className="flex-1 ltr:mr-4 ltr:text-right rtl:ml-4 rtl:text-left">
                                <h4 className="mb-2 text-lg font-semibold text-primary">Heading</h4>
                                <p className="media-text">
                                    Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                                    neque eu, gravida neque. Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus
                                    nulla elementum, rutrum neque eu, gravida neque.
                                </p>
                            </div>
                            <div>
                                <img src="/assets/images/profile-5.jpeg" alt="img" className="h-16 w-16 rounded" />
                            </div>
                        </div>
                    </div>
                </PanelCodeHighlight>

                {/* List */}
                <PanelCodeHighlight
                    title="Media list"
                    codeHighlight={`<div className="mb-5">
    <div className="flex mb-5">
        <div className="ltr:mr-4 rtl:ml-4">
            <img src="/assets/images/profile-5.jpeg" alt="img" className="w-14 h-14 rounded" />
        </div>
        <div className="flex-1">
            <h4 className="font-semibold text-lg mb-2 text-primary">Heading</h4>
            <p className="media-text">
                Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                neque eu, gravida neque.
            </p>
        </div>
    </div>
    <div className="flex mb-5">
        <div className="ltr:mr-4 rtl:ml-4">
            <img src="/assets/images/profile-5.jpeg" alt="img" className="w-14 h-14 rounded" />
        </div>
        <div className="flex-1">
            <h4 className="font-semibold text-lg mb-2 text-primary">Heading</h4>
            <p className="media-text">
                Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                neque eu, gravida neque.
            </p>
        </div>
    </div>
    <div className="flex">
        <div className="ltr:mr-4 rtl:ml-4">
            <img src="/assets/images/profile-5.jpeg" alt="img" className="w-14 h-14 rounded" />
        </div>
        <div className="flex-1">
            <h4 className="font-semibold text-lg mb-2 text-primary">Heading</h4>
            <p className="media-text">
                Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                neque eu, gravida neque.
            </p>
        </div>
    </div>
</div>`}
                >
                    <div className="mb-5">
                        <div className="mb-5 flex">
                            <div className="ltr:mr-4 rtl:ml-4">
                                <img src="/assets/images/profile-5.jpeg" alt="img" className="h-14 w-14 rounded" />
                            </div>
                            <div className="flex-1">
                                <h4 className="mb-2 text-lg font-semibold text-primary">Heading</h4>
                                <p className="media-text">
                                    Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                                    neque eu, gravida neque.
                                </p>
                            </div>
                        </div>
                        <div className="mb-5 flex">
                            <div className="ltr:mr-4 rtl:ml-4">
                                <img src="/assets/images/profile-5.jpeg" alt="img" className="h-14 w-14 rounded" />
                            </div>
                            <div className="flex-1">
                                <h4 className="mb-2 text-lg font-semibold text-primary">Heading</h4>
                                <p className="media-text">
                                    Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                                    neque eu, gravida neque.
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="ltr:mr-4 rtl:ml-4">
                                <img src="/assets/images/profile-5.jpeg" alt="img" className="h-14 w-14 rounded" />
                            </div>
                            <div className="flex-1">
                                <h4 className="mb-2 text-lg font-semibold text-primary">Heading</h4>
                                <p className="media-text">
                                    Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                                    neque eu, gravida neque.
                                </p>
                            </div>
                        </div>
                    </div>
                </PanelCodeHighlight>

                {/* Nesting */}
                <PanelCodeHighlight
                    title="Nesting"
                    codeHighlight={`<div className="mb-5">
    <div className="flex">
        <div className="ltr:mr-4 rtl:ml-4">
            <img src="/assets/images/profile-5.jpeg" alt="img" className="w-14 h-14 rounded" />
        </div>
        <div className="flex-1">
            <h4 className="font-semibold text-lg mb-2 text-primary">Heading</h4>
            <p className="media-text mb-5">
                Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                neque eu, gravida neque.
            </p>
            <div className="flex">
                <div className="ltr:mr-4 rtl:ml-4">
                    <img src="/assets/images/profile-5.jpeg" alt="img" className="w-14 h-14 rounded" />
                </div>
                <div className="flex-1">
                    <h4 className="font-semibold text-lg mb-2 text-primary">Heading</h4>
                    <p className="media-text">
                        Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum,
                        rutrum neque eu, gravida neque.
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>`}
                >
                    <div className="mb-5">
                        <div className="flex">
                            <div className="ltr:mr-4 rtl:ml-4">
                                <img src="/assets/images/profile-5.jpeg" alt="img" className="h-14 w-14 rounded" />
                            </div>
                            <div className="flex-1">
                                <h4 className="mb-2 text-lg font-semibold text-primary">Heading</h4>
                                <p className="media-text mb-5">
                                    Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                                    neque eu, gravida neque.
                                </p>
                                <div className="flex">
                                    <div className="ltr:mr-4 rtl:ml-4">
                                        <img src="/assets/images/profile-5.jpeg" alt="img" className="h-14 w-14 rounded" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="mb-2 text-lg font-semibold text-primary">Heading</h4>
                                        <p className="media-text">
                                            Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum,
                                            rutrum neque eu, gravida neque.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </PanelCodeHighlight>

                {/* Notation Text */}
                <PanelCodeHighlight
                    title="Notation Text"
                    codeHighlight={`<div className="mb-5">
    <div className="flex">
        <div className="ltr:mr-4 rtl:ml-4">
            <img src="/assets/images/profile-5.jpeg" alt="img" className="w-14 h-14 rounded" />
        </div>
        <div className="flex-1">
            <h4 className="font-semibold text-lg mb-2 text-primary">Heading</h4>
            <p className="media-text mb-4">
                Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                neque eu, gravida neque.
            </p>
            <ul className="flex space-x-4 rtl:space-x-reverse font-bold">
                <li>
                    <button type="button" className="hover:text-primary">
                        Reply
                    </button>
                </li>
                <li>
                    <button type="button" className="hover:text-primary">
                        Edit
                    </button>
                </li>
                <li>
                    <button type="button" className="hover:text-primary">
                        Delete
                    </button>
                </li>
            </ul>
        </div>
    </div>
</div>`}
                >
                    <div className="mb-5">
                        <div className="flex">
                            <div className="ltr:mr-4 rtl:ml-4">
                                <img src="/assets/images/profile-5.jpeg" alt="img" className="h-14 w-14 rounded" />
                            </div>
                            <div className="flex-1">
                                <h4 className="mb-2 text-lg font-semibold text-primary">Heading</h4>
                                <p className="media-text mb-4">
                                    Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                                    neque eu, gravida neque.
                                </p>
                                <ul className="flex space-x-4 font-bold rtl:space-x-reverse">
                                    <li>
                                        <button type="button" className="hover:text-primary">
                                            Reply
                                        </button>
                                    </li>
                                    <li>
                                        <button type="button" className="hover:text-primary">
                                            Edit
                                        </button>
                                    </li>
                                    <li>
                                        <button type="button" className="hover:text-primary">
                                            Delete
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </PanelCodeHighlight>

                {/* Notation Icon */}
                <PanelCodeHighlight
                    title="Notation Icon"
                    codeHighlight={`<div className="mb-5">
    <div className="flex">
        <div className="ltr:mr-4 rtl:ml-4">
            <img src="/assets/images/profile-5.jpeg" alt="img" className="w-14 h-14 rounded" />
        </div>
        <div className="flex-1">
            <h4 className="font-semibold text-lg mb-2 text-primary">Heading</h4>
            <p className="media-text mb-4">
                Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                neque eu, gravida neque.
            </p>
            <ul className="flex space-x-4 rtl:space-x-reverse font-bold">
                <li>
                    <button type="button" className="flex items-center hover:text-primary">
                        <svg>...</svg>
                        Reply
                    </button>
                </li>
                <li>
                    <button type="button" className="flex items-center hover:text-primary">
                        <svg>...</svg>
                        Edit
                    </button>
                </li>
                <li>
                    <button type="button" className="flex items-center hover:text-primary">
                        <svg>...</svg>
                        Delete
                    </button>
                </li>
            </ul>
        </div>
    </div>
</div>`}
                >
                    <div className="mb-5">
                        <div className="flex">
                            <div className="ltr:mr-4 rtl:ml-4">
                                <img src="/assets/images/profile-5.jpeg" alt="img" className="h-14 w-14 rounded" />
                            </div>
                            <div className="flex-1">
                                <h4 className="mb-2 text-lg font-semibold text-primary">Heading</h4>
                                <p className="media-text mb-4">
                                    Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                                    neque eu, gravida neque.
                                </p>
                                <ul className="flex space-x-4 font-bold rtl:space-x-reverse">
                                    <li>
                                        <button type="button" className="flex items-center hover:text-primary">
                                            <IconMessageDots className="h-4 w-4 ltr:mr-1 rtl:ml-1" />
                                            Reply
                                        </button>
                                    </li>
                                    <li>
                                        <button type="button" className="flex items-center hover:text-primary">
                                            <IconPencil className="h-3.5 w-3.5 ltr:mr-1 rtl:ml-1" /> Edit
                                        </button>
                                    </li>
                                    <li>
                                        <button type="button" className="flex items-center hover:text-primary">
                                            <IconTrashLines className="h-4 w-4 ltr:mr-1 rtl:ml-1" />
                                            Delete
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </PanelCodeHighlight>

                {/* Badge */}
                <PanelCodeHighlight
                    title="Badge"
                    codeHighlight={`<div className="mb-5">
    <div className="flex">
        <div className="ltr:mr-4 rtl:ml-4">
            <img src="/assets/images/profile-5.jpeg" alt="img" className="w-14 h-14 rounded" />
        </div>
        <div className="flex-1">
            <h4 className="font-semibold text-lg mb-2 text-primary">
                Heading
                <span className="badge bg-primary ltr:float-right rtl:float-left">Web Designer</span>
            </h4>
            <p className="media-text">
                Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                neque eu, gravida neque.
            </p>
        </div>
    </div>
</div>`}
                >
                    <div className="mb-5">
                        <div className="flex">
                            <div className="ltr:mr-4 rtl:ml-4">
                                <img src="/assets/images/profile-5.jpeg" alt="img" className="h-14 w-14 rounded" />
                            </div>
                            <div className="flex-1">
                                <h4 className="mb-2 text-lg font-semibold text-primary">
                                    Heading
                                    <span className="badge bg-primary ltr:float-right rtl:float-left">Web Designer</span>
                                </h4>
                                <p className="media-text">
                                    Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                                    neque eu, gravida neque.
                                </p>
                            </div>
                        </div>
                    </div>
                </PanelCodeHighlight>

                {/* Dropdown */}
                <ComponentsMediaObjectDropdown />

                {/* Labels */}
                <PanelCodeHighlight
                    title="Labels"
                    codeHighlight={`<div className="mb-5">
    <div className="flex items-center mb-5">
        <div className="ltr:mr-4 rtl:ml-4">
            <svg>...</svg>
        </div>
        <div className="flex-1">
            <h4 className="font-semibold text-lg text-primary">Heading </h4>
            <p className="media-text">
                Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                neque eu, gravida neque.
            </p>
        </div>
    </div>
    <div className="flex items-center">
        <div className="ltr:mr-4 rtl:ml-4">
            <svg>...</svg>
        </div>
        <div className="flex-1">
            <h4 className="font-semibold text-lg text-primary">Heading </h4>
            <p className="media-text">
                Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                neque eu, gravida neque.
            </p>
        </div>
    </div>
</div>`}
                >
                    <div className="mb-5">
                        <div className="mb-5 flex items-center">
                            <div className="ltr:mr-4 rtl:ml-4">
                                <IconXCircle className="h-7 w-7 text-danger" />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-lg font-semibold text-primary">Heading </h4>
                                <p className="media-text">
                                    Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                                    neque eu, gravida neque.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="ltr:mr-4 rtl:ml-4">
                                <IconInfoTriangle className="h-7 w-7 text-warning" />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-lg font-semibold text-primary">Heading </h4>
                                <p className="media-text">
                                    Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                                    neque eu, gravida neque.
                                </p>
                            </div>
                        </div>
                    </div>
                </PanelCodeHighlight>

                {/* Checkbox */}
                <PanelCodeHighlight
                    title="Checkbox"
                    codeHighlight={`<div className="mb-5">
    <div className="flex mb-5">
        <div className="ltr:mr-4 rtl:ml-4">
            <input type="checkbox" className="form-checkbox mt-1.5" defaultChecked />
        </div>
        <div className="flex-1">
            <h4 className="font-semibold text-lg text-primary">Heading </h4>
            <p className="media-text">
                Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                neque eu, gravida neque.
            </p>
        </div>
    </div>
    <div className="flex">
        <div className="ltr:mr-4 rtl:ml-4">
            <input type="checkbox" className="form-checkbox mt-1.5" />
        </div>
        <div className="flex-1">
            <h4 className="font-semibold text-lg text-primary">Heading </h4>
            <p className="media-text">
                Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                neque eu, gravida neque.
            </p>
        </div>
    </div>
</div>`}
                >
                    <div className="mb-5">
                        <div className="mb-5 flex">
                            <div className="ltr:mr-4 rtl:ml-4">
                                <input type="checkbox" className="form-checkbox mt-1.5" defaultChecked />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-lg font-semibold text-primary">Heading </h4>
                                <p className="media-text">
                                    Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                                    neque eu, gravida neque.
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="ltr:mr-4 rtl:ml-4">
                                <input type="checkbox" className="form-checkbox mt-1.5" />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-lg font-semibold text-primary">Heading </h4>
                                <p className="media-text">
                                    Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                                    neque eu, gravida neque.
                                </p>
                            </div>
                        </div>
                    </div>
                </PanelCodeHighlight>

                {/*  Radio */}
                <PanelCodeHighlight
                    title="Radio"
                    codeHighlight={`<div className="mb-5">
    <div className="flex mb-5">
        <div className="ltr:mr-4 rtl:ml-4">
            <input type="radio" className="form-radio mt-1.5" name="radio" defaultChecked />
        </div>
        <div className="flex-1">
            <h4 className="font-semibold text-lg text-primary">Heading </h4>
            <p className="media-text">
                Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                neque eu, gravida neque.
            </p>
        </div>
    </div>
    <div className="flex">
        <div className="ltr:mr-4 rtl:ml-4">
            <input type="radio" className="form-radio mt-1.5" name="radio" />
        </div>
        <div className="flex-1">
            <h4 className="font-semibold text-lg text-primary">Heading </h4>
            <p className="media-text">
                Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                neque eu, gravida neque.
            </p>
        </div>
    </div>
</div>`}
                >
                    <div className="mb-5">
                        <div className="mb-5 flex">
                            <div className="ltr:mr-4 rtl:ml-4">
                                <input type="radio" className="form-radio mt-1.5" name="radio" defaultChecked />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-lg font-semibold text-primary">Heading </h4>
                                <p className="media-text">
                                    Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                                    neque eu, gravida neque.
                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="ltr:mr-4 rtl:ml-4">
                                <input type="radio" className="form-radio mt-1.5" name="radio" />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-lg font-semibold text-primary">Heading </h4>
                                <p className="media-text">
                                    Fusce condimentum cursus mauris et ornare. Mauris fermentum mi id sollicitudin viverra. Aenean dignissim sed ante eget dapibus. Sed dapibus nulla elementum, rutrum
                                    neque eu, gravida neque.
                                </p>
                            </div>
                        </div>
                    </div>
                </PanelCodeHighlight>
            </div>
        </div>
    );
};

export default MediaObject;
