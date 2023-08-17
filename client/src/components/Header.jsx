import { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom';

export default function Example() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link
                        to="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Home</span>
                        <h1 className="text-2xl font-semibold text">Home</h1>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <Popover.Group className="hidden lg:flex lg:gap-x-12">

                    <Link to="/items" className="text-sm font-semibold leading-6 text-gray-900">
                        Items
                    </Link>
                    <Link to="/about" className="text-sm font-semibold leading-6 text-gray-900">
                        About
                    </Link>
                    <Link to="/contact" className="text-sm font-semibold leading-6 text-gray-900">
                        Contact
                    </Link>
                </Popover.Group>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-5">
                    <Link
                        to="/cart"
                        className="text-sm font-semibold leading-6 text-gray-900 rounded-md px-3 py-2 bg-gray-100 hover:bg-gray-200"
                    >
                        Cart
                    </Link>
                    {
                        localStorage.getItem('token') ?
                            <button
                                className="text-sm font-semibold leading-6 text-white rounded-md px-3 py-2 bg-red-500 hover:bg-gray-200 hover:text-red-500"
                                onClick={() => {
                                    localStorage.removeItem('token');
                                    window.location.href = '/';
                                }}
                            >
                                Log out
                            </button>
                            :
                            <Link
                                to="/login"
                                className="text-sm font-semibold leading-6 text-white rounded-md px-3 py-2 bg-blue-500 hover:bg-gray-200 hover:text-blue-500"
                            >
                                Log in
                            </Link>
                    }
                </div>
            </nav>
            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link
                            to='/'
                            className="-m-1.5 p-1.5">
                            <span className="sr-only">Home</span>
                            <h1 className="text-2xl font-bold text-gray-900">Home</h1>
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Link
                                    to="/items"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Items
                                </Link>
                                <Link
                                    to='/about'
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    About
                                </Link>
                                <Link
                                    to='/contact'
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Contact
                                </Link>
                            </div>
                            <div className="py-6">
                                <Link
                                    to='/cart'
                                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                >
                                    Cart
                                </Link>
                                {
                                    localStorage.getItem('token') ?
                                        <button
                                            className="text-sm font-semibold leading-6 text-white rounded-md px-3 py-2 bg-red-500 hover:bg-gray-200 hover:text-red-500"
                                            onClick={() => {
                                                localStorage.removeItem('token');
                                                window.location.href = '/';
                                            }}
                                        >
                                            Log out
                                        </button>
                                        :
                                        <Link
                                            to="/login"
                                            className="text-sm font-semibold leading-6 text-white rounded-md px-3 py-2 bg-blue-500 hover:bg-gray-200 hover:text-blue-500"
                                        >
                                            Log In
                                        </Link>
                                }
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}