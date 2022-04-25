import React, { Component, useState } from 'react';
import "./PhotoGallery.css";
import {QuiltedImageList} from "./Photos";

function PhotoGallery() {
    return (
        <div className='photoGallery'>
            <h1>Photo Gallery</h1>
            <div className='gallery'>
                <QuiltedImageList />
            </div>
        </div>
    );
}
 
export default PhotoGallery;