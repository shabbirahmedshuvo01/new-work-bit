import React from 'react';
import { stories } from '../../WebData';

const Blogs = () => {
    return (
        <div>
            {stories.map(story => <>


                {/* Header added */}

                {

                    story?.title &&

                    <section>
                        <div className='lg:flex m-8 justify-evenly mx-20 bg-base-200 rounded-md'>
                            <section className='m-5'>

                                {/* titel */}
                                <div>
                                    <h1 className='text-xl font-bold'>{story.title}</h1>
                                </div>

                                {/* avatar */}

                                <div className='lg:flex justify-between mt-5'>
                                    <div className='flex gap-3'>
                                        <div class="avatar placeholder">
                                            <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
                                                <img className='' src={story.author.profileImage} alt="" />
                                            </div>
                                        </div>

                                        <p className='font-semibold mt-2'>{story.author.name}</p>
                                    </div>

                                    <div className='flex gap-3'>
                                        <div class="avatar placeholder">
                                            <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
                                                <img className='' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKGTYKM_aWay9fgVT-7YklZiEeBYO3FukS_w&usqp=CAU" alt="" />
                                            </div>
                                        </div>

                                        <p className='font-semibold mt-2'>{story.community.name}</p>
                                    </div>

                                </div>

                                <div class="divider"></div>

                                <p className='text-start text-gray-300 '>{story.created}
                                    <span className='text-gray-500'>{story.hashtags}</span></p>
                            </section>
                            <div className='mt-2'>
                                <img className='rounded-md h-48' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfJfcYvWqziSX3eudabThDFiiHqr9gQlsd69T_h269yA&s" alt="" />
                            </div>
                        </div>
                    </section>

                }


                {/* Blogs */}

                <div className='mt-10'>
                    <section>
                        <div className='mx-28'>
                            <img className='w-full h-48' src={story.coverImage} alt="" />
                        </div>
                        <div className='m-5'>
                            <p className='font-semibold text-start mx-20'>{story.content}</p>
                        </div>
                    </section>

                    <div class="divider"></div>

                    <section className='flex justify-around'>
                        <div className='flex gap-3'>
                            <div class="avatar placeholder">
                                <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
                                    <img className='' src={story.author.profileImage} alt="" />
                                </div>
                            </div>

                            <p className='font-semibold mt-2'>{story.author.name}</p>
                        </div>

                        <div>
                            <p className='text-gray-400'>{story.created}</p>
                        </div>

                        <div className='flex gap-3'>
                            <div class="avatar placeholder">
                                <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
                                    <img className='' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKGTYKM_aWay9fgVT-7YklZiEeBYO3FukS_w&usqp=CAU" alt="" />
                                </div>
                            </div>
                            <p className='font-semibold mt-2'>{story.community.name}</p>
                        </div>

                    </section>
                </div>

            </>)}


        </div>
    );
};

export default Blogs;