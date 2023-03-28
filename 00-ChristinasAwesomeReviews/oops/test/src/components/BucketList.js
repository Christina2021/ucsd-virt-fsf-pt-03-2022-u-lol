import React, { useState, useEffect } from 'react';
import BucketForm from './BucketForm';
import Bucket from './Bucket';

function BucketList() {
  const [bucket, setBucket] = useState([
    // {
    //   id: "10001",
    //   text: "Apples",
    // }
  ]);
  
  // useEffect(() => {
  //   alert("HIIIIII");
  // }, []);

  // Function to add a bucket list item
  const addGroceryItem = (item) => {
    // console.log(
    //   'Added',
    //   item
    // );
    // Check to see if the item text is empty
    if (!item.text) {
      return;
    }

    // Add the new bucket list item to the existing array of objects
    const newBucket = [item, ...bucket];
    // console.log(newBucket);

    // Call setBucket to update state with our new set of bucket list items
    setBucket(newBucket);
  };


  // Function to remove bucket list item and update state
  const removeBucketItem = (id) => {
    const updatedBucket = [...bucket].filter((item) => item.id !== id);

    setBucket(updatedBucket);
  };



  return (
    <div style={{flex:"display", flexDirection:"column"}}>
      <h1>Grocery list?</h1>
      <BucketForm onSubmit={addGroceryItem} />
      <Bucket
        bucket={bucket}
        removeBucketItem={removeBucketItem}
      ></Bucket>
    </div>
  );
}

export default BucketList;
