import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function UpdateCard({ date, body, img_url, link_url, link_text }) {
  const shortDate = moment(date).format('MMM Do')

  return (
    <div
      className={`bg-[#262626]  md:my-0 min-w-[300px] h-[300px] w-[300px] rounded-lg justify-center text-white flex `}
    >
      <div
        className={`flex  flex-col gap-4  ${!img_url && 'justify-around my-0 gap-0'}`}
      >
        <div className='flex '>
          {img_url && (
            <div className=' h-[90px] max-h-28 flex items-center justify-center overflow-hidden lg:flex-1 w-full rounded-t-lg'>
              <a
                href={img_url}
                target='_blank'
                rel='noopener noreferrer'
                className='w-full'
              >
                <Image
                  src={img_url}
                  height={100}
                  width={100}
                  alt='image'
                  className='w-full hover:scale-110 hover:opacity-80 transition-all'
                />
              </a>
            </div>
          )}
        </div>

        <p
          className={`w-[90%] text-white overflow-y-scroll px-2 ml-4 text-pretty ${img_url ? 'max-h-[7rem]' : 'max-h-[12rem]'} `}
        >
          {body}
        </p>

        <div className='flex justify-between p-6'>
          <p className='message-white min-w-20'>{shortDate}</p>
          {link_url && link_text ?
            <a
              href={link_url}
              className='text-[#7A8EFF] text-right hover:underline hover:scale-105 transition-all'
              target='_blank'
              rel='noopener noreferrer'
            >
              {link_text}
            </a>
          : <div></div>}
        </div>
      </div>
    </div>
  )
}

export default UpdateCard
