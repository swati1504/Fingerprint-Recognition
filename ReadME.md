# Fingerprint Recogniton

## Problem Statement

The objective of the project is to develop a fingerprint recognition system utilizing convolutional neural networks (CNN) and Random Forest models. Given a test fingerprint image, the system aims to identify and return the most closely matched fingerprint image from a database, achieving robust and accurate biometric identification.

## Dataset

- Train data: 80 images (8 people - 10 fingerprints per person)
- Test data: 80 images (8 people - 10 fingerprints per person)

## Setup

- Clone the repo:

```bash
git clone https://github.com/swati1504/Fingerprint-Recognition
```

- Move to Fingerprint-Recognition directory and run:

```bash
npm install
```

- Move to frontend directory and run the `index.html` file by either opening on browser or serving it in live server extension.

- Select the images from `data/test` directory and wait for the python script to return the data. This data will be displayed from `data/train` directory in frontend.

## Results

- Random Forest gave an accuracy of 98%.

- CNN gave an accuracy of 100%.
