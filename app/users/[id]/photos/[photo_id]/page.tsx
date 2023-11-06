import React from 'react'

interface Props {
    params: {id: number, photo_id : number}
}

const PhotoDetailsPage = ({params: { id, photo_id }} : Props) => {
  return (
    <div>PhotoDetailsPage { photo_id } in Page { id }</div>
  )
}

export default PhotoDetailsPage