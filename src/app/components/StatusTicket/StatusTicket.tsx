import { statusOrder } from "@/app/enum/statusOrder";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";

interface StatusTicket{
    status?: statusOrder;
    onStatusChange?: (newStatus: statusOrder) => void;
}

function StatusTicket(props: StatusTicket) {


    if(props.status === statusOrder.COMPLETED) {
        return(
            <Popover>
                {({ open }) => (
                    <>
                        <Popover.Button className="flex w-full justify-center items-center bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
                            <span>{statusOrder.COMPLETED}</span>
                                <ChevronDownIcon
                                className={`${ open ? '' : 'text-opacity-70'}
                                h-5 w-5 text-green-600 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                                aria-hidden="true"/>    
                        </Popover.Button>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                            >
                            <Popover.Panel className="absolute max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                            <div className="overflow-hidden rounded-lg shadow-lg">
                                <div className="bg-gray-50 ">
                                    <a className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-ou">
                                        <span className="block text-sm">
                                            <div className="space-y-2">
                                                <p className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs cursor-pointer" >{ statusOrder.PENDING }</p>
                                                <p className="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs cursor-pointer">{ statusOrder.SCHEDULED }</p>
                                            </div>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            </Popover.Panel>
                        </Transition>
                    </>
                    
                )}
            </Popover>
        ) 
    }  else if (props.status === statusOrder.PENDING) {
        return (
            <Popover>
                {({ open }) => (
                    <>
                    <Popover.Button className="flex w-full justify-center items-center bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">
                            <span>{statusOrder.PENDING}</span>
                                <ChevronDownIcon
                                className={`${open ? '' : 'text-opacity-70'}
                                h-5 w-5 text-red-600 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                                aria-hidden="true"/>    
                    </Popover.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                        >
                        <Popover.Panel className="absolute max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                        <div className="overflow-hidden rounded-lg shadow-lg">
                            <div className="bg-gray-50 ">
                                <a className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-ou">
                                    <span className="block text-sm">
                                        <div className="space-y-2">
                                            <p className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs cursor-pointer">{statusOrder.COMPLETED}</p>
                                            <p className="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs cursor-pointer">{statusOrder.SCHEDULED}</p>
                                        </div>
                                    </span>
                                </a>
                            </div>
                        </div>
                        </Popover.Panel>
                    </Transition>
                    </>
                )}
            </Popover>
        )
    } else if (props.status === statusOrder.SCHEDULED) {
        return (
            <Popover>
                {({ open }) => (
                    <>
                    <Popover.Button className="flex w-full justify-center items-center bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs">
                            <span>{statusOrder.SCHEDULED}</span>
                                <ChevronDownIcon
                                className={`${open ? '' : 'text-opacity-70'}
                                h-5 w-5 text-yellow-600 transition duration-150 ease-in-out group-hover:text-opacity-80`}
                                aria-hidden="true"/>    
                    </Popover.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                        >
                        <Popover.Panel className="absolute max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                        <div className="overflow-hidden rounded-lg shadow-lg">
                            <div className="bg-gray-50 ">
                                <a className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-ou">
                                    <span className="block text-sm text-gray-500">
                                        <div className="space-y-2">
                                            <p className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs cursor-pointer">{statusOrder.COMPLETED}</p>
                                            <p className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs cursor-pointer">{statusOrder.PENDING}</p>
                                        </div>
                                    </span>
                                </a>
                            </div>
                        </div>
                        </Popover.Panel>
                    </Transition>
                    </>
                )}
            </Popover>
        )
    }
    return null;
}

export default StatusTicket;
