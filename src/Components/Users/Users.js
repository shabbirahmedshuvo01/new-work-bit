import React from 'react';
import { communities } from '../../WebData'

const Users = () => {
    return (
        <div>
            {/*  {stories.map(story => <> */}
            {communities.map(community => <>
                <div className='mt-20 flex justify-evenly bg-slate-900 text-white mx-64 rounded-md'>
                    <section className='flex gap-5'>
                        <div className='items-start'>
                            <img className='w-48 p-1' src={community.profileImage} alt="" />
                        </div>
                        <div className='mt-2'>
                            <h3 className='text-slate-400 text-start'><span className='font-semibold text-xl text-white'>{community.name}</span> <span>{community.summary.stories} Stories</span></h3>
                            <p className='text-start text-xs text-slate-400'>{community.bio.length < 30 ? community.bio : community.bio.slice(0, 30)}</p>
                        </div>
                    </section>

                    <section className='flex gap-5 mt-3'>
                        <h3>{community.summary.followers} Followers</h3>
                        <h3 className='font-semibold text-blue-600'>Follow</h3>
                    </section>
                </div>
            </>)}
        </div>
    );
};

export default Users;