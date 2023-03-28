import React from 'react';

const styles = {
  listItem: {
    display: "flex",
    flexDirection: "row"
  }
}

function Bucket(props) {
  //console.log(props.bucket);

  return (
    <div>
    {props.bucket[0] ? (
      props.bucket.map((item, i) => {
        //console.log(item)

        return (
        <div style={styles.listItem} key={i}>
          <p>{item.text}</p>
          <p onClick={() => props.removeBucketItem(item.id)}> 🗑️</p>
        </div>
        )
      })
    ) : (
      <div>No Items Added Just Yet</div>
    )}
    </div>
  )
}

export default Bucket;
