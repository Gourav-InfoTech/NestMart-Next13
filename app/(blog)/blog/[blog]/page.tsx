import React from 'react'

const page = ({params}:any) => {
    let {blog} = params;
    console.log(blog);

  return (
    <div className='common_width section_padding'>Blog {blog}</div>
  )
}

export default page