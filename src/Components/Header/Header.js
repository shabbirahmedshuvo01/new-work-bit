import React from 'react';

const Header = () => {
    return (
        <div className='lg:flex m-8 justify-evenly mx-20 bg-base-200 rounded-md'>
            <section className='m-5'>

                {/* titel */}
                <div>
                    <h1 className='text-xl font-bold'>This text is for our article title, sometime it should be long as like this</h1>
                </div>

                {/* avatar */}

                <div className='lg:flex justify-between mt-5'>
                    <div className='flex gap-3'>
                        <div class="avatar placeholder">
                            <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
                                <img className='' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoVjZdxKRdBHYIZbCpJx1GAZe5qyNd48S8XQ&usqp=CAU" alt="" />
                            </div>
                        </div>

                        <p className='font-semibold mt-2'>Michael Scott</p>
                    </div>

                    <div className='flex gap-3'>
                        <div class="avatar placeholder">
                            <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
                                <img className='' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKGTYKM_aWay9fgVT-7YklZiEeBYO3FukS_w&usqp=CAU" alt="" />
                            </div>
                        </div>

                        <p className='font-semibold mt-2'>Travel for explore</p>
                    </div>

                </div>

                <div class="divider"></div>

                <p className='text-start text-gray-300 '>Nov 4,2019 | 2 min read <span className='text-gray-500'>#Website #Desing #Dev_Web Adobe.. ..</span></p>
            </section>
            <div className=''>
                <img className='rounded-md h-48' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfJfcYvWqziSX3eudabThDFiiHqr9gQlsd69T_h269yA&s" alt="" />
            </div>
        </div>
    );
};

export default Header;