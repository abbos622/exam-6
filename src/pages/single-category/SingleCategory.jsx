import React, { useEffect } from 'react'

const SingleCategory = () => {
    useEffect(() => {
        props.loadProducts("1048");
      }, []);
  return (
    <div>SingleCategory</div>
  )
}

export default connect(null, { loadProducts })( SingleCategory)